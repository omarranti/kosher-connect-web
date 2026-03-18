"use client";

import { useRouter } from "next/navigation";
import { updateUser } from "../../user-actions";

const ROLES = ["USER", "ADMIN", "SUPER_ADMIN"] as const;
const PLANS = ["FREE", "MONTHLY", "YEARLY", "FAMILY"] as const;

type UserData = {
  id: string;
  name: string | null;
  email: string | null;
  role: string;
  plan: string;
};

export function UserForm({ user }: { user: UserData }) {
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    await updateUser(user.id, formData);
  }

  const inputClass =
    "w-full rounded-brand border border-gray-200 px-4 py-2.5 font-ui text-sm text-brand-navy focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold";
  const labelClass = "block font-ui text-xs font-medium text-gray-600 mb-1";

  return (
    <form action={handleSubmit} className="space-y-6">
      <div className="rounded-brand border border-gray-100 bg-white p-6">
        <h3 className="font-display text-lg font-semibold text-brand-navy mb-4">User Details</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>Name</label>
            <input id="name" name="name" defaultValue={user.name ?? ""} className={inputClass} />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>Email</label>
            <input id="email" name="email" type="email" defaultValue={user.email ?? ""} className={inputClass} />
          </div>
          <div>
            <label htmlFor="role" className={labelClass}>Role</label>
            <select id="role" name="role" defaultValue={user.role} className={inputClass}>
              {ROLES.map((r) => (
                <option key={r} value={r}>{r.replace(/_/g, " ")}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="plan" className={labelClass}>Subscription Plan</label>
            <select id="plan" name="plan" defaultValue={user.plan} className={inputClass}>
              {PLANS.map((p) => (
                <option key={p} value={p}>{p.charAt(0) + p.slice(1).toLowerCase()}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button type="submit" className="btn-burgundy text-sm px-6 py-2.5">
          Save Changes
        </button>
        <button type="button" onClick={() => router.back()} className="btn-outline text-sm px-6 py-2.5">
          Cancel
        </button>
      </div>
    </form>
  );
}
