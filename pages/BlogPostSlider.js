import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getArticlePresentation } from "../src/data/articlePresentation";

export default function BlogPostGrid({ posts = [], showAll = false, maxPosts = 3 }) {
  const readablePosts = (posts || []).filter((post) => post.slug?.current);
  const postsToShow = showAll ? readablePosts : readablePosts.slice(0, maxPosts);
  const Heading = showAll ? "h1" : "h2";

  return (
    <section className="insights-section" aria-labelledby="insights-heading">
      <div className="max-w-7xl mx-auto">
        <div className="section-heading">
          <div>
            <Heading id="insights-heading">Latest Insights</Heading>
            <p>Perspectives on the legal matters shaping your world.</p>
          </div>
          {!showAll && readablePosts.length > maxPosts && (
            <Link href="/blog" className="section-link">
              All insights <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
          )}
        </div>

        {postsToShow.length ? (
          <div className="insights-grid">
            {postsToShow.map((post) => {
              const presentation = getArticlePresentation(post);
              const published = post.publishedAt ? new Date(post.publishedAt) : null;
              const validDate = published && !Number.isNaN(published.getTime());
              return (
                <article key={post._id || post.slug.current} className="insight-card">
                  <Link href={`/blog/${post.slug.current}`} className="insight-card__link">
                    <div className={`insight-card__image${presentation.contain ? " insight-card__image--artwork" : ""}`}>
                      <Image src={presentation.image} alt={presentation.imageAlt} fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 420px" />
                    </div>
                    <div className="insight-card__body">
                      <div className="insight-card__meta">
                        <span>{presentation.category}</span>
                        {validDate && <time dateTime={published.toISOString()}>{published.toLocaleDateString("en-GB", {
                          day: "numeric", month: "short", year: "numeric", timeZone: "UTC",
                        })}</time>}
                      </div>
                      <h3>{post.title || "Untitled Post"}</h3>
                      {presentation.excerpt && <p>{presentation.excerpt}</p>}
                      <span className="section-link">Read article <ArrowUpRight size={18} aria-hidden="true" /></span>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        ) : <p className="text-gray-600 py-8">No blog posts available.</p>}

        <p className="insights-disclaimer">
          <strong>Disclaimer:</strong> Articles published on this site are for educational and insights purposes <strong>ONLY</strong> and should not be construed as legal advice.
          For legal advice and guidance regarding your situation, please <Link href="/contact">book an appointment</Link>.
        </p>
      </div>
    </section>
  );
}
