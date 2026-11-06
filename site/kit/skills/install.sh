#!/usr/bin/env bash
# Install George's skills kit.
#
#   bash install.sh          Copy every george-* skill into ~/.claude/skills/ (Claude Code).
#                            Safe to re-run. A skill George has edited is NEVER overwritten:
#                            the new version goes to ~/george-os/upstream/skills/<name>-<date-time>/ as a proposal.
#   bash install.sh --zip    Also make one zip per skill in ./zips/ for the Claude app
#                            (upload each at Customize > Skills).
#
#   CLAUDE_SKILLS_DIR  where skills are installed (default ~/.claude/skills)
#   GEORGE_OS          George's brain repo (default ~/george-os), for upstream proposals
#
# Only folders named george-* are ever touched.
set -euo pipefail

KIT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEST="${CLAUDE_SKILLS_DIR:-$HOME/.claude/skills}"
GOS="${GEORGE_OS:-$HOME/george-os}"
TODAY="$(date +%Y-%m-%d)"
STAMP="$(date +%Y%m%d-%H%M%S)"   # unique per run; proposal folders are never overwritten
mkdir -p "$DEST"

# Hash of a skill folder's content, ignoring the fingerprint file and Mac clutter.
folder_hash() {
  (cd "$1" && find . -type f ! -name '.kit-fingerprint' ! -name '.DS_Store' -print0 \
    | LC_ALL=C sort -z | xargs -0 shasum -a 256 | shasum -a 256 | cut -d' ' -f1)
}

installed=0; updated=0; same=0; skipped=0
for skill in "$KIT_DIR"/george-*/; do
  name="$(basename "$skill")"
  [ -f "$skill/SKILL.md" ] || { echo "Skip $name (no SKILL.md)"; continue; }
  target="$DEST/$name"
  new_hash="$(folder_hash "$skill")"

  if [ ! -d "$target" ]; then
    cp -R "$skill" "$target"; echo "$new_hash" > "$target/.kit-fingerprint"
    echo "Installed  $name"; installed=$((installed + 1)); continue
  fi

  current="$(folder_hash "$target")"
  recorded="$(cat "$target/.kit-fingerprint" 2>/dev/null || echo none)"
  if [ "$current" != "$recorded" ]; then
    # George (or his agent) changed this skill. Keep his copy; propose the kit version.
    prop="$GOS/upstream/skills/$name-$STAMP"
    n=1; while [ -e "$prop" ]; do prop="$GOS/upstream/skills/$name-$STAMP-$n"; n=$((n + 1)); done
    mkdir -p "$prop"; cp -R "$skill"/. "$prop"/
    cat > "$prop/UPSTREAM-NOTE.md" <<NOTE
# Upstream proposal: $name ($TODAY)

The installed copy of $name was edited, so install.sh kept it and did not overwrite it.
This folder holds the kit's newer version. Compare it with $target and merge what you want.
Nothing changes until you do.
NOTE
    echo "Kept yours $name (edited; kit version saved to $prop)"; skipped=$((skipped + 1)); continue
  fi

  if [ "$current" = "$new_hash" ]; then
    echo "Up to date $name"; same=$((same + 1)); continue
  fi
  rm -rf "${target:?}"; cp -R "$skill" "$target"; echo "$new_hash" > "$target/.kit-fingerprint"
  echo "Updated    $name"; updated=$((updated + 1))
done
echo "Done: $installed installed, $updated updated, $same up to date, $skipped kept (edited) in $DEST"

if [ "${1:-}" = "--zip" ]; then
  ZIPS="$KIT_DIR/zips"; mkdir -p "$ZIPS"
  for skill in "$KIT_DIR"/george-*/; do
    name="$(basename "$skill")"; rm -f "$ZIPS/$name.zip"
    (cd "$KIT_DIR" && zip -qr "$ZIPS/$name.zip" "$name" -x '*.DS_Store' -x '*/.kit-fingerprint')
    echo "Zipped $name.zip"
  done
  echo "Zips are in $ZIPS. Upload each in Claude: Customize > Skills (turn on code execution in Settings > Capabilities first)."
fi
