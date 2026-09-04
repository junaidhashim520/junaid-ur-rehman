"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "@/data/portfolio";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const portrait = useRef<HTMLDivElement>(null);
  const rings = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine) and (min-width: 981px)").matches;
    let removePointerListeners = () => {};

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(
          [".hero-kicker", ".hero-line > span", ".hero-support", ".hero-actions", ".portrait-reveal", ".portrait-note", ".scroll-mark"],
          { opacity: 1, y: 0, scale: 1, filter: "none", clipPath: "inset(0% 0% 0% 0%)" },
        );
        return;
      }

      const intro = gsap.timeline({ defaults: { ease: "power4.out" }, delay: 0.42 });
      intro
        .from(".hero-kicker", { opacity: 0, y: 18, duration: 0.6 })
        .addLabel("headline", "-=0.16")
        .from(
          ".hero-line > span",
          { yPercent: 120, rotate: 2, stagger: 0.09, duration: 1.05 },
          "headline",
        )
        .from(".hero-support", { opacity: 0, y: 28, duration: 0.7 }, "headline+=0.52")
        .from(".hero-actions", { opacity: 0, y: 22, duration: 0.6 }, "headline+=0.7")
        .from(
          ".portrait-reveal",
          { clipPath: "inset(100% 0% 0% 0%)", duration: 1.4 },
          "headline+=0.78",
        )
        .from(
          ".portrait-depth",
          { opacity: 0, y: 100, scale: 0.96, filter: "blur(10px)", duration: 1.35 },
          "headline+=0.78",
        )
        .from(".portrait-orbit", { opacity: 0, scale: 0.86, stagger: 0.1, duration: 1 }, "headline+=1.1")
        .from([".portrait-note", ".scroll-mark"], { opacity: 0, y: 14, stagger: 0.1, duration: 0.55 }, "headline+=1.42");

      gsap.to(".orbit-large", { rotation: 360, duration: 80, repeat: -1, ease: "none" });
      gsap.to(".orbit-medium", { rotation: -360, duration: 110, repeat: -1, ease: "none" });
      gsap.to(".orbit-small", { rotation: 360, duration: 140, repeat: -1, ease: "none" });

      gsap.to(portrait.current, {
        yPercent: 8,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 1 },
      });
      gsap.to(rings.current, {
        yPercent: -6,
        opacity: 0.45,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 1 },
      });
      gsap.to(glow.current, {
        opacity: 0.45,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 1 },
      });
      gsap.to(".hero-copy-wrap", {
        y: -34,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 1 },
      });

      if (finePointer && root.current && portrait.current && rings.current && glow.current) {
        const portraitX = gsap.quickTo(portrait.current, "x", { duration: 0.8, ease: "power3.out" });
        const portraitY = gsap.quickTo(portrait.current, "y", { duration: 0.8, ease: "power3.out" });
        const ringsX = gsap.quickTo(rings.current, "x", { duration: 1, ease: "power3.out" });
        const ringsY = gsap.quickTo(rings.current, "y", { duration: 1, ease: "power3.out" });
        const glowX = gsap.quickTo(glow.current, "x", { duration: 1.2, ease: "power3.out" });
        const glowY = gsap.quickTo(glow.current, "y", { duration: 1.2, ease: "power3.out" });

        const onPointerMove = (event: PointerEvent) => {
          const x = event.clientX / window.innerWidth - 0.5;
          const y = event.clientY / window.innerHeight - 0.5;
          portraitX(x * 8);
          portraitY(y * 6);
          ringsX(x * 16);
          ringsY(y * 10);
          glowX(x * 24);
          glowY(y * 14);
        };
        const onPointerLeave = () => {
          portraitX(0);
          portraitY(0);
          ringsX(0);
          ringsY(0);
          glowX(0);
          glowY(0);
        };

        root.current.addEventListener("pointermove", onPointerMove);
        root.current.addEventListener("pointerleave", onPointerLeave);
        removePointerListeners = () => {
          root.current?.removeEventListener("pointermove", onPointerMove);
          root.current?.removeEventListener("pointerleave", onPointerLeave);
        };
      }
    }, root);

    return () => {
      removePointerListeners();
      ctx.revert();
    };
  }, []);

  return (
    <section ref={root} id="top" className="hero shell">
      <div className="hero-grid">
        <div className="hero-copy-wrap">
          <p className="hero-kicker">AI AUTOMATION · WEBSITES · MARKETING · CONTENT</p>
          <h1 className="hero-title">
            <span className="hero-line"><span>IDEAS INTO</span></span>
            <span className="hero-line gold"><span>WORKING</span></span>
            <span className="hero-line gold"><span>SYSTEMS.</span></span>
          </h1>
          <div className="hero-support">
            <p>I&apos;m Junaid, a digital solutions builder creating practical automations, websites, campaigns, and content for growing businesses.</p>
            <div className="hero-meta"><span>BASED IN PAKISTAN</span><span>AVAILABLE WORLDWIDE</span></div>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">EXPLORE MY WORK <span>↘</span></a>
            <a className="button" href="#contact">START A PROJECT <span>↗</span></a>
          </div>
        </div>

        <div className="portrait-stage" aria-label={`Portrait of ${profile.name}`}>
          <div ref={glow} className="portrait-glow" aria-hidden="true" />
          <div ref={rings} className="portrait-orbits" aria-hidden="true">
            <div className="portrait-orbit orbit-large"><i /></div>
            <div className="portrait-orbit orbit-medium"><i /></div>
            <div className="portrait-orbit orbit-small"><i /></div>
          </div>

          <div className="portrait-reveal">
            <div ref={portrait} className="portrait-depth">
              <div className="portrait-media-mask">
                <Image
                  src="/images/portrait-main-cutout.webp"
                  alt={`${profile.name} standing in a black suit`}
                  fill
                  priority
                  sizes="(max-width: 820px) 100vw, (max-width: 1100px) 48vw, 42vw"
                  className="hero-portrait-fallback"
                />
              </div>
            </div>
          </div>

          <div className="portrait-note">
            <span>01</span>
            <i />
            <p>PRACTICAL IDEAS.<br />POLISHED EXECUTION.</p>
          </div>
        </div>
      </div>
      <div className="scroll-mark"><span>SCROLL TO EXPLORE</span><i /></div>
    </section>
  );
}
