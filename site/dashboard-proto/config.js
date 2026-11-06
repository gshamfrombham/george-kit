/* config.js: the one file to edit first.
   Change names, colors, brands and which screens show. No build step:
   save the file and reload the page. */
window.DASHBOARD_CONFIG = {
  // Shown in the top bar and the browser tab. Rename it to anything.
  siteName: "My Dashboard",
  // Two letters for the square mark in the top bar.
  siteMark: "GS",

  // The signed-in person. When the real sign-in is wired up (kit module 16),
  // the API's /api/me replaces this.
  owner: { name: "George Shamblin", initials: "GS", role: "Owner" },

  // Accent color for buttons, links and the active nav item.
  // Keep it dark enough for white text (WCAG AA, 4.5:1 or better).
  accent: {
    base: "#1F4E8C",   // calm deep blue
    strong: "#173D6E", // hover and pressed
    text: "#1F4E8C",   // links on white
    darkText: "#8DB4EA" // links in dark mode
  },

  // Default theme: "light", "dark" or "system".
  theme: "system",
  timeZone: "America/Chicago",

  // Brands: one card and one page each. Fill the {{SLOTS}} from your brain repo.
  // id must be short and URL-safe; color is the brand's swatch.
  brands: [
    { id: "gsplan", name: "G's Plan", color: "#1F4E8C",
      summary: "{{GS_PLAN_ONE_LINE}}",
      goals: ["{{GS_PLAN_GOAL_1}}", "{{GS_PLAN_GOAL_2}}"] },
    { id: "toi", name: "The Overseas Initiative", color: "#0F7A55",
      summary: "{{TOI_ONE_LINE}}",
      goals: ["{{TOI_GOAL_1}}", "{{TOI_GOAL_2}}"] },
    { id: "author", name: "Author & Teaching", color: "#8F5208",
      summary: "Weekly video and article, books, podcast.",
      goals: ["Ship the weekly video and article on time", "Grow email subscribers"] },
    { id: "cel", name: "Center for Executive Leadership", color: "#6B4FA0",
      summary: "{{CEL_ONE_LINE}}",
      goals: ["{{CEL_GOAL_1}}"] }
  ],

  // Turn screens on or off. The order here is the nav order.
  nav: [
    { id: "home", label: "Home", on: true },
    { id: "approvals", label: "Approvals", on: true },
    { id: "outgoing", label: "Going out", on: true },
    { id: "calendar", label: "Calendar", on: true },
    { id: "brands", label: "Brands", on: true },
    { id: "memory", label: "Memory", on: true },
    { id: "automations", label: "Automations", on: true },
    { id: "data", label: "Data", on: true },
    { id: "team", label: "Team", on: true },
    { id: "settings", label: "Settings", on: true }
  ],

  // Demo mode. true = read the SAMPLE data in sampleFile and show a
  // "Sample data" badge. false = call the real API at apiBase
  // (built in kit module 16). Every screen goes through api.get / api.post
  // in app.js, so this switch is the only thing to flip.
  demo: true,
  sampleFile: "data.json",
  apiBase: "/api"
};
