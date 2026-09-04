"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

type Project = (typeof projects)[number];

function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return <><Image src={project.image} alt="WhatsApp AI assistant automation workflow" fill sizes="(max-width: 980px) 100vw, 44vw" className="project-image project-image-workflow" /><div className="project-image-wash" aria-hidden="true" /><div className="visual-status"><i /> REAL WORKFLOW</div></>;
  }
  if (project.visual === "website") {
    const gallery = project.gallery ?? [];
    return (
      <div className="website-gallery">
        {gallery.map((item, index) => (
          <figure key={item.title} className="website-shot">
            <Image src={item.image} alt={`${item.title} website preview`} fill sizes="(max-width: 620px) 84vw, (max-width: 980px) 42vw, 22vw" style={{ objectPosition: item.position }} />
            <figcaption>{item.title}<span>VIEW / 0{index + 1}</span></figcaption>
          </figure>
        ))}
      </div>
    );
  }
  if (project.visual === "marketing" || project.visual === "content") {
    const generatedImage = project.generatedImage;
    if (!generatedImage) return null;
    const alt = project.visual === "marketing"
      ? "Digital marketing campaign planning and analytics workspace"
      : "Content creation studio with camera, microphone, storyboard, and editing timeline";
    return <><Image src={generatedImage} alt={alt} fill sizes="(max-width: 980px) 100vw, 44vw" className="project-image project-image-generated" /><div className="project-image-wash project-image-wash-soft" aria-hidden="true" /><div className="visual-status"><i /> REAL PHOTOGRAPHY</div></>;
  }
  return null;
}

export default function Projects() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");
      cards.forEach((card, index) => {
        gsap.to(card, { scale: 0.94 + index * 0.015, filter: `brightness(${0.7 + index * 0.08})`, ease: "none", scrollTrigger: { trigger: card, start: `top ${110 + index * 12}px`, end: "bottom top", scrub: true } });
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} id="work" className="section shell work-section">
      <SectionHeading eyebrow="02 / FEATURED WORK" line1="REAL PROBLEMS." line2="USEFUL SOLUTIONS." copy="A selection of practical digital work across automation, web, marketing, and content—designed to connect ideas with clear business outcomes." />
      <div className="project-stack">
        {projects.map((project, index) => (
          <Link href={project.href} id={`project-${project.visual}`} key={project.title} className="project-card interactive" style={{ top: `${96 + index * 14}px` }}>
            <div className="project-topline"><span>{project.index} / PROJECT</span><span>{project.category}</span></div>
            <div className="project-layout">
              <div><p className="mono-label">// PROJECT</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
              <div className="project-visual"><ProjectVisual project={project} /></div>
            </div>
            <div className="project-footer"><span>{project.outcome}</span><span>VIEW FULL CASE STUDY ↗</span></div>
          </Link>
        ))}
      </div>
    </section>
  );
}
