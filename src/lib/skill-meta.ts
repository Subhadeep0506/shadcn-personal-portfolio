import { Icons, IconProps } from "@/components/icons";
import { FiGithub } from 'react-icons/fi';
import {
  SiLangchain,
  SiPytorch,
  SiReact, SiFastapi,
  SiGooglecloud,
  SiTypescript,
  SiPostgresql,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiJavascript,
  SiFlask,
  SiHuggingface,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc"
import { FaJava, FaAws } from "react-icons/fa6";

export type SkillVisual = {
  color: string; // base hex color, e.g. #61dafb
  Icon?: (props: IconProps) => JSX.Element;
};

const PRESET: Record<string, SkillVisual> = {
  "Python": { color: "#3776AB", Icon: SiPython as any },        // Blue from logo
  "React": { color: "#61DAFB", Icon: SiReact as any },          // React cyan
  "PyTorch": { color: "#EE4C2C", Icon: SiPytorch as any },      // PyTorch orange/red
  "FastAPI": { color: "#009688", Icon: SiFastapi as any },      // Teal-green
  "HuggingFace": { color: "#FFB000", Icon: SiHuggingface as any }, // Yellow from mascot
  "Flask": { color: "#000000", Icon: SiFlask as any },          // Flask is black/white
  "Langchain": { color: "#00B171", Icon: SiLangchain as any },  // Green from branding
  "Azure": { color: "#0078D4", Icon: VscAzure as any },         // Azure blue
  "AWS": { color: "#FF9900", Icon: FaAws as any },              // AWS orange
  "GCP": { color: "#4285F4", Icon: SiGooglecloud as any },      // Google blue
  "Github": { color: "#181717", Icon: FiGithub as any },        // GitHub black
  "TypeScript": { color: "#3178C6", Icon: SiTypescript as any },// TypeScript blue
  "JavaScript": { color: "#F7DF1E", Icon: SiJavascript as any },// JS yellow
  "PostgreSQL": { color: "#4169E1", Icon: SiPostgresql as any },// Royal blue
  "Docker": { color: "#2496ED", Icon: SiDocker as any },        // Docker blue
  "Kubernetes": { color: "#326CE5", Icon: SiKubernetes as any },// Kubernetes blue
  "Java": { color: "#E76F00", Icon: FaJava as any },            // Java orange
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
  const h = hex.replace('#', '');
  const bigint = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
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
