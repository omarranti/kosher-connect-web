"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { signInAction } from "../actions";

export default function AdminLoginPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/admin";
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("callbackUrl", callbackUrl);
    try {
      await signInAction(formData);
    } catch {
      setLoading(false);
      setError("Invalid email or password.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-cream">
      <div className="w-full max-w-sm rounded-brand border border-gray-100 bg-white p-8 shadow-sm">
        <div className="text-center mb-6">
          <h1 className="font-display text-2xl font-bold text-brand-navy">
            Admin sign in
          </h1>
          <p className="font-accent text-sm italic text-gray-500 mt-1">
            Kosher Connect
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <p className="text-sm text-semantic-red font-ui">{error}</p>
          )}
          <div>
            <label htmlFor="email" className="block font-ui text-xs font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-brand border border-gray-200 px-4 py-2.5 font-ui text-sm text-brand-navy focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
              placeholder="admin@kosherconnect.app"
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-ui text-xs font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full rounded-brand border border-gray-200 px-4 py-2.5 font-ui text-sm text-brand-navy focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full btn-burgundy py-2.5 font-ui text-sm disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
