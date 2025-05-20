"use client";
import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      onScroll={() => ScrollTrigger.update()} // 👈 Sincroniza scroll
    >
      {children}
    </ReactLenis>
  );
}
