export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <article className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="section-title mb-4">{slug}</h1>
        <p className="section-subtitle">Content coming soon.</p>
      </div>
    </article>
  );
}
