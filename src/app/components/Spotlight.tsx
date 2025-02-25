"use client";

import { useEffect } from "react";

export default function Spotlight() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const spotlight = document.getElementById("spotlight");
      if (spotlight) {
        spotlight.style.setProperty("--x", `${e.clientX}px`);
        spotlight.style.setProperty("--y", `${e.clientY}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      id="spotlight"
      style={{
        background:
          "radial-gradient(800px at var(--x, 50%) var(--y, 50%), rgba(29, 78, 216, 0.3), transparent 80%)",
      }}
    />
  );
}
