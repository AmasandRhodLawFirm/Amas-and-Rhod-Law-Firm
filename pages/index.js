"use client";
import Image from "next/image";
// import BlogList from "./BlogList";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { testimonials } from "../src/data/testimonial";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getStaticProps } from "../src/services/BlogStaticProps";
// import TwitterFeed from "../components/TwitterFeed";
import latestWebinarFlyer from "../public/latest_webinar_flyer.jpg";
import pastWebinarFlyer from "../public/webinar.png";
import LinkedInFeed from "../components/LinkedInFeed";
import GalleryMarquee from "../components/GalleryMarquee";
import HomeHero from "../components/HomeHero";
import PracticeAreasSection from "../components/PracticeAreasSection";
import BlogPostGrid from "./BlogPostSlider";
import TwitterFeed from "../components/TwitterFeed";

export { getStaticProps };

const pastWebinars = [
  {
    image: pastWebinarFlyer,
    alt: "Entertainment Law Webinar: Your Rights as a Creative",
    title: "Your Rights as a Creative",
    description:
      "Our entertainment law webinar explored contracts, split sheets, royalties, advances, and recoupment for creatives and music industry stakeholders.",
  },
  {
    image: latestWebinarFlyer,
    alt: "Family Law Webinar Vol. 1",
    title: "Dissolution of Marriage and the Welfare of Children",
    description:
      "Our family law webinar examined divorce under Nigerian law, including child custody, maintenance, child arrangements, and parental access.",
  },
];

export default function Home({ posts }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWebinarIndex, setCurrentWebinarIndex] = useState(0);

  // Auto testimonials every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    if (pastWebinars.length < 2) return undefined;

    const timer = setInterval(() => {
      setCurrentWebinarIndex((prev) => (prev + 1) % pastWebinars.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPreviousWebinar = () => {
    setCurrentWebinarIndex(
      (prev) => (prev - 1 + pastWebinars.length) % pastWebinars.length
    );
  };

  const goToNextWebinar = () => {
    setCurrentWebinarIndex((prev) => (prev + 1) % pastWebinars.length);
  };

  return (
    <Layout>
      <div className="font-sans text-gray-800 w-full">
        <main className="">
          {/* Hero Section */}
          <HomeHero />

          {/* About Section */}
          <section id="about" className="py-12 md:py-16 bg-gray-50 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="hidden md:flex items-start">
                <Image
                  src="/logo.png"
                  alt="Amas & Rhod Law Logo"
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <h2 className="text-4xl font-garamond font-bold mb-4">
                  About Us
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Amas & Rhod Law, we are known for our professionalism,
                  proactiveness, in time responsiveness, and aﬀordability, we
                  remain committed to protecting our clients&apos; interests
                  with clarity and eﬃciency.
                </p>
              </div>
            </div>
          </section>

          <PracticeAreasSection />

          {/* Testimonials */}
          <section className="bg-blue-950 py-24 px-6 md:px-16 text-center overflow-hidden">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-garamond md:text-5xl font-bold mb-6 text-white">
                Client Feedbacks
              </h2>
              <p className="text-lg text-gray-400 mb-16">
                Hear directly from those we've helped achieve success.
              </p>

              {/* Testimonials slider */}
              <div className="relative">
                {/* Testimonial Cards Container */}
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <div className="bg-white p-8 md:p-12 rounded-lg shadow-md mx-auto max-w-3xl">
                          <div className="text-5xl text-blue-950 mb-4">"</div>
                          <p className="text-black text-base md:text-lg leading-relaxed mb-8">
                            {testimonial.quote}
                          </p>

                          {/* Star Rating */}
                          <div className="flex items-center justify-center space-x-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon
                                key={i}
                                className="w-5 h-5 text-yellow-400 fill-yellow-400"
                              />
                            ))}
                          </div>

                          <hr className="border-t border-gray-300 my-6" />
                          <p className="italic text-black font-medium">
                            - {testimonial.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6 text-black" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6 text-black" />
                </button>
              </div>
            </div>
          </section>

          {/* Blog */}
          <BlogPostGrid posts={posts} showAll={false} maxPosts={3} />

          <GalleryMarquee />

          {/* Past Webinars */}
          <section className="py-24 px-6 bg-gray-200 overflow-hidden">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl font-garamond md:text-5xl font-bold mb-6 text-blue-950">
                Our Past Webinars
              </h2>
              <p className="text-lg text-gray-700 mb-12">
                A look back at conversations and practical legal insights from
                our previous events.
              </p>

              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                      transform: `translateX(-${currentWebinarIndex * 100}%)`,
                    }}
                  >
                    {pastWebinars.map((pastWebinar) => (
                      <article
                        key={pastWebinar.title}
                        className="w-full flex-shrink-0 px-4"
                      >
                        <div className="bg-white rounded-lg shadow-md overflow-hidden mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 items-center">
                          <div className="bg-gray-100 p-4 md:p-6 flex items-center justify-center">
                            <Image
                              src={pastWebinar.image}
                              alt={pastWebinar.alt}
                              className="w-full h-auto max-h-[680px] object-contain"
                              unoptimized
                            />
                          </div>
                          <div className="p-8 md:p-10 text-center md:text-left">
                            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800 mb-3">
                              Past Webinar
                            </p>
                            <h3 className="text-3xl font-garamond font-bold text-blue-950 mb-4">
                              {pastWebinar.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                              {pastWebinar.description}
                            </p>
                            <p className="mt-6 font-semibold text-gray-500">
                              Registration closed
                            </p>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                {pastWebinars.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={goToPreviousWebinar}
                      className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
                      aria-label="Previous webinar"
                    >
                      <ChevronLeft className="w-6 h-6 text-black" />
                    </button>
                    <button
                      type="button"
                      onClick={goToNextWebinar}
                      className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
                      aria-label="Next webinar"
                    >
                      <ChevronRight className="w-6 h-6 text-black" />
                    </button>
                  </>
                )}
              </div>

              {pastWebinars.length > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                  {pastWebinars.map((pastWebinar, index) => (
                    <button
                      key={pastWebinar.title}
                      type="button"
                      onClick={() => setCurrentWebinarIndex(index)}
                      className={`h-2.5 w-2.5 rounded-full transition-colors ${
                        index === currentWebinarIndex
                          ? "bg-blue-950"
                          : "bg-gray-400 hover:bg-gray-500"
                      }`}
                      aria-label={`Show webinar ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* LinkedIn Feed */}
          {/* <LinkedInFeed companyId="amasandrhodlaw" />           */}
          {/* Twitter Feed */}
          {/* <TwitterFeed username="amasandrhodlaw" /> */}
        </main>
      </div>
    </Layout>
  );
}
