import Image from "next/image";
import { CalendarDays, Clock3, Ticket } from "lucide-react";

const registrationUrl =
  "https://www.eventbrite.co.uk/e/entertainment-law-and-the-music-business-tickets-1999398900935?aff=oddtdtcreator";

export default function UpcomingWebinar() {
  return (
    <section id="webinar" className="webinar-section" aria-labelledby="webinar-heading">
      <div className="webinar-inner">
        <div className="webinar-flyer">
          <Image
            src="/images/entertainment-law-music-business-webinar.webp"
            alt="Entertainment Law and the Music Business webinar flyer"
            width={1200}
            height={1500}
            sizes="(max-width: 767px) 100vw, 48vw"
            className="w-full h-auto"
            loading="eager"
            unoptimized
          />
        </div>
        <div className="webinar-copy">
          <p className="webinar-eyebrow">Upcoming Webinar</p>
          <h2 id="webinar-heading">Entertainment Law &amp; The Music Business</h2>
          <p className="webinar-lead">
            Understanding the legal and commercial sides of the creative industry.
          </p>
          <dl className="webinar-details">
            <div>
              <CalendarDays aria-hidden="true" />
              <dt>Date</dt>
              <dd>Friday, 25 September 2026</dd>
            </div>
            <div>
              <Clock3 aria-hidden="true" />
              <dt>Time</dt>
              <dd>4:00 PM WAT</dd>
            </div>
          </dl>
          <a
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="webinar-register"
          >
            <Ticket aria-hidden="true" /> Register on Eventbrite
          </a>
        </div>
      </div>
    </section>
  );
}
