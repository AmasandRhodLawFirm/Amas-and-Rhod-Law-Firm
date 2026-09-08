import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Ship, Music2, Globe2, UsersRound, Building2 } from "lucide-react";
import { focusAreas } from "../src/data/focusArea";

const visuals = [
  { slug: "maritime-law", image: "maritime-shipping", icon: Ship, summary: "Legal guidance for shipping, marine insurance, logistics and the movement of goods by sea." },
  { slug: "entertainment-law", icon: Music2, summary: "Protecting creative work, commercial interests and the people behind music, film and digital media." },
  { slug: "immigration-law", icon: Globe2, summary: "Clear advice on lawful migration, visas, residence and work permits for individuals and businesses." },
  { slug: "family-law", image: "family-support", icon: UsersRound, summary: "Considerate, practical representation in marriage, divorce, child custody and family matters." },
  { slug: "property-law", icon: Building2, summary: "Protecting your interests when buying, selling, leasing, developing or managing property." },
];

export default function PracticeAreasSection() {
  return (
    <section id="practice-areas" className="practice-section" aria-labelledby="practice-heading">
      <div className="max-w-7xl mx-auto">
        <div className="section-heading">
          <div>
            <h2 id="practice-heading">Our Areas of Focus</h2>
            <p>Expertise across key fields to meet your unique legal needs.</p>
          </div>
          <Link href="/focus-areas" className="section-link">
            All practice areas <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </div>
        <div className="practice-grid">
          {focusAreas.map((area, index) => {
            const { slug, image = slug, icon: Icon, summary } = visuals[index];
            return (
              <Link key={slug} href={`/focus-areas/${slug}`} className="practice-card">
                <div className="practice-card__image">
                  <Image src={`/images/${image}.webp`} alt={area.title} fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px" />
                </div>
                <div className="practice-card__body">
                  <Icon size={28} strokeWidth={1.5} className="practice-card__icon" aria-hidden="true" />
                  <h3>{area.title}</h3>
                  <p>{summary}</p>
                  <span className="section-link">Explore practice <ArrowUpRight size={18} aria-hidden="true" /></span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
