import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectDetail, projectDetails } from "@/data/projectDetails";

export function generateStaticParams() {
  return projectDetails.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectDetail(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Junaid Ur Rehman`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectDetail(slug);
  if (!project) notFound();

  return (
    <main className={`case-page case-page-${project.slug}`}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="case-nav shell" aria-label="Project navigation">
        <Link href="/" className="brand" aria-label="Return to homepage">JU<span>.</span></Link>
        <Link href="/#skills" className="case-back">← ALL SERVICES</Link>
        <Link href="/#contact" className="nav-cta">START A PROJECT <span>↗</span></Link>
      </nav>

      <header className="case-hero shell">
        <div className="case-hero-copy">
          <p className="eyebrow">{project.number} / {project.eyebrow}</p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <div className="tag-row">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
        </div>
        <div className={`case-hero-media${project.slug === "ai-automation" ? " workflow-media" : ""}`}>
          {project.websites ? (
            <div className="website-hero-gallery">
              {project.websites.map((site, index) => (
                <figure key={site.title}>
                  <Image src={site.image} alt={`${site.title} website preview`} fill priority={index === 0} sizes="(max-width: 980px) 50vw, 25vw" />
                  <figcaption><span>0{index + 1}</span>{site.title}</figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <Image src={project.image} alt={project.imageAlt} fill priority sizes="(max-width: 980px) 100vw, 48vw" />
          )}
          <div className="case-media-shade" aria-hidden="true" />
          <span className="case-media-label">{project.websites ? "04 SELECTED BUILDS" : `PROJECT / ${project.number}`}</span>
        </div>
      </header>

      <section className="case-overview shell">
        <p className="mono-label">// PROJECT OVERVIEW</p>
        <p className="case-lead">{project.overview}</p>
        <div className="case-brief-grid">
          <article><span>01</span><h2>THE CHALLENGE</h2><p>{project.challenge}</p></article>
          <article><span>02</span><h2>THE SOLUTION</h2><p>{project.solution}</p></article>
        </div>
      </section>

      {project.websites && (
        <section className="website-cases shell">
          <div className="case-section-title"><p className="eyebrow">SELECTED WEBSITE WORK</p><h2>FOUR BRANDS.<br /><span>FOUR EXPERIENCES.</span></h2></div>
          <div className="website-case-list">
            {project.websites.map((site, index) => (
              <article className="website-case" key={site.title}>
                <div className="website-case-image"><Image src={site.image} alt={`${site.title} homepage`} fill sizes="(max-width: 980px) 100vw, 52vw" /></div>
                <div className="website-case-copy">
                  <p className="mono-label">0{index + 1} / {site.type}</p>
                  <h3>{site.title}</h3>
                  <p>{site.summary}</p>
                  <ul>{site.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="case-process shell">
        <div className="case-section-title"><p className="eyebrow">HOW THE WORK MOVES</p><h2>FROM BRIEF TO<br /><span>WORKING SYSTEM.</span></h2></div>
        <div className="case-process-grid">
          {project.process.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.copy}</p></article>)}
        </div>
      </section>

      <section className="case-deliverables shell">
        <div><p className="mono-label">// INCLUDED IN THE PROJECT</p><h2>CORE DELIVERABLES</h2></div>
        <ul>{project.deliverables.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ul>
      </section>

      <footer className="case-footer shell">
        <div><p className="eyebrow">HAVE A SIMILAR PROJECT?</p><h2>LET&apos;S BUILD<br /><span>THE NEXT ONE.</span></h2></div>
        <Link className="button button-primary" href="/#contact">START A CONVERSATION <span>↗</span></Link>
        <Link className="case-back-bottom" href="/">← BACK TO PORTFOLIO</Link>
      </footer>
    </main>
  );
}
