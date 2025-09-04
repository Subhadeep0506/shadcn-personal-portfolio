"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { getSkillVisual, readableTextColor, rgba } from "@/lib/skill-meta";

export function SkillBadge({
  skill,
  withIcon = true,
  className,
}: {
  skill: string;
  withIcon?: boolean;
  className?: string;
}) {
  const { color, Icon } = getSkillVisual(skill);
  const bg = rgba(color, 0.18);
  const border = rgba(color, 0.35);
  const text = readableTextColor(color);
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
