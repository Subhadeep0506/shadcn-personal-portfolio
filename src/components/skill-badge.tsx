"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { getSkillVisual, rgba, lighten, darken, hexToRgb } from "@/lib/skill-meta";
import { useTheme } from "next-themes";

export function SkillBadge({
  skill,
  withIcon = true,
  className,
}: {
  skill: string;
  withIcon?: boolean;
  className?: string;
}) {
  const { resolvedTheme } = useTheme();
  const mode = (resolvedTheme as "light" | "dark" | undefined) ?? "light";

  const { color, Icon } = getSkillVisual(skill);

  const { r, g, b } = hexToRgb(color);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  const isVeryDark = luminance < 0.25;

  let bg: string;
  let border: string;
  let text: string;

  if (mode === "dark" && isVeryDark) {
    bg = "rgba(255,255,255,0.08)";
    border = "rgba(255,255,255,0.22)";
    text = "#F9FAFB";
  } else {
    bg = rgba(color, mode === "dark" ? 0.25 : 0.12);
    border = rgba(color, mode === "dark" ? 0.5 : 0.28);
    text = mode === "dark" ? lighten(color, 0.25) : darken(color, 0.2);

    if (mode === "light" && isVeryDark) {
      text = "#111827";
    }
  }

  return (
    <Badge
      variant="outline"
      className={cn(
        "flex items-center gap-1 px-2 py-0.5 text-xs shadow-sm",
        className
      )}
      style={{ backgroundColor: bg, borderColor: border, color: text }}
    >
      {withIcon && Icon ? <Icon className="size-3.5" /> : null}
      {skill}
    </Badge>
  );
}
export default SkillBadge;
