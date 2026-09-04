"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(".timeline-progress", { scaleY: 0 }, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: ".timeline", start: "top 65%", end: "bottom 70%", scrub: true },
      });
      gsap.from(".timeline-item", {
        opacity: 0,
        x: 40,
        stagger: 0.14,
        scrollTrigger: { trigger: ".timeline", start: "top 72%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="experience" className="section shell">
      <SectionHeading
        eyebrow="04 / EXPERIENCE"
        line1="OPERATIONS ROOTS."
        line2="DIGITAL DIRECTION."
        copy="Seven years of hands-on operations experience shaped how I work today: understand the process, remove friction, and build solutions people can actually use."
      />
      <div className="timeline">
        <div className="timeline-rail"><div className="timeline-progress" /></div>
        {experience.map((item, index) => (
          <article className="timeline-item" key={item.role}>
            <div className="timeline-dot"><span>{String(index + 1).padStart(2, "0")}</span></div>
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-content"><p>{item.company}</p><h3>{item.role}</h3><span>{item.text}</span></div>
          </article>
        ))}
      </div>
    </section>
  );
}
