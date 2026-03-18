"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { submitAdminPinAction } from "@/actions/admin-pin";

type Props = {
  onSuccess?: () => void;
  redirectTo?: string;
  className?: string;
};

export function AdminPinForm({
  onSuccess,
  redirectTo = "/admin/dashboard",
  className = "",
}: Props) {
  const router = useRouter();
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await submitAdminPinAction(pin);
    setLoading(false);
    if (res.error) {
      setError(res.error);
      setPin("");
      return;
    }
    onSuccess?.();
    router.refresh();
    router.push(redirectTo as "/admin/dashboard");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full max-w-xs space-y-4 ${className}`}
    >
      <div>
        <label
          htmlFor="admin-pin"
          className="mb-2 block font-ui text-xs font-medium text-gray-600"
        >
          PIN
        </label>
        <input
          id="admin-pin"
          name="pin"
          type="password"
          inputMode="numeric"
          autoComplete="off"
          maxLength={8}
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          className="w-full rounded-brand border border-gray-200 px-4 py-3 font-ui text-lg tracking-widest text-brand-navy focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
          placeholder="••••"
          autoFocus
        />
      </div>
      {error ? (
        <p className="text-center text-sm text-semantic-red font-ui">{error}</p>
      ) : null}
      <button
        type="submit"
        disabled={loading || !pin.trim()}
        className="w-full btn-burgundy py-3 font-ui text-sm disabled:opacity-50"
      >
        {loading ? "Checking…" : "Continue"}
      </button>
    </form>
  );
}
