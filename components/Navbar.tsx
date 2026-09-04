"use client";

import { useEffect, useRef } from "react";
import { useState } from "react";
import gsap from "gsap";

const links = ["about", "work", "skills", "experience", "contact"];

export default function Navbar() {
  const nav = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(nav.current, { y: -32, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, delay: 0.2, ease: "power3.out" });
  }, []);

  return (
    <nav ref={nav} className="site-nav">
      <a href="#top" className="brand" aria-label="Junaid Ur Rehman homepage"><b>JU<span>.</span></b><small>JUNAID UR REHMAN</small></a>
      <div className={`nav-links${menuOpen ? " is-open" : ""}`}>
        {links.map((link) => <a key={link} href={`#${link}`} onClick={() => setMenuOpen(false)}>{link}</a>)}
      </div>
      <a href="#contact" className="nav-cta">LET&apos;S TALK <span>↗</span></a>
      <button
        className="nav-menu"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span /><span />
      </button>
    </nav>
  );
}
