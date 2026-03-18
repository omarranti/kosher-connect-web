import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
};

const previewPosts = [
  {
    title: "Why Community Dining Matters",
    excerpt: "Breaking bread together is more than a meal — it's a tradition that binds us across generations.",
    category: "Community",
    date: "Coming soon",
  },
  {
    title: "A Beginner's Guide to Kosher Certification",
    excerpt: "From OU to OK, learn what those symbols mean and how to shop with confidence.",
    category: "Education",
    date: "Coming soon",
  },
  {
    title: "Planning Your First Shabbat Dinner Party",
    excerpt: "Tips, recipes, and everything you need to host a beautiful Shabbat experience.",
    category: "Lifestyle",
    date: "Coming soon",
  },
];

export default function BlogPage() {
  return (
    <section className="py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="section-eyebrow mb-4">From the Community</p>
          <h1 className="section-title mb-4">Stories, Recipes &amp; Insights</h1>
          <p className="mx-auto max-w-lg font-accent text-lg leading-relaxed text-brand-navy/60">
            Dive into articles about Jewish life, kosher cooking, community stories, and more. Our blog is launching soon.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {previewPosts.map((post) => (
            <div
              key={post.title}
              className="group rounded-brand border border-brand-sand bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="inline-block rounded-pill bg-brand-gold-pale px-2.5 py-1 font-ui text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                {post.category}
              </span>
              <h3 className="mt-3 font-display text-base font-bold text-brand-navy">{post.title}</h3>
              <p className="mt-2 font-accent text-sm leading-relaxed text-brand-navy/50">{post.excerpt}</p>
              <p className="mt-4 font-ui text-xs font-medium text-brand-navy/40">{post.date}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/#waitlist" className="btn-outline px-6 py-3 text-xs">
            Get notified when we launch
          </Link>
        </div>
      </div>
    </section>
  );
}
