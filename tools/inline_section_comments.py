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
    out: list[str] = []
    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # Handle single-line property comments that are on their own line
        if stripped.startswith("/*") and "*/" in stripped and i + 1 < len(lines):
            next_line = lines[i+1]
            next_stripped = next_line.strip()
            if ":" in next_stripped and not next_stripped.startswith("/*"):
                comment_text = stripped.strip("/*").strip("*/").strip()
                merged = next_line.rstrip() + f" /* {comment_text} */"
                out.append(merged)
                i += 2 # Skip current comment line and next property line
                continue

        if stripped.startswith("/*"):
            comment_blocks: list[list[str]] = []
            
            start_comment_block_index = i
            while i < len(lines):
                current_line_stripped = lines[i].strip()
                if not current_line_stripped.startswith("/*"):
                    break
                
                block: list[str] = []
                block.append(lines[i])
                if "*/" not in lines[i]:
                    i += 1
                    while i < len(lines):
                        block.append(lines[i])
                        if "*/" in lines[i]:
                            i += 1
                            break
                        i += 1
                else:
                    i += 1
                
                comment_blocks.append(block)

                if i < len(lines) and lines[i].strip() == "":
                    i+=1
                    break

            target_line_index = i
            target_line = ""
            if target_line_index < len(lines):
                target_line = lines[target_line_index]

            skip_group = should_skip(comment_blocks)
            
            if target_line and "{" in target_line and not skip_group:
                comment_text = combine_comment_blocks(comment_blocks)
                if comment_text:
                    merged = target_line.rstrip() + f" /* {comment_text} */"
                    out.append(merged)
                    i += 1
                    continue
            
            i = start_comment_block_index
            while i < target_line_index:
                out.append(lines[i])
                i += 1
            
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
