const articleArtwork = [
  [/wharf-landing/, "/gallery/gallery-15.webp", "Maritime Law"],
  [/demurrage|maritime/, "/images/maritime-shipping.webp", "Maritime Law"],
  [/skilled-worker|immigration|migration/, "/gallery/gallery-03.webp", "Immigration Law"],
  [/marriage|child-custody|family/, "/images/family-support.webp", "Family Law"],
  [/split-sheet/, "/gallery/gallery-26.webp", "Entertainment Law"],
  [/royalt/, "/gallery/gallery-10.webp", "Entertainment Law"],
  [/repertoire/, "/gallery/gallery-27.webp", "Entertainment Law"],
  [/trademark|brand-identity|stage-names/, "/gallery/gallery-14.webp", "Entertainment Law"],
  [/music|360-deal|entertainment/, "/gallery/gallery-12.webp", "Entertainment Law"],
  [/property|land|real-estate/, "/gallery/gallery-21.webp", "Property Law"],
];

export function getArticlePresentation(post) {
  const subject = `${post.slug?.current || ""} ${post.title || ""}`.toLowerCase();
  const artwork = articleArtwork.find(([pattern]) => pattern.test(subject));
  const text = (post.excerpt || (post.body || [])
    .filter((block) => block._type === "block" && (!block.style || block.style === "normal"))
    .map((block) => (block.children || []).map((span) => span.text || "").join(""))
    .join(" ")).replace(/\s+/g, " ").trim();
  const excerpt = text.length > 180 ? `${text.slice(0, 180).replace(/\s+\S*$/, "")}...` : text;
  return {
    image: post.mainImage?.asset?.url || artwork?.[1] || "/images/lady-justice-hero.webp",
    imageAlt: post.mainImage?.alt || post.title || "Legal insights from Amas & Rhod Law",
    contain: !post.mainImage?.asset?.url && !!artwork?.[1].startsWith("/gallery/"),
    category: post.categories?.[0]?.title || artwork?.[2] || "Legal Insights",
    excerpt,
  };
}
