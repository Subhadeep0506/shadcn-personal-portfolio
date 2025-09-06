import React from "react";

export function handleCardMouseMove(
  e: React.MouseEvent<HTMLElement, MouseEvent>
) {
  const target = e.currentTarget as HTMLElement;
  const rect = target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  target.style.setProperty("--mx", `${x}px`);
  target.style.setProperty("--my", `${y}px`);
}

export function handleCardMouseLeave(
  e: React.MouseEvent<HTMLElement, MouseEvent>
) {
  const target = e.currentTarget as HTMLElement;
  target.style.removeProperty("--mx");
  target.style.removeProperty("--my");
}
