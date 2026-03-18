export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <article className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="section-title mb-4">{params.slug}</h1>
        <p className="section-subtitle">Content coming soon.</p>
      </div>
    </article>
  );
}
