"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
      setStatus("Please complete all fields before sending.");
      return;
    }

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app is opening with the project details.");
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="section shell contact-section">
      <SectionHeading
        eyebrow="05 / CONTACT"
        line1="HAVE AN IDEA?"
        line2="LET'S BUILD IT."
        copy="Tell me what you want to improve, launch, or automate. I’ll help turn it into a clear and practical next step."
      />

      <div className="contact-grid">
        <div className="contact-manifesto">
          <p className="mono-label">// LET&apos;S WORK TOGETHER</p>
          <h3>Ready to make your next digital project useful, memorable, and easier to manage?</h3>
          <p>Share the idea, the current challenge, and what success should look like. I’ll reply with a clear direction for moving forward.</p>
          <a href={`mailto:${profile.email}`}>{profile.email} <span>↗</span></a>
          <p className="contact-location">{profile.location} · {profile.phone}</p>
          <a className="whatsapp-link" href={`https://wa.me/${profile.phone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">MESSAGE ON WHATSAPP <span>↗</span></a>
          <div className="social-links" aria-label="Social links">
            {(["tiktok", "instagram", "linkedin", "fiverr", "upwork", "facebook", "youtube"] as const).map((platform) => (
              <a key={platform} href={profile.socials[platform]} target="_blank" rel="noopener noreferrer">
                <Image src={`/icons/${platform}.svg`} alt="" width={18} height={18} />
                <span>{platform.toUpperCase()}</span>
              </a>
            ))}
          </div>
        </div>

        <form className="terminal-form" onSubmit={handleSubmit}>
          <label><span>YOUR NAME</span><input name="name" required type="text" placeholder="Enter your name" /></label>
          <label><span>EMAIL ADDRESS</span><input name="email" required type="email" placeholder="Enter your email" /></label>
          <label><span>PROJECT TYPE</span><input name="subject" required type="text" placeholder="Automation, website, marketing, or content" /></label>
          <label><span>TELL ME ABOUT IT</span><textarea name="message" required rows={6} placeholder="What would you like to create or improve?" /></label>
          <button type="submit">SEND PROJECT ENQUIRY <span>↗</span></button>
          {status && <p className="form-status" role="status">{status}</p>}
        </form>
      </div>

      <footer className="footer"><span>© 2026 {profile.name.toUpperCase()}</span><span>AUTOMATION · WEBSITES · MARKETING · CONTENT</span><a href="#top">BACK TO TOP ↑</a></footer>
    </section>
  );
}
