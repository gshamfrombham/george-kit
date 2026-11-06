/* app.js: router, screens and the data adapter for My Dashboard.
   No framework, no build. Each screen is one render function that returns HTML.
   To change a screen, edit its function below. To change where data comes from,
   edit the `api` object (sample JSON now, your real API later). */
(function () {
  "use strict";

  var cfg = window.DASHBOARD_CONFIG || {};
  var data = null;           // loaded data
  var loadError = null;
  var state = { brand: "all", status: "open", role: "owner" };
  try { state.role = localStorage.getItem("dash-role") || "owner"; } catch (e) {}

  // ---------- Helpers ----------
  function h(v) {
    return String(v == null ? "" : v)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function fmtNum(n) { return Number(n).toLocaleString("en-US"); }
  function fmtMoney(n) { return "$" + Number(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function fmtWhen(iso) {
    if (!iso) return "Never";
    var d = new Date(iso);
    if (isNaN(d)) return String(iso);
    return d.toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZone: cfg.timeZone || undefined });
  }
  function fmtDay(iso) {
    var d = new Date(iso);
    if (isNaN(d)) return String(iso);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: cfg.timeZone || undefined });
  }
  function brandOf(id) {
    var b = (cfg.brands || []).filter(function (x) { return x.id === id; })[0];
    return b || { id: id, name: id || "Unassigned", color: "#8E949C" };
  }
  function isSlot(s) { return /\{\{[A-Z0-9_]+\}\}/.test(String(s || "")); }
  function slotText(s) {
    return isSlot(s)
      ? '<span class="chip" title="Your agent fills this in">' + h(s) + "</span>"
      : h(s);
  }
  function initials(name) {
    return String(name || "?").split(/\s+/).map(function (p) { return p[0]; }).join("").slice(0, 2).toUpperCase();
  }
  function toast(msg) {
    var t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { t.classList.remove("show"); }, 2600);
  }

  var ICONS = {
    home: '<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/>',
    approvals: '<path d="M9 11l3 3 8-8"/><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    brands: '<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
    memory: '<path d="M12 5a3 3 0 0 0-6 0 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5Z"/><path d="M12 5a3 3 0 0 1 6 0 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>',
    automations: '<path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/><circle cx="12" cy="12" r="3"/>',
    data: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    team: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',
    more: '<circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    inbox: '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.5 5h13L22 12v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6Z"/>',
    plug: '<path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0V8ZM12 18v4"/>',
    alert: '<path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/>',
    spark: '<path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2"/>',
    check: '<path d="M5 12l5 5L20 7"/>',
    outgoing: '<path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7Z"/>',
    // Channel glyphs: plain shapes, no third-party logos.
    ch_facebook: '<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 11h5M18.5 8.5v5"/>',
    ch_instagram: '<rect x="3" y="6" width="18" height="14" rx="3"/><circle cx="12" cy="13" r="3.5"/><path d="M8 6l1.5-2h5L16 6"/>',
    ch_meta_ads: '<path d="M3 10v4h3l6 4V6L6 10H3Z"/><path d="M16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12"/>',
    ch_email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    ch_substack: '<path d="M5 4h14v4H5zM5 11h14M5 15h14M5 19h9"/>',
    ch_website: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    ch_youtube: '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3V9Z"/>'
  };
  var CHANNELS = {
    facebook: "Facebook", instagram: "Instagram", meta_ads: "Meta ads", email: "Email",
    substack: "Substack", website: "Website", youtube: "YouTube"
  };
  function channelBadge(c) {
    if (!c) return "";
    return '<span class="chip" title="Channel">' + icon("ch_" + c, "i-sm") + h(CHANNELS[c] || c) + "</span>";
  }
  function fmtTime(iso) {
    var d = new Date(iso);
    if (isNaN(d)) return "";
    return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZone: cfg.timeZone || "America/Chicago" });
  }
  function dayKey(d) { return d.toLocaleDateString("en-CA", { timeZone: cfg.timeZone || "America/Chicago" }); }
  // Who is signed in. Live mode: GET /api/me. Demo: the View as switch.
  function me() {
    if (apiMode) return (data && data.me) || { email: "", name: "", owner: false, roles: {} };
    var owner = cfg.owner || {};
    if (state.role === "reviewer") {
      var rv = (data && data.team || []).filter(function (p) { return p.name === "Reviewer"; })[0] || {};
      return { email: rv.email || "reviewer@example.com", name: "Reviewer", owner: false, roles: rv.roles || {} };
    }
    var all = {}; (cfg.brands || []).forEach(function (b) { all[b.id] = "approver"; });
    return { email: owner.email || "you@example.com", name: owner.name || "Owner", owner: true, roles: all };
  }
  function isReviewer(brand) { var m = me(); if (m.owner) return false; var r = m.roles || {}; return brand ? (r[brand] === "reviewer" || r[brand] === "approver") : Object.keys(r).some(function (k) { return r[k] === "reviewer" || r[k] === "approver"; }); }
  function isApproverFor(brand) { var m = me(); return m.owner || (m.roles && m.roles[brand] === "approver"); }
  function needsSpendApproval(i) { return i.channel === "meta_ads" && i.budget && Number(i.budget.total) > 0; }
  // Two-person rule: a passed review of the current version, by someone else.
  function reviewFor(i) {
    return (i.reviews || []).filter(function (r) { return r.version === i.version && r.passed; }).slice(-1)[0] || null;
  }
  function approvalFor(i) {
    return (i.approvals || []).filter(function (a) { return a.version === i.version; }).slice(-1)[0] || null;
  }
  function icon(name, cls) {
    return '<svg class="i ' + (cls || "") + '" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || "") + "</svg>";
  }

  // ---------- Data adapter ----------
  // ONE seam for all data: api.get(path) and api.post(path, body, method).
  // Demo mode (cfg.demo = true) answers from the sample file and keeps changes
  // in memory only. Live mode calls cfg.apiBase + path (kit module 16).
  var apiMode = cfg.demo === false;
  var sampleCache = null;
  function loadSample() {
    if (!sampleCache) {
      sampleCache = fetch(cfg.sampleFile || "data.json", { cache: "no-store" }).then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      }).then(rebaseSample);
    }
    return sampleCache;
  }
  // Demo only: shift sample schedule dates by whole days so the earliest
  // upcoming item lands today. Keeps the Going out screen alive forever.
  function rebaseSample(s) {
    if (!s || s._rebased) return s;
    var upcoming = (s.items || []).filter(function (i) { return i.scheduled_for && ["published", "rejected"].indexOf(i.status) < 0; });
    if (upcoming.length) {
      var min = upcoming.map(function (i) { return dayKey(new Date(i.scheduled_for)); }).sort()[0];
      var shift = Math.round((Date.parse(dayKey(new Date())) - Date.parse(min)) / 864e5);
      (s.items || []).forEach(function (i) {
        if (!i.scheduled_for) return;
        i.scheduled_for = new Date(Date.parse(i.scheduled_for) + shift * 864e5).toISOString();
        if (i.budget && i.budget.start) {
          i.budget.start = dayKey(new Date(Date.parse(i.budget.start + "T12:00:00Z") + shift * 864e5));
          i.budget.end = dayKey(new Date(Date.parse(i.budget.end + "T12:00:00Z") + shift * 864e5));
        }
      });
    }
    s._rebased = true;
    return s;
  }
  function outgoingFrom(items, days) {
    var start = Date.parse(dayKey(new Date()) + "T00:00:00") - 864e5; // a day of slack for time zones
    var end = Date.now() + days * 864e5;
    return (items || []).filter(function (i) {
      var t = Date.parse(i.scheduled_for || "");
      return t && t >= start && t <= end && i.status !== "rejected" && dayKey(new Date(t)) >= dayKey(new Date());
    }).sort(function (a, b) { return Date.parse(a.scheduled_for) - Date.parse(b.scheduled_for); });
  }
  // Maps an API path to the matching part of the sample file.
  var SAMPLE_KEYS = { "/items": "items", "/rhythm": "rhythm", "/kpis": "kpis", "/metrics": "metrics",
    "/memory": "memory", "/automations": "automations", "/activity": "activity", "/people": "team" };
  var api = {
    get: function (path) {
      if (!apiMode) {
        return loadSample().then(function (s) {
          if (path.split("?")[0] === "/outgoing") {
            var m = /days=(\d+)/.exec(path);
            return outgoingFrom(s.items, m ? Number(m[1]) : 7);
          }
          var key = SAMPLE_KEYS[path.split("?")[0]];
          return key ? s[key] : null;
        });
      }
      return fetch((cfg.apiBase || "/api").replace(/\/$/, "") + path, { credentials: "include" })
        .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); });
    },
    patch: function (path, body) { return api.post(path, body, "PATCH"); },
    post: function (path, body, method) {
      if (!apiMode) return Promise.resolve({ ok: true, sample: true });
      return fetch((cfg.apiBase || "/api").replace(/\/$/, "") + path, {
        method: method || "POST", credentials: "include",
        headers: { "Content-Type": "application/json" }, body: JSON.stringify(body || {})
      }).then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); });
    },
    // Loads everything the screens need. Each call is separate, so one
    // missing endpoint shows an empty state instead of blanking the app.
    load: function () {
      // Any failed call rejects the load, so the screen shows an error with
      // Retry instead of pretending there is no data.
      function safe(path, fallback) {
        return api.get(path).then(function (v) { return v == null ? fallback : v; }, function (e) {
          throw new Error(path.split("?")[0] + ": " + (e.message || e));
        });
      }
      return Promise.all([
        safe("/items?status=all", []), safe("/rhythm", []), safe("/kpis", []), safe("/metrics", {}),
        safe("/memory", {}), safe("/automations", []), safe("/activity", []), safe("/people", []),
        safe("/outgoing?days=7", []), apiMode ? safe("/me", null) : Promise.resolve(null)
      ]).then(function (r) {
        return { sample: !apiMode, items: r[0], rhythm: r[1], kpis: r[2], metrics: r[3], memory: r[4], automations: r[5], activity: r[6], team: r[7], outgoing: r[8], me: r[9] };
      });
    },
    decide: function (item, decision, comment) {
      return api.post("/items/" + encodeURIComponent(item.id) + "/decision", { version: item.version, decision: decision, comment: comment || "" });
    },
    setAutomation: function (auto, on) {
      return api.patch("/automations/" + encodeURIComponent(auto.id), { paused: !on });
    },
    markPublished: function (item, url) {
      return api.post("/items/" + encodeURIComponent(item.id) + "/mark-published", { url: url });
    },
    contextLost: function (note) {
      return api.post("/events", { type: "context_lost", note: note || "" });
    }
  };

  function emptyData() {
    return { sample: false, items: [], outgoing: [], rhythm: [], kpis: [], metrics: { weekly: null, topPages: [], sources: [] },
      memory: { now: [], handoffs: [], worklog: [], decisions: [], contextLost: 0 }, automations: [], activity: [], team: [] };
  }

  // ---------- Shell ----------
  function applyConfig() {
    document.title = cfg.siteName || "My Dashboard";
    $("#siteName").textContent = cfg.siteName || "My Dashboard";
    $("#siteMark").textContent = cfg.siteMark || initials(cfg.siteName);
    var owner = cfg.owner || {};
    $("#topAvatar").textContent = owner.initials || initials(owner.name);
    $("#sideAvatar").textContent = owner.initials || initials(owner.name);
    $("#ownerName").textContent = owner.name || "Owner";
    var m = data ? me() : null;
    $("#ownerName").textContent = m && m.name ? m.name : (owner.name || "Owner");
    $("#ownerRole").textContent = m && !m.owner ? "Reviewer" + (apiMode ? "" : " (demo view)") : (owner.role || "");
    var badge = $("#demoBadge");
    if (badge) badge.hidden = cfg.demo === false;
    applyAccent();
  }
  function applyAccent() {
    var a = cfg.accent || {};
    var saved = null;
    try { saved = localStorage.getItem("dash-accent"); } catch (e) {}
    var base = saved || a.base;
    if (!base) return;
    var root = document.documentElement.style;
    var dark = document.documentElement.getAttribute("data-theme") === "dark";
    root.setProperty("--accent", base);
    root.setProperty("--accent-strong", saved ? base : (a.strong || base));
    root.setProperty("--accent-text", dark ? (a.darkText || "#8DB4EA") : (saved ? base : (a.text || base)));
    var rgb = hexToRgb(base);
    if (rgb) {
      root.setProperty("--accent-soft", "rgba(" + rgb + "," + (dark ? 0.18 : 0.10) + ")");
      root.setProperty("--accent-ring", "rgba(" + rgb + ",0.35)");
    }
  }
  function hexToRgb(hex) {
    var m = /^#?([0-9a-f]{6})$/i.exec(String(hex || "").trim());
    if (!m) return null;
    var n = parseInt(m[1], 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255].join(",");
  }
  function themePref() { try { return localStorage.getItem("dash-theme") || cfg.theme || "system"; } catch (e) { return "system"; } }
  function setTheme(pref) {
    try { localStorage.setItem("dash-theme", pref); } catch (e) {}
    var dark = pref === "dark" || (pref === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (dark) document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.removeAttribute("data-theme");
    applyAccent();
  }

  // Items a person has to act on: approve, or publish by hand (level 2).
  function needsPerson(i) { return i.status === "pending" || i.status === "ready_for_person"; }
  function navItems() { return (cfg.nav || []).filter(function (n) { return n.on !== false; }); }
  function pendingCount() {
    return (data && data.items || []).filter(needsPerson).length;
  }

  function renderNav(route) {
    var pc = pendingCount();
    $("#nav").innerHTML = navItems().map(function (n) {
      var cur = route === n.id ? ' aria-current="page"' : "";
      var badge = n.id === "approvals" && pc ? '<span class="badge" aria-label="' + pc + ' waiting">' + pc + "</span>" : "";
      return '<a href="#/' + n.id + '"' + cur + ">" + icon(n.id) + "<span>" + h(n.label) + "</span>" + badge + "</a>";
    }).join("");
    $("#sideBrands").innerHTML = (cfg.brands || []).map(function (b) {
      var cur = location.hash === "#/brands/" + b.id ? ' aria-current="page"' : "";
      return '<a href="#/brands/' + h(b.id) + '"' + cur + '><span class="swatch" style="background:' + h(b.color) + '"></span>' + h(b.name) + "</a>";
    }).join("");
    var quick = ["home", "approvals", "calendar", "memory"].filter(function (id) {
      return navItems().some(function (n) { return n.id === id; });
    });
    $("#bottomNav").innerHTML = quick.map(function (id) {
      var n = navItems().filter(function (x) { return x.id === id; })[0];
      var cur = route === id ? ' aria-current="page"' : "";
      var badge = id === "approvals" && pc ? '<span class="badge">' + pc + "</span>" : "";
      return '<a href="#/' + id + '"' + cur + ">" + icon(id) + "<span>" + h(n.label) + "</span>" + badge + "</a>";
    }).join("") + '<a href="#" id="moreBtn" aria-label="More screens">' + icon("more") + "<span>More</span></a>";
    var more = $("#moreBtn");
    if (more) more.addEventListener("click", function (e) { e.preventDefault(); openNav(true); });
  }

  function openNav(open) {
    document.body.classList.toggle("nav-open", open);
    $("#menuBtn").setAttribute("aria-expanded", open ? "true" : "false");
  }

  function sampleBanner() {
    if (loadError) {
      return '<div class="sample-banner" role="note">' + icon("alert", "i-sm") +
        "<span><b>No data loaded.</b> Open this folder through a web server (for example <code>python3 -m http.server</code>), or set <code>demo: false</code> and <code>apiBase</code> in config.js. Details: " + h(loadError) + "</span></div>";
    }
    return data && data.sample
      ? '<div class="sample-banner" role="note">' + icon("alert", "i-sm") + "<span><b>Sample data.</b> Everything you see is a placeholder. Set <code>demo: false</code> in config.js when the module 16 API is live.</span></div>"
      : "";
  }

  function emptyState(ic, title, text, action) {
    return '<div class="empty">' + '<div class="ic">' + icon(ic) + "</div><h3>" + h(title) + "</h3><p>" + h(text) + "</p>" + (action || "") + "</div>";
  }

  function statusChip(s) {
    var map = {
      pending: ["warn", "Waiting for you"], changes: ["bad", "Changes requested"], approved: ["ok", "Approved"],
      publishing: ["info", "Publishing"], ready_for_person: ["info", "Ready for you to publish"], published: ["idle", "Published"], rejected: ["idle", "Rejected"],
      ok: ["ok", "Healthy"], warn: ["warn", "Needs a look"], bad: ["bad", "Failing"], idle: ["idle", "Idle"]
    };
    var m = map[s] || ["idle", s || "Unknown"];
    return '<span class="status ' + m[0] + '">' + h(m[1]) + "</span>";
  }

  // ---------- Charts (inline SVG, no library) ----------
  function sparkline(series) {
    if (!series || series.length < 2) return "";
    var w = 200, ht = 36, min = Math.min.apply(null, series), max = Math.max.apply(null, series);
    var span = max - min || 1;
    var pts = series.map(function (v, i) {
      return (i * w / (series.length - 1)).toFixed(1) + "," + (ht - 3 - ((v - min) / span) * (ht - 6)).toFixed(1);
    });
    return '<svg class="spark" viewBox="0 0 ' + w + " " + ht + '" preserveAspectRatio="none" aria-hidden="true">' +
      '<polyline points="' + pts.join(" ") + '" fill="none" stroke="var(--accent)" stroke-width="2" vector-effect="non-scaling-stroke"/></svg>';
  }
  function lineChart(labels, values, label) {
    if (!values || !values.length) return emptyState("data", "No data yet", "Connect a source to see this chart.");
    var w = 600, ht = 180, pad = { l: 40, r: 12, t: 12, b: 24 };
    var max = Math.max.apply(null, values), min = 0, span = max - min || 1;
    var iw = w - pad.l - pad.r, ih = ht - pad.t - pad.b;
    function x(i) { return pad.l + (values.length === 1 ? iw / 2 : i * iw / (values.length - 1)); }
    function y(v) { return pad.t + ih - ((v - min) / span) * ih; }
    var grid = "", ticks = 4;
    for (var t = 0; t <= ticks; t++) {
      var val = min + span * t / ticks, yy = y(val).toFixed(1);
      grid += '<line class="grid-line" x1="' + pad.l + '" x2="' + (w - pad.r) + '" y1="' + yy + '" y2="' + yy + '"/>' +
        '<text class="axis" x="' + (pad.l - 6) + '" y="' + yy + '" text-anchor="end" dominant-baseline="middle">' + fmtNum(Math.round(val)) + "</text>";
    }
    var line = values.map(function (v, i) { return (i ? "L" : "M") + x(i).toFixed(1) + " " + y(v).toFixed(1); }).join(" ");
    var area = line + " L" + x(values.length - 1).toFixed(1) + " " + (pad.t + ih) + " L" + x(0).toFixed(1) + " " + (pad.t + ih) + " Z";
    var xl = labels.map(function (lb, i) {
      return i % Math.ceil(labels.length / 8) === 0 ? '<text class="axis" x="' + x(i).toFixed(1) + '" y="' + (ht - 6) + '" text-anchor="middle">' + h(lb) + "</text>" : "";
    }).join("");
    return '<svg class="chart" viewBox="0 0 ' + w + " " + ht + '" preserveAspectRatio="none" role="img" aria-label="' + h(label) + '">' +
      grid + '<path class="area" d="' + area + '"/><path class="series" d="' + line + '" vector-effect="non-scaling-stroke"/>' + xl + "</svg>";
  }
  function barChart(labels, values, label) {
    if (!values || !values.length) return emptyState("data", "No data yet", "Connect a source to see this chart.");
    var w = 600, ht = 180, pad = { l: 28, r: 8, t: 12, b: 24 };
    var max = Math.max.apply(null, values) || 1, iw = w - pad.l - pad.r, ih = ht - pad.t - pad.b;
    var bw = iw / values.length * 0.6;
    var bars = values.map(function (v, i) {
      var bx = pad.l + i * iw / values.length + (iw / values.length - bw) / 2, bh = (v / max) * ih;
      return '<rect class="bar" rx="4" x="' + bx.toFixed(1) + '" y="' + (pad.t + ih - bh).toFixed(1) + '" width="' + bw.toFixed(1) + '" height="' + bh.toFixed(1) + '"><title>' + h(labels[i]) + ": " + v + "</title></rect>" +
        '<text class="axis" x="' + (bx + bw / 2).toFixed(1) + '" y="' + (ht - 6) + '" text-anchor="middle">' + h(labels[i]) + "</text>";
    }).join("");
    return '<svg class="chart" viewBox="0 0 ' + w + " " + ht + '" preserveAspectRatio="none" role="img" aria-label="' + h(label) + '">' +
      '<line class="grid-line" x1="' + pad.l + '" x2="' + (w - pad.r) + '" y1="' + (pad.t + ih) + '" y2="' + (pad.t + ih) + '"/>' + bars + "</svg>";
  }

  // ---------- Screens ----------
  function kpiTiles(kpis) {
    if (!kpis || !kpis.length) return '<div class="card">' + emptyState("data", "No numbers yet", "Connect your data sources (module 17) and your key numbers show up here.") + "</div>";
    return '<div class="grid g-4">' + kpis.map(function (k) {
      var dir = k.delta > 0 ? "up" : k.delta < 0 ? "down" : "flat";
      var sign = k.delta > 0 ? "+" : "";
      return '<div class="card kpi"><div class="label">' + h(k.label) + '</div><div class="value">' + fmtNum(k.value) + "</div>" +
        '<div class="delta ' + dir + '">' + sign + h(k.delta) + "% vs last period</div>" + sparkline(k.series) + "</div>";
    }).join("") + "</div>";
  }

  function screenHome() {
    var now = new Date();
    var hr = Number(now.toLocaleString("en-US", { hour: "numeric", hour12: false, timeZone: cfg.timeZone || undefined }));
    var greet = hr < 12 ? "Good morning" : hr < 17 ? "Good afternoon" : "Good evening";
    var first = String((cfg.owner && cfg.owner.name) || "").split(" ")[0];
    var pc = pendingCount();
    var today = now.getDay();
    var todays = (data.rhythm || []).filter(function (r) { return r.day === today; });
    var waiting = (data.items || []).filter(needsPerson).slice(0, 4);

    return '<div class="page-head"><div><div class="eyebrow">' + h(now.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", timeZone: cfg.timeZone || undefined })) + "</div>" +
      '<h1 class="title">' + h(greet) + (first ? ", " + h(first) : "") + "</h1>" +
      '<p class="subtitle">' + (pc ? pc + (pc === 1 ? " item needs" : " items need") + " you: approve, or publish by hand." : "Nothing is waiting for you right now.") + "</p></div>" +
      '<button class="btn btn-secondary" id="contextLostBtn" title="Tap when you had to re-explain something to an agent">' + icon("alert", "i-sm") + "I had to re-explain something</button></div>" +
      sampleBanner() +
      kpiTiles(data.kpis) +
      '<div class="grid g-main section-gap">' +
        '<section class="card" aria-labelledby="wait-h"><div class="card-head"><h2 class="h-section" id="wait-h">Waiting for you</h2><a class="link" href="#/approvals">See all</a></div>' +
        (waiting.length ? '<div class="card-body"><ul class="list">' + waiting.map(function (i) {
          var b = brandOf(i.brand);
          return '<li><span class="ic-tile" style="color:' + h(b.color) + '">' + icon("approvals", "i-sm") + '</span><div class="grow"><b>' + h(i.title) + "</b><span>" + h(b.name) + " · " + h(i.kind) + " · version " + h(i.version) + '</span></div><a class="btn btn-sm btn-secondary" href="#/approvals/' + h(i.id) + '">' + (i.status === "ready_for_person" ? "Mark published" : "Review") + "</a></li>";
        }).join("") + "</ul></div>" : emptyState("check", "All caught up", "When an agent finishes a draft, it lands here for you to approve.")) +
        "</section>" +
        '<section class="card" aria-labelledby="today-h"><div class="card-head"><h2 class="h-section" id="today-h">Today</h2><a class="link" href="#/calendar">Week</a></div><div class="card-body">' +
        (todays.length ? '<ul class="list">' + todays.map(function (r) {
          return '<li><span class="chip">' + h(r.time) + '</span><div class="grow"><b>' + h(r.title) + "</b><span>" + h(brandOf(r.brand).name) + "</span></div></li>";
        }).join("") + "</ul>" : '<p class="meta">Nothing scheduled today. Your weekly rhythm lives in the Calendar.</p>') +
        "</div></section>" +
      "</div>" +
      '<section class="card section-gap" aria-labelledby="act-h"><div class="card-head"><h2 class="h-section" id="act-h">Recent activity</h2></div><div class="card-body">' +
      ((data.activity || []).length ? '<ul class="timeline">' + data.activity.map(function (a) {
        return "<li><b>" + h(a.text) + '</b><div class="meta">' + h(fmtWhen(a.when)) + "</div></li>";
      }).join("") + "</ul>" : emptyState("inbox", "Quiet so far", "Runs, approvals and publishes show up here as they happen.")) +
      "</div></section>";
  }

  function filteredItems() {
    var q = ($("#search") && $("#search").value || "").toLowerCase();
    return (data.items || []).filter(function (i) {
      var okBrand = state.brand === "all" || i.brand === state.brand;
      var okStatus = state.status === "all" ? true
        : state.status === "open" ? ["pending", "changes", "approved", "publishing", "ready_for_person"].indexOf(i.status) >= 0
        : i.status === state.status;
      var okQ = !q || (i.title + " " + i.kind).toLowerCase().indexOf(q) >= 0;
      return okBrand && okStatus && okQ;
    });
  }

  function screenApprovals() {
    var statuses = [["open", "Open"], ["pending", "Waiting"], ["ready_for_person", "To publish"], ["changes", "Changes"], ["approved", "Approved"], ["published", "Published"], ["all", "All"]];
    var items = filteredItems();
    return '<div class="page-head"><div><h1 class="title">Approvals</h1><p class="subtitle">Agents draft. You decide. Nothing goes out until a person with approver rights says yes.</p></div></div>' +
      sampleBanner() +
      '<div class="filters"><div class="segmented" role="group" aria-label="Status">' + statuses.map(function (s) {
        return '<button type="button" data-status="' + s[0] + '" aria-pressed="' + (state.status === s[0]) + '">' + s[1] + "</button>";
      }).join("") + "</div>" +
      '<label class="sr-only" for="brandFilter">Brand</label><select class="input" id="brandFilter"><option value="all">All brands</option>' +
      (cfg.brands || []).map(function (b) { return '<option value="' + h(b.id) + '"' + (state.brand === b.id ? " selected" : "") + ">" + h(b.name) + "</option>"; }).join("") +
      "</select></div>" +
      '<div class="card">' + (items.length ? '<div class="table-wrap"><table class="table"><thead><tr><th>Item</th><th class="hide-sm">Brand</th><th>Status</th><th class="hide-sm">Version</th><th class="hide-sm">Updated</th></tr></thead><tbody>' +
        items.map(function (i) {
          var b = brandOf(i.brand);
          return '<tr tabindex="0" data-item="' + h(i.id) + '"><td><div class="t-title">' + h(i.title) + '</div><div class="t-sub">' + h(i.kind) + (i.channel ? " · " + h(CHANNELS[i.channel] || i.channel) : "") + '</div></td><td class="hide-sm"><span class="chip"><span class="swatch" style="background:' + h(b.color) + '"></span>' + h(b.name) + "</span></td><td>" + statusChip(i.status) + '</td><td class="hide-sm">v' + h(i.version) + '</td><td class="hide-sm">' + h(fmtWhen(i.updated)) + "</td></tr>";
        }).join("") + "</tbody></table></div>"
        : emptyState("approvals", "Nothing here", "No items match these filters. Try All, or another brand.")) + "</div>";
  }

  function screenOutgoing() {
    var list = data.outgoing || [];
    var groups = {}, order = [];
    list.forEach(function (i) {
      var k = dayKey(new Date(i.scheduled_for));
      if (!groups[k]) { groups[k] = []; order.push(k); }
      groups[k].push(i);
    });
    var todayK = dayKey(new Date());
    return '<div class="page-head"><div><h1 class="title">Going out</h1><p class="subtitle">Everything scheduled to go out in the next 7 days, on every channel. Times are Central.</p></div>' +
      '<span class="chip">' + list.length + " scheduled</span></div>" +
      sampleBanner() +
      (list.length ? order.map(function (k) {
        var d = new Date(groups[k][0].scheduled_for);
        var label = k === todayK ? "Today" : d.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric", timeZone: cfg.timeZone || "America/Chicago" });
        return '<section class="card section-gap" aria-label="' + h(label) + '"><div class="card-head"><h2 class="h-section">' + h(label) + '</h2><span class="meta">' + groups[k].length + " item" + (groups[k].length === 1 ? "" : "s") + '</span></div><div class="card-body"><ul class="list">' +
          groups[k].map(function (i) {
            var b = brandOf(i.brand);
            return '<li><span class="chip" style="min-width:72px;justify-content:center">' + h(fmtTime(i.scheduled_for)) + '</span><span class="ic-tile" title="' + h(CHANNELS[i.channel] || i.channel) + '">' + icon("ch_" + i.channel, "i-sm") + '</span><div class="grow"><b>' + h(i.title) + "</b><span>" + h(CHANNELS[i.channel] || i.channel) + " · " + h(b.name) + (needsSpendApproval(i) ? " · spend $" + h(i.budget.total) : "") + "</span></div>" +
              '<span class="hide-sm">' + statusChip(i.status) + '</span><a class="btn btn-sm btn-secondary" href="#/outgoing/' + h(i.id) + '">Review</a></li>';
          }).join("") + "</ul></div></section>";
      }).join("")
      : '<div class="card">' + emptyState("outgoing", "Nothing scheduled this week", "When drafts get a time and a channel, they line up here by day.") + "</div>");
  }

  function openItem(id) {
    var i = (data.items || []).concat(data.outgoing || []).filter(function (x) { return x.id === id; })[0];
    if (!i) return;
    var b = brandOf(i.brand);
    var slop = i.slopCheck || {};
    var canDecide = i.status === "pending" || i.status === "changes";
    var who = me();
    var rev = reviewFor(i), appr = approvalFor(i);
    var spendLocked = needsSpendApproval(i) && !who.owner;
    var reviewOk = rev && rev.by !== who.email;
    var canApprove = canDecide && !spendLocked && reviewOk && isApproverFor(i.brand);
    var approveWhy = spendLocked ? "Spend needs George's approval."
      : !rev ? "Needs a passed review of this version first."
      : !reviewOk ? "You reviewed this version. Someone else approves it."
      : !isApproverFor(i.brand) ? "You can view this brand but not approve it." : "";
    var canReview = canDecide && isReviewer(i.brand) && !(rev && rev.by === who.email);
    var bud = i.budget;
    var d = $("#drawer");
    d.innerHTML =
      '<div class="drawer-head"><div class="grow"><div class="eyebrow">' + h(b.name) + " · " + h(i.kind) + '</div><h2 class="h-section" id="drawerTitle" style="font-size:18px;margin-top:4px">' + h(i.title) + '</h2><div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap">' + statusChip(i.status) + '<span class="chip">Version ' + h(i.version) + "</span></div></div>" +
      '<button class="icon-btn" id="drawerClose" aria-label="Close">' + icon("close") + "</button></div>" +
      '<div class="drawer-body stack-4">' +
        (i.channel || i.scheduled_for ? '<div style="display:flex;gap:8px;flex-wrap:wrap">' + channelBadge(i.channel) + (i.scheduled_for ? '<span class="chip">' + h(fmtWhen(i.scheduled_for)) + " Central</span>" : "") + "</div>" : "") +
        (bud ? '<div class="card card-pad" style="border-radius:var(--r-md)"><div class="eyebrow" style="margin-bottom:8px">Ad spend</div><dl class="kv"><dt>Budget</dt><dd>$' + h(Number(bud.total).toLocaleString("en-US")) + " total</dd><dt>Daily cap</dt><dd>$" + h(Number(bud.daily_cap).toLocaleString("en-US")) + " a day</dd><dt>Dates</dt><dd>" + h(bud.start) + " to " + h(bud.end) + '</dd></dl><div class="note" style="margin-top:10px;background:var(--amber-50);color:var(--amber-700)">' + icon("alert", "i-sm") + "<span>Spend needs George's approval.</span></div></div>" : "") +
        '<dl class="kv"><dt>Review</dt><dd>' + (rev ? '<span class="status ok">Passed</span> by ' + h(rev.byName || rev.by) + ", v" + h(rev.version) : '<span class="status warn">Needed</span>') + "</dd>" +
        "<dt>Approval</dt><dd>" + (appr ? '<span class="status ok">Approved</span> by ' + h(appr.byName || appr.by) : '<span class="status warn">Needed</span>' + (needsSpendApproval(i) ? ' <span class="meta">George only (spend)</span>' : "")) + "</dd></dl>" +
        (canReview ? '<fieldset class="card card-pad" style="border-radius:var(--r-md);margin:0"><legend class="eyebrow" style="padding:0 4px">Reviewer checklist</legend>' +
          CHECKLIST.map(function (c, n) {
            return '<label style="display:flex;gap:10px;align-items:center;padding:4px 0"><input type="checkbox" data-check="' + n + '"> ' + h(c) + "</label>";
          }).join("") + '<button class="btn btn-secondary btn-sm" id="submitReview" disabled style="margin-top:8px">Submit review: all checks pass</button>' +
          '<p class="meta" style="margin:6px 0 0">Something wrong? Use Request changes below with a note.</p></fieldset>' : "") +
        '<div class="note">' + icon("alert", "i-sm") + "<span>An approval covers this exact version. If anyone edits it, it goes back to Waiting and needs a fresh yes.</span></div>" +
        '<div><div class="eyebrow" style="margin-bottom:6px">Preview</div><div class="preview">' + h(i.preview) + "</div></div>" +
        '<dl class="kv"><dt>Slop check</dt><dd>' + (slop.result === "pass" ? '<span class="status ok">Pass</span>' : '<span class="status warn">Flagged</span>') + ' <span class="meta">' + h(slop.notes) + "</span></dd>" +
        "<dt>Goes to</dt><dd>" + (i.destinations || []).map(slotText).join("<br>") + "</dd>" +
        "<dt>Job level</dt><dd>" + levelText(i.job_level) + "</dd>" +
        "<dt>Drafted by</dt><dd>" + h(i.requestedBy) + "</dd>" +
        "<dt>Updated</dt><dd>" + h(fmtWhen(i.updated)) + "</dd>" +
        (i.publishUrl ? '<dt>Live at</dt><dd><a class="link" href="' + h(i.publishUrl) + '" target="_blank" rel="noopener">' + h(i.publishUrl) + "</a></dd>" : "") +
        "</dl>" +
        (i.status === "ready_for_person" ? '<div class="field"><label for="liveUrl">Live link after you publish it</label><input class="input" id="liveUrl" type="url" placeholder="https://"><span class="meta">Approved, ready for you to publish. Paste the live link and press Mark published.</span></div>' : "") +
        '<div class="field"><label for="decisionNote">Note to the agent (optional)</label><textarea class="input" id="decisionNote" placeholder="What should change, or anything to keep in mind"></textarea></div>' +
        '<div><div class="eyebrow" style="margin-bottom:8px">History</div><ul class="timeline">' + (i.history || []).map(function (e) {
          return "<li><b>" + h(e.what) + '</b><div class="meta">' + h(e.who) + " · " + h(fmtWhen(e.when)) + "</div></li>";
        }).join("") + "</ul></div>" +
      "</div>" +
      '<div class="drawer-foot">' +
        '<button class="btn btn-primary" data-decide="approve"' + (canApprove ? "" : " disabled") + (approveWhy ? ' title="' + h(approveWhy) + '"' : "") + ">" + icon("check", "i-sm") + "Approve version " + h(i.version) + "</button>" +
        (canDecide && approveWhy ? '<span class="meta" style="align-self:center">' + h(approveWhy) + "</span>" : "") +
        '<button class="btn btn-secondary" data-decide="changes"' + (canDecide ? "" : " disabled") + ">Request changes</button>" +
        '<button class="btn btn-danger" data-decide="reject"' + (canDecide ? "" : " disabled") + ">Reject</button>" +
        (i.status === "ready_for_person" ? '<button class="btn btn-primary" id="markPublished">' + icon("check", "i-sm") + "Mark published</button>" : "") +
      "</div>";
    d.classList.add("open"); d.setAttribute("aria-hidden", "false");
    $("#drawerScrim").classList.add("open");
    $("#drawerClose").focus();
    $("#drawerClose").addEventListener("click", closeDrawer);
    $all("[data-decide]", d).forEach(function (btn) {
      btn.addEventListener("click", function () {
        var decision = btn.getAttribute("data-decide");
        var note = $("#decisionNote").value;
        api.decide(i, decision, note).then(function (res) {
          var selfPublish = Number(i.job_level) >= 3;
          // Use the status the server returns. Demo mode follows the level rule.
          var next = res && res.status ? res.status
            : { approve: selfPublish ? "approved" : "ready_for_person", changes: "changes", reject: "rejected" }[decision];
          i.status = next;
          if (decision === "approve") (i.approvals = i.approvals || []).push({ version: i.version, by: who.email, byName: who.name, when: new Date().toISOString() });
          (i.history = i.history || []).push({ when: new Date().toISOString(), who: who.name || "You", what: { approve: "Approved version " + i.version, changes: "Requested changes" + (note ? ": " + note : ""), reject: "Rejected" }[decision] });
          var msg = decision !== "approve" ? "Saved."
            : selfPublish ? "Approved. It publishes itself now."
            : "Approved, ready for you to publish.";
          toast(msg + (res && res.sample ? " (Sample mode: this screen only.)" : ""));
          closeDrawer(); render();
        }).catch(function (e) { toast("Could not save: " + e.message); });
      });
    });
    var sr = $("#submitReview");
    if (sr) {
      $all("[data-check]", d).forEach(function (c) {
        c.addEventListener("change", function () { sr.disabled = $all("[data-check]", d).some(function (x) { return !x.checked; }); });
      });
      sr.addEventListener("click", function () {
        var checklist = CHECKLIST.map(function (c) { return { item: c, ok: true }; });
        api.post("/items/" + encodeURIComponent(i.id) + "/reviews", { version: i.version, passed: true, checklist: checklist, comment: $("#decisionNote").value || "" }).then(function (res) {
          var r = res && res.review ? res.review : { version: i.version, passed: true, by: who.email, byName: who.name, when: new Date().toISOString(), checklist: checklist };
          (i.reviews = i.reviews || []).push(r);
          (i.history = i.history || []).push({ when: r.when || new Date().toISOString(), who: who.name, what: "Review passed for version " + i.version });
          toast("Review submitted." + (res && res.sample ? " (Sample mode: this screen only.)" : ""));
          closeDrawer(); render();
        }).catch(function (e) { toast("Could not save: " + e.message); });
      });
    }
    var mp = $("#markPublished");
    if (mp) mp.addEventListener("click", function () {
      var url = ($("#liveUrl").value || "").trim();
      if (!/^https?:\/\/\S+$/.test(url)) { toast("Paste the live link first (starts with https://)."); $("#liveUrl").focus(); return; }
      api.markPublished(i, url).then(function (res) {
        i.status = res && res.status ? res.status : "published";
        i.publishUrl = url;
        (i.history = i.history || []).push({ when: new Date().toISOString(), who: (cfg.owner && cfg.owner.name) || "You", what: "Marked published: " + url });
        toast("Marked published." + (res && res.sample ? " (Sample mode: this screen only.)" : ""));
        closeDrawer(); render();
      }).catch(function (e) { toast("Could not save: " + e.message); });
    });
  }
  // Autonomy level of the job behind an item (kit module 23).
  var CHECKLIST = ["Facts and names are right", "Links open and go to the right place", "Scripture references are correct",
    "Images have alt text and are cleared to use", "Date and time are right", "It is going to the right account"];
  function levelText(l) {
    var n = Number(l) || 2;
    var txt = n >= 3 ? "Publishes itself after approval" : "You publish after approving";
    return '<span class="chip">Level ' + n + "</span> " + h(txt);
  }
  function closeDrawer() {
    var d = $("#drawer");
    d.classList.remove("open"); d.setAttribute("aria-hidden", "true");
    $("#drawerScrim").classList.remove("open");
    var m = /^#\/(approvals|outgoing)\//.exec(location.hash);
    if (m) history.replaceState(null, "", "#/" + m[1]);
  }

  function screenCalendar() {
    var now = new Date();
    var start = new Date(now); start.setDate(now.getDate() - now.getDay()); // Sunday
    var days = [];
    for (var i = 0; i < 7; i++) { var d = new Date(start); d.setDate(start.getDate() + i); days.push(d); }
    var rhythm = data.rhythm || [];
    return '<div class="page-head"><div><h1 class="title">This week</h1><p class="subtitle">Your publishing rhythm and every automated run, by day.</p></div>' +
      '<div class="segmented" role="group" aria-label="Legend"><button type="button" aria-pressed="false">● Drafts</button><button type="button" aria-pressed="false">● Reviews</button><button type="button" aria-pressed="false">● Publishes</button></div></div>' +
      sampleBanner() +
      (rhythm.length ? '<div class="week">' + days.map(function (d) {
        var evs = rhythm.filter(function (r) { return r.day === d.getDay(); }).sort(function (a, b) { return a.time < b.time ? -1 : 1; });
        var isToday = d.toDateString() === now.toDateString();
        return '<div class="day' + (isToday ? " today" : "") + '"><div class="dh"><span>' + h(d.toLocaleDateString("en-US", { weekday: "short" })) + "</span><span>" + d.getDate() + "</span></div>" +
          (evs.length ? evs.map(function (e) {
            return '<div class="ev ' + h(e.type) + '"><b>' + h(e.time) + "</b>" + h(e.title) + '<div class="meta">' + h(brandOf(e.brand).name) + "</div></div>";
          }).join("") : '<span class="meta">Open</span>') + "</div>";
      }).join("") + "</div>"
      : '<div class="card">' + emptyState("calendar", "No rhythm yet", "Run module 24 (Weekly rhythm) and your recurring days and times appear here.") + "</div>");
  }

  function screenBrands() {
    return '<div class="page-head"><div><h1 class="title">Brands</h1><p class="subtitle">One place for each thing you run. Edit the list in config.js.</p></div></div>' +
      sampleBanner() +
      ((cfg.brands || []).length ? '<div class="grid g-2">' + cfg.brands.map(function (b) {
        var items = (data.items || []).filter(function (i) { return i.brand === b.id; });
        var open = items.filter(function (i) { return i.status === "pending" || i.status === "changes"; }).length;
        var autos = (data.automations || []).filter(function (a) { return a.brand === b.id; }).length;
        return '<a class="card card-pad" href="#/brands/' + h(b.id) + '" style="display:block"><div class="brand-hero"><span class="tile" style="background:' + h(b.color) + '">' + h(initials(b.name)) + '</span><div style="min-width:0"><div class="h-section">' + h(b.name) + '</div><div class="meta">' + slotText(b.summary) + "</div></div></div>" +
          '<div style="display:flex;gap:8px;margin-top:16px;flex-wrap:wrap"><span class="chip">' + open + ' waiting</span><span class="chip">' + items.length + ' items</span><span class="chip">' + autos + " automations</span></div></a>";
      }).join("") + "</div>"
      : '<div class="card">' + emptyState("brands", "No brands yet", "Add your brands in config.js. Each one gets its own page.") + "</div>");
  }

  function screenBrand(id) {
    var b = brandOf(id);
    var items = (data.items || []).filter(function (i) { return i.brand === id; });
    var autos = (data.automations || []).filter(function (a) { return a.brand === id; });
    var people = (data.team || []).filter(function (p) { return p.roles && p.roles[id]; });
    var jobs = (data.rhythm || []).filter(function (r) { return r.brand === id; });
    var dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return '<div class="page-head"><div class="brand-hero"><span class="tile" style="background:' + h(b.color) + '">' + h(initials(b.name)) + '</span><div style="min-width:0"><div class="eyebrow">Brand</div><h1 class="title">' + h(b.name) + '</h1><p class="subtitle">' + slotText(b.summary) + "</p></div></div>" +
      '<a class="btn btn-secondary" href="#/brands">All brands</a></div>' +
      sampleBanner() +
      '<div class="grid g-2">' +
        '<section class="card"><div class="card-head"><h2 class="h-section">Goals</h2></div><div class="card-body">' +
          ((b.goals || []).length ? '<ul class="list">' + b.goals.map(function (g) { return '<li><span class="ic-tile">' + icon("spark", "i-sm") + '</span><div class="grow"><b>' + slotText(g) + "</b></div></li>"; }).join("") + "</ul>" : '<p class="meta">No goals yet. Add them in config.js or your brain repo.</p>') +
        "</div></section>" +
        '<section class="card"><div class="card-head"><h2 class="h-section">Recurring jobs</h2></div><div class="card-body">' +
          (jobs.length ? '<ul class="list">' + jobs.map(function (r) { return '<li><span class="chip">' + dayName[r.day] + " " + h(r.time) + '</span><div class="grow"><b>' + h(r.title) + "</b></div></li>"; }).join("") + "</ul>" : '<p class="meta">No recurring jobs yet.</p>') +
        "</div></section>" +
        '<section class="card"><div class="card-head"><h2 class="h-section">Items</h2><a class="link" href="#/approvals">Approvals</a></div><div class="card-body">' +
          (items.length ? '<ul class="list">' + items.map(function (i) { return '<li><div class="grow"><b>' + h(i.title) + "</b><span>" + h(i.kind) + " · v" + h(i.version) + "</span></div>" + statusChip(i.status) + "</li>"; }).join("") + "</ul>" : '<p class="meta">Nothing yet for this brand.</p>') +
        "</div></section>" +
        '<section class="card"><div class="card-head"><h2 class="h-section">Automations and people</h2></div><div class="card-body">' +
          '<ul class="list">' + autos.map(function (a) { return '<li><span class="ic-tile">' + icon("automations", "i-sm") + '</span><div class="grow"><b>' + h(a.name) + "</b><span>" + h(a.kind) + "</span></div>" + statusChip(a.status) + "</li>"; }).join("") +
          people.map(function (p) { return '<li><span class="avatar sm soft">' + h(initials(p.name)) + '</span><div class="grow"><b>' + h(p.name) + '</b><span>' + h(p.roles[id]) + "</span></div></li>"; }).join("") + "</ul>" +
          (!autos.length && !people.length ? '<p class="meta">No automations or people yet.</p>' : "") +
        "</div></section>" +
      "</div>";
  }

  function screenMemory() {
    var m = data.memory || {};
    function block(title, list, render, emptyText) {
      return '<section class="card"><div class="card-head"><h2 class="h-section">' + h(title) + '</h2></div><div class="card-body">' +
        ((list || []).length ? render(list) : '<p class="meta">' + h(emptyText) + "</p>") + "</div></section>";
    }
    return '<div class="page-head"><div><h1 class="title">Memory</h1><p class="subtitle">What every agent reads first: what is happening now, the last handoffs, the log and the decisions. The source is your brain repo.</p></div>' +
      '<span class="chip" title="Times you had to re-explain something this month">' + icon("alert", "i-sm") + h(m.contextLost || 0) + " re-explains this month</span></div>" +
      sampleBanner() +
      '<div class="grid g-2">' +
      block("Now", m.now, function (l) { return '<ul class="list">' + l.map(function (n) { return '<li><div class="grow"><b>' + h(n.text) + "</b><span>" + h(n.owner) + "</span></div>" + '<span class="chip">' + h(n.due) + "</span></li>"; }).join("") + "</ul>"; }, "NOW.md is empty.") +
      block("Latest handoffs", m.handoffs, function (l) { return '<ul class="timeline">' + l.map(function (x) { return "<li><b>" + h(x.who) + '</b> <span class="meta">' + h(fmtWhen(x.when)) + '</span><div>' + h(x.done) + '</div><div class="meta">Next: ' + h(x.next) + "</div></li>"; }).join("") + "</ul>"; }, "No handoffs yet. Every session should end with one.") +
      block("Work log", m.worklog, function (l) { return '<ul class="list">' + l.map(function (x) { return '<li><span class="chip">' + h(fmtDay(x.when)) + '</span><div class="grow"><b>' + h(x.what) + "</b><span>" + h(x.who) + "</span></div></li>"; }).join("") + "</ul>"; }, "The work log is empty.") +
      block("Decisions", m.decisions, function (l) { return '<ul class="list">' + l.map(function (x) { return '<li><span class="chip">' + h(x.id) + '</span><div class="grow"><b>' + h(x.title) + "</b><span>" + h(fmtDay(x.date)) + "</span></div></li>"; }).join("") + "</ul>"; }, "No decisions recorded yet.") +
      "</div>";
  }

  function screenAutomations() {
    var autos = data.automations || [];
    var spend = autos.reduce(function (s, a) { return s + (Number(a.costMonth) || 0); }, 0);
    var cap = autos.reduce(function (s, a) { return s + (Number(a.cap) || 0); }, 0);
    return '<div class="page-head"><div><h1 class="title">Automations</h1><p class="subtitle">Everything that runs without you. Each one has an off switch.</p></div>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center"><span class="chip">Managed agent spend this month: ' + fmtMoney(spend) + (cap ? " of " + fmtMoney(cap) : "") + '</span><button class="btn btn-danger" id="pauseAll">Pause everything</button></div></div>' +
      '<div class="note" style="margin-bottom:var(--s-4);background:var(--amber-50);color:var(--amber-700)">' + icon("alert", "i-sm") + "<span>Pause everything stops scheduled tasks, managed agents and publishers here. It does not stop three things outside the dashboard: Meta ads already running (pause them in Ads Manager), posts already scheduled in Meta Business Suite, and emails already scheduled in your email platform. A person must pause or unschedule those where they live and confirm it here.</span></div>" +
      sampleBanner() +
      '<div class="card">' + (autos.length ? '<div class="table-wrap"><table class="table"><thead><tr><th>Automation</th><th>Status</th><th class="hide-sm">Last run</th><th class="hide-sm">Next run</th><th class="hide-sm">Cost vs cap</th><th>On</th></tr></thead><tbody>' +
        autos.map(function (a) {
          var pct = a.cap ? Math.min(100, Math.round(a.costMonth / a.cap * 100)) : 0;
          var cost = a.cap ? '<div class="bar-row" style="margin:0"><span class="track"><span class="fill' + (pct > 80 ? " bad" : pct > 50 ? " warn" : "") + '" style="width:' + pct + '%;display:block"></span></span><span class="num">' + fmtMoney(a.costMonth) + "</span></div>" : '<span class="meta">' + h(a.note || "Plan usage") + "</span>";
          return '<tr><td><div class="t-title">' + h(a.name) + '</div><div class="t-sub">' + h(a.kind) + " · " + h(brandOf(a.brand).name) + "</div></td><td>" + statusChip(a.on ? a.status : "idle") +
            '</td><td class="hide-sm">' + h(fmtWhen(a.lastRun)) + '</td><td class="hide-sm">' + h(/^\d{4}-/.test(a.nextRun || "") ? fmtWhen(a.nextRun) : a.nextRun) + '</td><td class="hide-sm" style="min-width:160px">' + cost +
            '</td><td><button class="toggle" role="switch" aria-checked="' + (a.on ? "true" : "false") + '" aria-label="Run ' + h(a.name) + '" data-auto="' + h(a.id) + '"></button></td></tr>';
        }).join("") + "</tbody></table></div>"
        : emptyState("automations", "Nothing automated yet", "Run modules 19 to 22 to set up scheduled tasks and managed agents. They show up here with an off switch.")) + "</div>";
  }

  function screenData() {
    var m = data.metrics || {};
    var w = m.weekly;
    var top = m.topPages || [];
    var max = top.reduce(function (s, p) { return Math.max(s, p.value); }, 0) || 1;
    return '<div class="page-head"><div><h1 class="title">Data</h1><p class="subtitle">Your numbers in one place, pulled in from each source.</p></div></div>' +
      sampleBanner() +
      kpiTiles(data.kpis) +
      '<div class="grid g-2 section-gap">' +
        '<section class="card"><div class="card-head"><h2 class="h-section">Site visits by week</h2></div><div class="card-body">' + (w ? lineChart(w.labels, w.visits, "Site visits by week") : emptyState("data", "No data yet", "Connect analytics in module 17.")) + "</div></section>" +
        '<section class="card"><div class="card-head"><h2 class="h-section">Pieces published by week</h2></div><div class="card-body">' + (w ? barChart(w.labels, w.published, "Pieces published by week") : emptyState("data", "No data yet", "Published items are counted from the approval log.")) + "</div></section>" +
        '<section class="card"><div class="card-head"><h2 class="h-section">Top pages</h2></div><div class="card-body">' +
          (top.length ? top.map(function (p) { return '<div class="bar-row"><span class="lbl">' + h(p.label) + '</span><span class="track"><span class="fill" style="width:' + Math.round(p.value / max * 100) + '%;display:block"></span></span><span class="num">' + fmtNum(p.value) + "</span></div>"; }).join("") : '<p class="meta">No pages yet.</p>') +
        "</div></section>" +
        '<section class="card"><div class="card-head"><h2 class="h-section">Sources</h2></div><div class="card-body"><ul class="list">' +
          (m.sources || []).map(function (s) { return '<li><span class="ic-tile">' + icon("plug", "i-sm") + '</span><div class="grow"><b>' + h(s.name) + "</b><span>" + (s.connected ? "Connected" : "Not connected yet") + "</span></div>" + (s.connected ? '<span class="status ok">Live</span>' : '<span class="status idle">Off</span>') + "</li>"; }).join("") +
        "</ul></div></section>" +
      "</div>";
  }

  function screenTeam() {
    var team = data.team || [];
    var brands = cfg.brands || [];
    return '<div class="page-head"><div><h1 class="title">Team</h1><p class="subtitle">Who can see each brand, and who can approve. People sign in with their own Google account.</p></div>' +
      '<button class="btn btn-primary" id="inviteBtn">Invite someone</button></div>' +
      sampleBanner() +
      '<div class="card">' + (team.length ? '<div class="table-wrap"><table class="table"><thead><tr><th>Person</th>' +
        brands.map(function (b) { return '<th class="hide-sm">' + h(b.name) + "</th>"; }).join("") + '<th class="hide-sm">Last seen</th></tr></thead><tbody>' +
        team.map(function (p) {
          return '<tr><td><div style="display:flex;align-items:center;gap:10px;min-width:0"><span class="avatar sm soft">' + h(initials(p.name)) + '</span><div style="min-width:0"><div class="t-title">' + h(p.name) + '</div><div class="t-sub">' + h(p.email) + "</div></div></div></td>" +
            brands.map(function (b) {
              var r = p.roles && p.roles[b.id];
              return '<td class="hide-sm">' + (r === "approver" ? '<span class="status info">Approver</span>' : r === "viewer" ? '<span class="status idle">Viewer</span>' : '<span class="meta">No access</span>') + "</td>";
            }).join("") + '<td class="hide-sm">' + h(p.lastSeen) + "</td></tr>";
        }).join("") + "</tbody></table></div>"
        : emptyState("team", "Just you so far", "Invite helpers by email and give them viewer or approver rights for each brand (module 18).")) + "</div>" +
      '<p class="meta section-gap">Viewers can read and comment. Approvers can say yes for their brands only. Agents can never approve.</p>';
  }

  function screenSettings() {
    var pref = themePref();
    var accent = (function () { try { return localStorage.getItem("dash-accent"); } catch (e) { return null; } })() || (cfg.accent && cfg.accent.base) || "#1F4E8C";
    return '<div class="page-head"><div><h1 class="title">Settings</h1><p class="subtitle">Look and feel for this browser. Permanent changes go in config.js.</p></div></div>' +
      '<div class="grid g-2">' +
        '<section class="card card-pad stack-4"><h2 class="h-section">Appearance</h2>' +
          '<div class="field"><span class="meta">Theme</span><div class="segmented" role="group" aria-label="Theme">' + ["light", "dark", "system"].map(function (t) {
            return '<button type="button" data-theme-pick="' + t + '" aria-pressed="' + (pref === t) + '">' + t.charAt(0).toUpperCase() + t.slice(1) + "</button>";
          }).join("") + "</div></div>" +
          '<div class="field"><label for="accentPick">Accent color</label><div style="display:flex;gap:10px;align-items:center"><input id="accentPick" type="color" value="' + h(accent) + '" style="width:48px;height:38px;border:0;background:none;padding:0"><button class="btn btn-sm btn-secondary" id="accentReset">Reset</button></div><span class="meta">Pick a color dark enough for white text on buttons.</span></div>' +
        "</section>" +
        (!apiMode ? '<section class="card card-pad stack-4"><h2 class="h-section">View as (demo only)</h2><div class="segmented" role="group" aria-label="Role">' + [["owner", "Owner"], ["reviewer", "Reviewer"]].map(function (r) {
          return '<button type="button" data-role-pick="' + r[0] + '" aria-pressed="' + (state.role === r[0]) + '">' + r[1] + "</button>";
        }).join("") + '</div><p class="meta">Reviewer sees a checklist in the review drawer and can\'t approve ad spend. With the live API, the role comes from sign-in.</p></section>' : "") +
        '<section class="card card-pad stack-4"><h2 class="h-section">Brands</h2><ul class="list">' + (cfg.brands || []).map(function (b) {
          return '<li><span class="swatch" style="background:' + h(b.color) + '"></span><div class="grow"><b>' + h(b.name) + "</b><span>id: " + h(b.id) + "</span></div></li>";
        }).join("") + '</ul><p class="meta">Add, rename or recolor brands in config.js.</p></section>' +
        '<section class="card card-pad stack-4"><h2 class="h-section">Notifications</h2>' +
          ['Email me when something needs my approval', 'Text me when an automation fails', 'Weekly brief on Sunday evening'].map(function (t, i) {
            return '<div style="display:flex;align-items:center;justify-content:space-between;gap:12px"><span>' + h(t) + '</span><button class="toggle" role="switch" aria-checked="' + (i !== 1) + '" aria-label="' + h(t) + '" data-notify="' + i + '"></button></div>';
          }).join("") + '<p class="meta">These switches are placeholders. Wire them to your notification job (module 20).</p></section>' +
        '<section class="card card-pad stack-4"><h2 class="h-section">Data source</h2><p class="meta">Now reading: <code>' + h(apiMode ? cfg.apiBase : cfg.sampleFile) + "</code>" + (apiMode ? " (live API)" : " (sample data, demo mode)") + '</p><p class="meta">Set <code>demo: false</code> in config.js to use the live API at <code>apiBase</code>.</p></section>' +
      "</div>";
  }

  // ---------- Router ----------
  var SCREENS = {
    home: screenHome, approvals: screenApprovals, outgoing: screenOutgoing, calendar: screenCalendar, brands: screenBrands,
    memory: screenMemory, automations: screenAutomations, data: screenData, team: screenTeam, settings: screenSettings
  };

  function parse() {
    var parts = (location.hash || "#/home").replace(/^#\/?/, "").split("/");
    return { route: parts[0] || "home", id: parts[1] ? decodeURIComponent(parts[1]) : null };
  }

  function errorScreen() {
    return '<div class="card"><div class="empty" role="alert"><div class="ic">' + icon("alert") + "</div><h3>Couldn't load your data</h3>" +
      "<p>" + (apiMode ? "The dashboard API didn't answer, so nothing here would be accurate." : "The sample file didn't load. Serve this folder over HTTP (python3 -m http.server).") + " Details: " + h(loadError) + "</p>" +
      '<button class="btn btn-primary" id="retryBtn">Retry</button></div></div>';
  }
  function load() {
    loadError = null;
    return api.load().then(function (d) { data = d || emptyData(); applyConfig(); }).catch(function (e) {
      loadError = e.message || String(e);
      data = emptyData();
    }).then(render);
  }

  function render() {
    var p = parse();
    var allowed = navItems().map(function (n) { return n.id; });
    if (!SCREENS[p.route] || allowed.indexOf(p.route) < 0) { location.hash = "#/" + (allowed[0] || "home"); return; }
    renderNav(p.route);
    var html = loadError && p.route !== "settings" ? errorScreen()
      : p.route === "brands" && p.id ? screenBrand(p.id) : SCREENS[p.route]();
    $("#page").innerHTML = html;
    bindScreen(p);
    if ((p.route === "approvals" || p.route === "outgoing") && p.id) openItem(p.id);
    openNav(false);
  }

  function bindScreen(p) {
    var rb = $("#retryBtn");
    if (rb) rb.addEventListener("click", function () { $("#page").innerHTML = '<p class="meta">Loading…</p>'; sampleCache = null; load(); });
    var cl = $("#contextLostBtn");
    if (cl) cl.addEventListener("click", function () {
      api.contextLost("").then(function () {
        data.memory = data.memory || {}; data.memory.contextLost = (data.memory.contextLost || 0) + 1;
        toast("Logged. The weekly brief will look at what got lost.");
      });
    });
    $all("[data-status]").forEach(function (b) {
      b.addEventListener("click", function () { state.status = b.getAttribute("data-status"); render(); });
    });
    var bf = $("#brandFilter");
    if (bf) bf.addEventListener("change", function () { state.brand = bf.value; render(); });
    $all("tr[data-item]").forEach(function (tr) {
      function go() { location.hash = "#/approvals/" + encodeURIComponent(tr.getAttribute("data-item")); }
      tr.addEventListener("click", go);
      tr.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
    });
    $all("[data-auto]").forEach(function (t) {
      t.addEventListener("click", function () {
        var a = (data.automations || []).filter(function (x) { return x.id === t.getAttribute("data-auto"); })[0];
        var on = t.getAttribute("aria-checked") !== "true";
        api.setAutomation(a, on).then(function (res) {
          a.on = res && typeof res.paused === "boolean" ? !res.paused : on;
          on = a.on;
          toast((on ? "Turned on: " : "Turned off: ") + a.name + (res && res.sample ? " (sample mode)" : ""));
          render();
        }).catch(function (e) { toast("Could not save: " + e.message); });
      });
    });
    $all("[data-role-pick]").forEach(function (b) {
      b.addEventListener("click", function () {
        state.role = b.getAttribute("data-role-pick");
        try { localStorage.setItem("dash-role", state.role); } catch (e) {}
        applyConfig(); toast("Viewing as " + (state.role === "reviewer" ? "Reviewer" : "Owner") + ".");
        render();
      });
    });
    $all("[data-theme-pick]").forEach(function (b) {
      b.addEventListener("click", function () { setTheme(b.getAttribute("data-theme-pick")); render(); });
    });
    $all("[data-notify]").forEach(function (t) {
      t.addEventListener("click", function () { t.setAttribute("aria-checked", t.getAttribute("aria-checked") === "true" ? "false" : "true"); });
    });
    var ap = $("#accentPick");
    if (ap) ap.addEventListener("input", function () { try { localStorage.setItem("dash-accent", ap.value); } catch (e) {} applyAccent(); });
    var ar = $("#accentReset");
    if (ar) ar.addEventListener("click", function () { try { localStorage.removeItem("dash-accent"); } catch (e) {} applyAccent(); render(); });
    var pa = $("#pauseAll");
    if (pa) pa.addEventListener("click", function () {
      api.post("/automations/pause-all", {}).then(function (res) {
        (data.automations || []).forEach(function (a) { a.on = false; });
        if (res && res.automations) data.automations = res.automations;
        toast("Dashboard jobs paused. Still running until a person stops them: live Meta ads (Ads Manager), posts scheduled in Meta Business Suite, emails scheduled in your email platform." + (res && res.sample ? " (Sample mode)" : ""));
        render();
      }).catch(function (e) { toast("Could not pause: " + e.message); });
    });
    var inv = $("#inviteBtn");
    if (inv) inv.addEventListener("click", function () { toast("Invites are added in the dashboard API (module 18). This is the shell."); });
  }

  // ---------- Boot ----------
  function boot() {
    applyConfig();
    $("#menuBtn").addEventListener("click", function () { openNav(!document.body.classList.contains("nav-open")); });
    $("#scrim").addEventListener("click", function () { openNav(false); });
    $("#themeBtn").addEventListener("click", function () {
      var dark = document.documentElement.getAttribute("data-theme") === "dark";
      setTheme(dark ? "light" : "dark");
      if (parse().route === "settings") render();
    });
    $("#drawerScrim").addEventListener("click", closeDrawer);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { if ($("#drawer").classList.contains("open")) closeDrawer(); else openNav(false); }
    });
    $("#search").addEventListener("input", function () {
      if (parse().route !== "approvals") { state.status = "all"; location.hash = "#/approvals"; }
      else render();
    });
    window.addEventListener("hashchange", render);
    load();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
