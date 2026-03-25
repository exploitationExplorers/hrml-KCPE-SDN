#!/usr/bin/env python3
"""
Analyze overlap between assets/css/*.css files.
Finds longest common line-prefix between pairs and per-file stats.
"""
from __future__ import annotations

import hashlib
from pathlib import Path


def read_lines(path: Path) -> list[str]:
    text = path.read_text(encoding="utf-8", errors="replace")
    return text.splitlines(keepends=False)


def common_prefix_len(lines_a: list[str], lines_b: list[str]) -> int:
    n = min(len(lines_a), len(lines_b))
    i = 0
    while i < n and lines_a[i] == lines_b[i]:
        i += 1
    return i


def file_hash(lines: list[str]) -> str:
    h = hashlib.sha256()
    for line in lines:
        h.update(line.encode("utf-8", errors="replace"))
        h.update(b"\n")
    return h.hexdigest()[:16]


def main() -> None:
    root = Path(__file__).resolve().parent.parent
    css_dir = root / "assets" / "css"
    files = sorted(css_dir.glob("*.css"))
    if not files:
        print(f"No CSS files under {css_dir}")
        return

    data: dict[Path, list[str]] = {f: read_lines(f) for f in files}

    print("=== CSS file sizes ===\n")
    for f in files:
        lines = data[f]
        print(f"{f.name:28} {len(lines):6} lines  sha256[:16]={file_hash(lines)}")

    print("\n=== Longest common prefix with base.css (if present) ===\n")
    base = css_dir / "base.css"
    if base in data:
        for f in files:
            if f == base:
                continue
            n = common_prefix_len(data[base], data[f])
            pct = 100.0 * n / len(data[f]) if data[f] else 0
            print(f"{f.name:28} first {n:5} lines match base.css ({pct:5.1f}% of file)")

    print("\n=== Pairwise common prefix (top overlaps, excluding self) ===\n")
    pairs: list[tuple[int, str, str]] = []
    for i, fa in enumerate(files):
        for fb in files[i + 1 :]:
            n = common_prefix_len(data[fa], data[fb])
            pairs.append((n, fa.name, fb.name))
    pairs.sort(reverse=True)
    for n, a, b in pairs[:15]:
        print(f"{n:5} lines  {a}  <->  {b}")

    # Identify files identical to base.css
    print("\n=== Files fully identical to base.css (by line list) ===\n")
    if base in data:
        bl = data[base]
        for f in files:
            if f == base:
                continue
            if data[f] == bl:
                print(f"IDENTICAL: {f.name}")


if __name__ == "__main__":
    main()
