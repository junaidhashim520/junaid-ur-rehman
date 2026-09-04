"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const move = (event: MouseEvent) => {
      gsap.to(dot.current, { x: event.clientX, y: event.clientY, duration: 0.12, ease: "power2.out" });
      gsap.to(ring.current, { x: event.clientX, y: event.clientY, duration: 0.42, ease: "power3.out" });
    };

    const enter = () => gsap.to(ring.current, { scale: 1.75, opacity: 0.8, duration: 0.25 });
    const leave = () => gsap.to(ring.current, { scale: 1, opacity: 0.45, duration: 0.25 });

    window.addEventListener("mousemove", move);
    const targets = document.querySelectorAll("a, button, input, textarea, .interactive");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" />
      <div ref={dot} className="cursor-dot" />
    </>
  );
}
