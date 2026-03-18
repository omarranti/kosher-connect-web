import { prisma } from "@/lib/db";
import { format } from "date-fns";

export const dynamic = "force-dynamic";

export default async function UsersPage() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      plan: true,
      createdAt: true,
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-brand-navy">Users</h1>
        <p className="font-accent text-sm italic text-gray-500">
          {users.length} subscribers, trials, and community members.
        </p>
      </div>

      <div className="overflow-hidden rounded-brand border border-gray-100 bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50">
              <th className="px-5 py-3 text-left font-ui text-xs font-medium uppercase tracking-wider text-gray-400">User</th>
              <th className="px-5 py-3 text-left font-ui text-xs font-medium uppercase tracking-wider text-gray-400">Role</th>
              <th className="px-5 py-3 text-left font-ui text-xs font-medium uppercase tracking-wider text-gray-400">Plan</th>
              <th className="px-5 py-3 text-left font-ui text-xs font-medium uppercase tracking-wider text-gray-400">Joined</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {users.map((user) => (
              <tr key={user.id} className="transition-colors hover:bg-gray-50/50">
                <td className="px-5 py-4">
                  <div>
                    <p className="font-display text-sm font-semibold text-brand-navy">{user.name ?? "—"}</p>
                    <p className="font-ui text-xs text-gray-400">{user.email}</p>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <span className={`tag-brand ${user.role === "SUPER_ADMIN" ? "bg-brand-burgundy/10 text-brand-burgundy" : user.role === "ADMIN" ? "bg-brand-gold-pale text-brand-navy" : "bg-gray-100 text-gray-500"}`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <span className="tag-brand bg-brand-gold-pale text-brand-navy">{user.plan}</span>
                </td>
                <td className="px-5 py-4 font-ui text-sm text-gray-500">
                  {format(new Date(user.createdAt), "MMM d, yyyy")}
                </td>
                <td className="px-5 py-4 text-right">
                  <a href={`/admin/users/${user.id}`} className="font-ui text-xs font-medium text-brand-gold hover:text-brand-navy transition-colors">
                    View &rarr;
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
