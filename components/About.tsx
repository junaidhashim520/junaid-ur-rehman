"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./SectionHeading";
import { profile, stats } from "@/data/portfolio";

export default function About() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reducedMotion) return;

      const portraitReveal = gsap.timeline({
        scrollTrigger: { trigger: ".about-grid", start: "top 72%", once: true },
      });
      portraitReveal
        .from(".about-portrait-reveal", {
          clipPath: "inset(100% 0% 0% 0%)",
          duration: 1.3,
          ease: "power4.out",
        })
        .from(".about-portrait-image", { scale: 1.06, duration: 1.3, ease: "power3.out" }, 0);

      gsap.from(".about-copy", {
        opacity: 0,
        x: -42,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-grid", start: "top 74%", once: true },
      });
      gsap.from(".stat", {
        opacity: 0,
        y: 35,
        stagger: 0.1,
        scrollTrigger: { trigger: ".stats-grid", start: "top 88%", once: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="about" className="section shell">
      <SectionHeading
        eyebrow="01 / ABOUT ME"
        line1="BUSINESS MINDSET."
        line2="DIGITAL EXECUTION."
        copy="I bring together operations experience, creative thinking, and modern technology to help businesses work smarter, show up stronger, and grow with clarity."
      />

      <div className="about-grid">
        <div className="about-copy panel-line">
          <p className="mono-label">// WHO I AM</p>
          <p className="lead-copy">I turn everyday business challenges into useful digital systems, experiences, and content.</p>
          <p>My background in operations taught me how real businesses move: where time gets lost, where communication breaks down, and where better systems make a measurable difference. Today, I apply that experience across AI automation, website development, digital marketing, and content creation.</p>
          <p>I care about work that is clear, dependable, and easy to use. Whether I am connecting a WhatsApp workflow, shaping a website, or planning a content campaign, the goal is the same: create something that earns attention and moves the business forward.</p>
          <div className="about-focus" aria-label="Core areas of work">
            <span>AI AUTOMATION</span>
            <span>WEB DEVELOPMENT</span>
            <span>DIGITAL MARKETING</span>
            <span>CONTENT CREATION</span>
          </div>
          <div className="signature">{profile.name.toUpperCase()} / DIGITAL SOLUTIONS BUILDER</div>
        </div>

        <div className="about-portrait-reveal interactive">
          <div className="about-portrait-frame" aria-hidden="true" />
          <Image src="/images/portrait-about.webp" alt={`Portrait of ${profile.name}`} fill sizes="(max-width: 980px) 100vw, 44vw" className="about-portrait-image" />
          <div className="about-portrait-shade" aria-hidden="true" />
          <div className="about-portrait-caption">
            <p>BUILD PHILOSOPHY</p>
            <strong>USEFUL <span>BEATS</span> COMPLICATED.</strong>
            <small>Build work people can understand, trust, and use.</small>
          </div>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map(([value, label]) => (
          <div key={label} className="stat"><strong>{value}</strong><span>{label}</span></div>
        ))}
      </div>
    </section>
  );
}
