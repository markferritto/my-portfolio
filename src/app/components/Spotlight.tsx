"use client";

import { useEffect, useState } from "react";

export default function Spotlight() {

      const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
      const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
     let timeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => setIsMoving(false), 150);
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    }
  }, []);

  return (
    <div
      id="spotlight"
      style={{
        background: `radial-gradient(
          ${isMoving ? "900px" : "700px"} at ${mousePosition.x}px ${
          mousePosition.y
        }px, 
          rgba(29, 78, 216, ${isMoving ? "0.15" : "0.1"}), 
          transparent ${isMoving ? "70%" : "75%"}
        )`,
        transition: "background 0.2s ease",
      }}
    />
  );
}
