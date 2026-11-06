#!/usr/bin/env python3
"""Build the public George kit site: index.html, view.html, ALL.md, zip, robots, headers, privacy gate.
Run: python3 -I build.py   (from this folder). Output stays in ./site/.
"""
import hashlib, html, json, os, re, sys, zipfile, datetime, pathlib

ROOT = pathlib.Path(__file__).resolve().parent
SITE = ROOT / "site"
KIT = SITE / "kit"
VERSION = (ROOT / "VERSION").read_text().strip() if (ROOT / "VERSION").exists() else "0.1"
BASE = (os.environ.get("SITE_URL") or ((ROOT / "SITE_URL").read_text().strip() if (ROOT / "SITE_URL").exists() else "")).rstrip("/") or "."

GROUPS = [
    ("Start and foundation", range(0, 12)),
    ("Quality: voice, anti-slop, design", range(12, 15)),
    ("Dashboard and team", range(15, 19)),
    ("Automation and autonomy", range(19, 25)),
    ("Your work: G's Plan, TOI, boundaries, channels", range(25, 29)),
    ("Running it: scoreboard, fixes, iteration, prompts", range(29, 33)),
    ("Marketing command center: social, ads, email, search", range(33, 40)),
]

# Privacy gate: nothing private on a public page.
# Private names are stored only as short SHA-256 prefixes so this public file never spells them out.
BANNED_WORD_HASHES = {
    "1ee11af4ed5d63ca",
    "5e267e5e2eb1adbb",
    "611169f5b2cfe428",
    "6d7c0eb420852d2e",
    "7653aa9887a74b76",
    "8557120f380b7963",
    "86a325836cb9473a",
    "8cfde6efdfc4ed5a",
    "a494b6b0818e98c1",
    "cc2ff253cc59d8ce",
    "d118e41faea4e000",
    "e0c924608fdcda85",
    "e42de204c40cd5be"
}
BANNED = [r"\bQB\b", r"\b\d{3}[-. ]\d{3}[-. ]\d{4}\b", r"\b1\d{14}\b", r"act_\d+", r"inbox/toi-gift[s]", "\u2014"]
ALLOW_FILES = set()

def title_of(p):
    for line in p.read_text(encoding="utf-8").splitlines():
        if line.startswith("# "):
            return line[2:].strip()
    return p.stem

def summary_of(p):
    for line in p.read_text(encoding="utf-8").splitlines():
        if line.startswith("> "):
            return line[2:].strip()
    return ""

# Publication allowlist: only these file types may exist anywhere in the repo or site.
ALLOWED_EXT = {".md", ".html", ".js", ".json", ".css", ".sh", ".txt", ".py", ".yml", ".svg", ".png", ".jpg", ".webp", ".ico", ""}
TOKEN_PATTERNS = [r"gh[pousr]_[A-Za-z0-9]{20,}", r"github_pat_[A-Za-z0-9_]{20,}", r"\bEAA[A-Za-z0-9]{30,}",
                  r"sk-ant-[A-Za-z0-9_-]{10,}", r"xox[abprs]-[A-Za-z0-9-]{10,}", r"AKIA[0-9A-Z]{16}",
                  r"-----BEGIN [A-Z ]*PRIVATE KEY", r"\brp_live_[A-Za-z0-9]{8,}", r"ops_[A-Za-z0-9]{20,}"]
EMAIL = r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
ALLOWED_EMAILS = {"george@thecenterbham.org", "noreply@anthropic.com"}  # plus anything @example.com
SKIP_DIRS = {".git", "__pycache__", "node_modules", "local_cache"}

def gate():
    """Scan every file that could become public: the whole repo, including site/ and generated files."""
    bad = []
    for p in ROOT.rglob("*"):
        if p.is_dir() or any(part in SKIP_DIRS for part in p.relative_to(ROOT).parts):
            continue
        rel = p.relative_to(ROOT)
        if p.name == "george-kit.zip" or p.name == ".DS_Store":
            continue
        if p.suffix.lower() not in ALLOWED_EXT:
            bad.append(f"{rel}: file type {p.suffix} is not on the publication allowlist")
            continue
        if p.suffix.lower() in {".png", ".jpg", ".webp", ".ico"}:
            continue
        t = p.read_text(encoding="utf-8", errors="ignore")
        for pat in BANNED + TOKEN_PATTERNS:
            for m in re.finditer(pat, t):
                line = t.count("\n", 0, m.start()) + 1
                bad.append(f"{rel}:{line}: {pat} -> {m.group(0)[:40]!r}")
        for m in re.finditer(r"[a-z0-9]+(?:\.[a-z]{2,})?", t.lower()):
            tok = m.group(0)
            if any(hashlib.sha256(x.encode()).hexdigest()[:16] in BANNED_WORD_HASHES for x in {tok, tok.split('.')[0]}):
                line = t.count("\n", 0, m.start()) + 1
                bad.append(f"{rel}:{line}: private name (hashed match) -> {m.group(0)!r}")
        for m in re.finditer(EMAIL, t):
            if m.group(0).lower() not in ALLOWED_EMAILS and not m.group(0).lower().endswith("@example.com"):
                line = t.count("\n", 0, m.start()) + 1
                bad.append(f"{rel}:{line}: email not on allowlist -> {m.group(0)!r}")
    # Skill frontmatter must be valid: name matches folder, description present, no bare ': ' in one-line values
    for sk in sorted((KIT / "skills").glob("george-*/SKILL.md")):
        lines = sk.read_text(encoding="utf-8").splitlines()
        if not lines or lines[0].strip() != "---":
            bad.append(f"{sk.relative_to(ROOT)}: missing frontmatter"); continue
        fm = lines[1:lines.index("---", 1)] if "---" in lines[1:] else []
        kv = {l.split(":", 1)[0]: l.split(":", 1)[1].strip() for l in fm if ":" in l and not l.startswith(" ")}
        if kv.get("name") != sk.parent.name:
            bad.append(f"{sk.relative_to(ROOT)}: name does not match folder")
        d = kv.get("description", "")
        if not d:
            bad.append(f"{sk.relative_to(ROOT)}: no description")
        elif d not in (">", ">-", "|", "|-") and not (d[0] in "\"'") and ": " in d:
            bad.append(f"{sk.relative_to(ROOT)}: description has an unquoted ': ' (invalid YAML)")
    return bad

