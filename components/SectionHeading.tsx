"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  eyebrow: string;
  line1: string;
  line2: string;
  copy?: string;
};

export default function SectionHeading({ eyebrow, line1, line2, copy }: Props) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-reveal]", {
        y: 60,
        opacity: 0,
        filter: "blur(10px)",
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: { trigger: root.current, start: "top 78%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="section-heading">
      <div>
        <p data-reveal className="eyebrow">{eyebrow}</p>
        <h2 data-reveal>{line1}<br /><span>{line2}</span></h2>
      </div>
      {copy && <p data-reveal className="section-copy">{copy}</p>}
    </div>
  );
}
