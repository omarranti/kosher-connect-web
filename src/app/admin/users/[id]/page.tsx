export default function UserDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold text-brand-navy">User Profile #{params.id}</h1>
      <div className="rounded-brand border border-gray-100 bg-white p-6">
        <p className="font-accent text-sm italic text-gray-400">Form implementation pending.</p>
      </div>
    </div>
  );
}
