import Image from "next/image";
import Link from "next/link";

export default function ContactCallToAction() {
  return (
    <section className="relative isolate overflow-hidden text-white py-24 px-4 text-center" aria-labelledby="contact-cta-heading">
      <Image
        src="/images/lady-justice-hero.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
        aria-hidden="true"
        unoptimized
      />
      <div className="absolute inset-0 -z-10 bg-blue-950/80" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl">
        <h2 id="contact-cta-heading" className="text-4xl font-garamond font-bold mb-6">
          Let&apos;s Get Started
        </h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Ready to take the next step? Contact us today to discuss how we can support your legal journey.
        </p>
        <Link
          href="/contact"
          className="inline-flex bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
