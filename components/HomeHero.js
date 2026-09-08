import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <Image
        src="/images/lady-justice-hero.webp"
        alt="Lady Justice holding the scales of justice"
        fill
        priority
        unoptimized
        sizes="100vw"
        className="home-hero__image"
      />
      <div className="home-hero__shade" />
      <div className="home-hero__inner">
        <div className="home-hero__copy">
          <h1 id="home-title">Amas &amp; Rhod Law</h1>
          <p>Law in action. Protection in motion; Our Lawyers are working!</p>
          <a
            href="https://calendly.com/amasandrhodlaw-info/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="home-hero__cta"
          >
            Book Appointment <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