def main():
    mods = sorted(KIT.glob("[0-9][0-9]-*.md"))
    templates = sorted((KIT / "templates").glob("*.md"))
    skills = sorted((KIT / "skills").glob("george-*/SKILL.md"))
    today = datetime.date.today().isoformat()

    # The handoff George pastes into Claude, served from the site too
    (SITE / "HANDOFF.md").write_text((ROOT / "HANDOFF-FOR-CLAUDE.md").read_text(encoding="utf-8"), encoding="utf-8")

    # ALL.md: one fetch for agents
    parts = [f"# George's Agent Framework v{VERSION} ({today}), all modules in one file\n",
             f"Source: {BASE}/ . Each section below is one file; its path is in the heading comment.\n"]
    for p in mods + templates:
        parts.append(f"\n\n<!-- FILE: kit/{p.relative_to(KIT)} -->\n\n" + p.read_text(encoding="utf-8"))
    (SITE / "ALL.md").write_text("".join(parts), encoding="utf-8")

    # Zip of everything an agent needs
    z = SITE / "george-kit.zip"
    with zipfile.ZipFile(z, "w", zipfile.ZIP_DEFLATED) as zf:
        for p in sorted(SITE.rglob("*")):
            if p.is_file() and p.name not in ("george-kit.zip", ".DS_Store") and "/zips/" not in str(p) and not any(part in SKIP_DIRS for part in p.parts):
                zf.write(p, f"george-kit/{p.relative_to(SITE)}")

    # Module list HTML
    rows = []
    for name, rng in GROUPS:
        items = [p for p in mods if int(p.name[:2]) in rng]
        if not items:
            continue
        lis = "".join(
            f'<li><a class="mod" href="view.html?f=kit/{html.escape(p.name)}"><span class="num">{p.name[:2]}</span>'
            f'<span class="t">{html.escape(title_of(p).split("·",1)[-1].strip())}</span>'
            f'<span class="s">{html.escape(summary_of(p))}</span></a>'
            f'<a class="raw" href="kit/{html.escape(p.name)}" title="Raw markdown for agents">.md</a></li>'
            for p in items)
        rows.append(f'<section class="group"><h3>{html.escape(name)}</h3><ul class="mods">{lis}</ul></section>')
    skill_rows = "".join(
        f'<li><a href="view.html?f=kit/skills/{p.parent.name}/SKILL.md">{p.parent.name}</a></li>' for p in skills)
    tmpl_rows = "".join(
        f'<li><a href="view.html?f=kit/templates/{p.name}">{p.name}</a></li>' for p in templates)

    tpl = (ROOT / "index.template.html").read_text(encoding="utf-8")
    out = (tpl.replace("{{VERSION}}", VERSION).replace("{{DATE}}", today).replace("{{BASE}}", BASE)
              .replace("{{MODULES}}", "".join(rows)).replace("{{SKILLS}}", skill_rows)
              .replace("{{TEMPLATES}}", tmpl_rows).replace("{{N_MODULES}}", str(len(mods)))
              .replace("{{N_SKILLS}}", str(len(skills))).replace("{{N_TEMPLATES}}", str(len(templates))))
    (SITE / "index.html").write_text(out, encoding="utf-8")

    (SITE / ".nojekyll").write_text("")
    (SITE / "robots.txt").write_text("User-agent: *\nDisallow: /\n")
    (SITE / "_headers").write_text(
        "/*\n  X-Robots-Tag: noindex, nofollow\n  Referrer-Policy: no-referrer\n"
        "/*.md\n  Content-Type: text/markdown; charset=utf-8\n  Access-Control-Allow-Origin: *\n"
        "/kit/*\n  Access-Control-Allow-Origin: *\n")

    bad = gate()
    print(json.dumps({"modules": len(mods), "templates": len(templates), "skills": len(skills),
                      "zip_bytes": z.stat().st_size, "privacy_hits": len(bad)}, indent=1))
    for b in bad[:80]:
        print("PRIVACY", b)
    sys.exit(1 if bad else 0)

if __name__ == "__main__":
    main()
