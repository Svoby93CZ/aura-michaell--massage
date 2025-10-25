import re
from pathlib import Path

STYLE_PATH = Path(r"c:\Users\Thric\Desktop\STŮL\Masáže\style.css")


def extract_comment_text(block_lines: list[str]) -> str:
    """Return a cleaned string for a comment block."""
    inner_segments: list[str] = []
    for idx, raw in enumerate(block_lines):
        stripped = raw.strip()
        if idx == 0:
            stripped = stripped[2:]
        if idx == len(block_lines) - 1:
            stripped = stripped[:-2]
        stripped = stripped.strip()
        if not stripped:
            continue
        if re.fullmatch(r"[-=]+", stripped):
            continue
        inner_segments.append(stripped)
    return " ".join(inner_segments).strip()


def combine_comment_blocks(blocks: list[list[str]]) -> str:
    cleaned = [extract_comment_text(block) for block in blocks]
    cleaned = [segment for segment in cleaned if segment]
    return " | ".join(cleaned)


def should_skip(blocks: list[list[str]]) -> bool:
    total_lines = sum(len(block) for block in blocks)
    return total_lines > 5


def merge_section_comments(text: str) -> str:
    lines = text.splitlines()
    print("first lines:", [repr(line) for line in lines[:10]])
    out: list[str] = []
    i = 0
    debug_limit = 10
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()
        if stripped.startswith("/*"):
            comment_blocks: list[list[str]] = []
            trailing_blanks: list[str] = []
            while i < len(lines) and lines[i].strip().startswith("/*"):
                block: list[str] = []
                block.append(lines[i])
                if "*/" in lines[i]:
                    i += 1
                else:
                    i += 1
                    while i < len(lines):
                        block.append(lines[i])
                        if "*/" in lines[i]:
                            i += 1
                            break
                        i += 1
                comment_blocks.append(block)
                saw_blank = False
                while i < len(lines) and lines[i].strip() == "":
                    trailing_blanks.append(lines[i])
                    i += 1
                    saw_blank = True
                if saw_blank:
                    break
            target_line = lines[i] if i < len(lines) else ""
            if debug_limit > 0:
                print(
                    f"candidate target: {target_line!r} | block len: {sum(len(block) for block in comment_blocks)}"
                )
            skip_group = should_skip(comment_blocks)
            if target_line and "{" in target_line:
                if target_line.strip().startswith("html") and debug_limit > 0:
                    print("block lines for html:", comment_blocks)
                if skip_group:
                    if debug_limit > 0:
                        print(
                            "skip (size)",
                            sum(len(block) for block in comment_blocks),
                            "->",
                            target_line,
                        )
                        debug_limit -= 1
                else:
                    comment_text = combine_comment_blocks(comment_blocks)
                    if comment_text:
                        if debug_limit > 0:
                            print(
                                f"merge -> {comment_text!r} | target: {target_line.strip()!r}"
                            )
                            debug_limit -= 1
                        merged = target_line.rstrip() + f" /* {comment_text} */"
                        out.append(merged)
                        i += 1
                        continue
            for block in comment_blocks:
                out.extend(block)
            out.extend(trailing_blanks)
            continue
        out.append(line)
        i += 1
    return "\n".join(out) + "\n"


def main() -> None:
    original = STYLE_PATH.read_text(encoding="utf-8")
    transformed = merge_section_comments(original)
    if transformed != original:
        STYLE_PATH.write_text(transformed, encoding="utf-8")
        print("Section comments merged.")
    else:
        print("No section comments updated.")


if __name__ == "__main__":
    main()
