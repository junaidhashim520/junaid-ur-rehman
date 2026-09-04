"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { disciplines } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".discipline", {
        y: 60,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".discipline-grid", start: "top 82%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="skills" className="section shell skills-section">
      <SectionHeading
        eyebrow="03 / CAPABILITIES"
        line1="PRACTICAL SKILLS."
        line2="BUILT TO DELIVER."
        copy="A focused toolkit for automating operations, building responsive websites, connecting platforms, and creating digital experiences that support real business goals."
      />
      <div className="discipline-grid">
        {disciplines.map((item) => (
          <Link key={item.title} href={item.href} className="discipline interactive">
            <div className="discipline-media"><Image src={item.image} alt={`${item.title} service`} fill sizes="(max-width: 980px) 100vw, 50vw" /><div className="discipline-media-wash" aria-hidden="true" /></div>
            <div className="discipline-body"><div className="discipline-number">{item.number}</div><h3>{item.title}</h3><p>{item.copy}</p><div className="tag-row compact">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
            <div className="corner-mark" aria-hidden="true">↗</div>
            <span className="discipline-action">EXPLORE PROJECT</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
