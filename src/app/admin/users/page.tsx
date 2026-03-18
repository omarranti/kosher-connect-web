export default function UsersPage() {
  const users = [
    { id: "1", name: "Omar Cohen", email: "omar@example.com", plan: "Family", status: "Active", joined: "Jan 2026" },
    { id: "2", name: "Rachel Levi", email: "rachel@example.com", plan: "Monthly", status: "Active", joined: "Feb 2026" },
    { id: "3", name: "David Stern", email: "david@example.com", plan: "Yearly", status: "Active", joined: "Mar 2026" },
    { id: "4", name: "Sarah Gold", email: "sarah@example.com", plan: "Monthly", status: "Trial", joined: "Mar 2026" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-brand-navy">Users</h1>
        <p className="font-accent text-sm italic text-gray-500">
          Manage subscribers, trials, and community members.
        </p>
      </div>

      <div className="overflow-hidden rounded-brand border border-gray-100 bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50">
              <th className="px-5 py-3 text-left font-ui text-xs font-medium uppercase tracking-wider text-gray-400">User</th>
              <th className="px-5 py-3 text-left font-ui text-xs font-medium uppercase tracking-wider text-gray-400">Plan</th>
              <th className="px-5 py-3 text-left font-ui text-xs font-medium uppercase tracking-wider text-gray-400">Status</th>
              <th className="px-5 py-3 text-left font-ui text-xs font-medium uppercase tracking-wider text-gray-400">Joined</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {users.map((user) => (
              <tr key={user.id} className="transition-colors hover:bg-gray-50/50">
                <td className="px-5 py-4">
                  <div>
                    <p className="font-display text-sm font-semibold text-brand-navy">{user.name}</p>
                    <p className="font-ui text-xs text-gray-400">{user.email}</p>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <span className="tag-brand bg-brand-gold-pale text-brand-navy">{user.plan}</span>
                </td>
                <td className="px-5 py-4">
                  <span className={`tag-brand ${user.status === "Active" ? "bg-semantic-green-soft text-semantic-green" : "bg-blue-50 text-blue-500"}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-5 py-4 font-ui text-sm text-gray-500">{user.joined}</td>
                <td className="px-5 py-4 text-right">
                  <a href={`/admin/users/${user.id}`} className="font-ui text-xs font-medium text-brand-gold hover:text-brand-navy transition-colors">
                    View →
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
