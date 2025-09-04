import { Icons, IconProps } from "@/components/icons";
import {
  Database,
  Server,
  Boxes,
  Terminal,
  Cloud,
  CreditCard,
  Shield,
  Layers,
  Code2,
  Cpu,
  Box,
  Sparkles,
} from "lucide-react";

export type SkillVisual = {
  color: string; // base hex color, e.g. #61dafb
  Icon?: (props: IconProps) => JSX.Element;
};

const PRESET: Record<string, SkillVisual> = {
  React: { color: "#61DAFB", Icon: Icons.react },
  "Next.js": { color: "#000000", Icon: Icons.nextjs },
  "TypeScript": { color: "#3178C6", Icon: Icons.typescript },
  Typescript: { color: "#3178C6", Icon: Icons.typescript },
  "TailwindCSS": { color: "#38BDF8", Icon: Icons.tailwindcss },
  "PostgreSQL": { color: "#336791", Icon: Database as any },
  Postgres: { color: "#336791", Icon: Database as any },
  Prisma: { color: "#0C344B", Icon: Layers as any },
  Stripe: { color: "#635BFF", Icon: CreditCard as any },
  "Shadcn UI": { color: "#111827", Icon: Box as any },
  "Magic UI": { color: "#8B5CF6", Icon: Sparkles as any },
  "Cloudflare Workers": { color: "#F38020", Icon: Cloud as any },
  "Node.js": { color: "#43853D", Icon: Server as any },
  Python: { color: "#3776AB", Icon: Code2 as any },
  Go: { color: "#00ADD8", Icon: Cpu as any },
  Docker: { color: "#2496ED", Icon: Boxes as any },
  Kubernetes: { color: "#326CE5", Icon: Shield as any },
  Java: { color: "#E76F00", Icon: Code2 as any },
  "C++": { color: "#00599C", Icon: Code2 as any },
};

const PALETTE = [
  "#f97316",
  "#22c55e",
  "#06b6d4",
  "#a855f7",
  "#ef4444",
  "#10b981",
  "#3b82f6",
  "#eab308",
  "#14b8a6",
  "#f43f5e",
];

function hash(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h << 5) - h + str.charCodeAt(i);
  return Math.abs(h);
}

export function getSkillVisual(skill: string): SkillVisual {
  const key = skill.trim();
  if (PRESET[key]) return PRESET[key];
  const idx = hash(key) % PALETTE.length;
  return { color: PALETTE[idx] };
}

export function hexToRgb(hex: string) {
  const h = hex.replace('#','');
  const bigint = parseInt(h.length === 3 ? h.split('').map(c=>c+c).join('') : h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

export function rgba(hex: string, alpha: number) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function readableTextColor(hex: string) {
  const { r, g, b } = hexToRgb(hex);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance > 0.6 ? "#111827" : "#F9FAFB"; // slate-900 or gray-50
}
