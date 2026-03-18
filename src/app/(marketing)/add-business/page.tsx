"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Store, ArrowRight, Shield, Sparkles } from "lucide-react";
import { submitVendorListing } from "./actions";

const LISTING_TYPES = [
  { value: "RESTAURANT", label: "Restaurant" },
  { value: "CAFE", label: "Cafe" },
  { value: "BAKERY", label: "Bakery" },
  { value: "BUTCHER", label: "Butcher" },
  { value: "GROCERY", label: "Grocery" },
  { value: "CATERER", label: "Caterer" },
  { value: "FOOD_TRUCK", label: "Food Truck" },
  { value: "WHOLESALE", label: "Wholesale" },
  { value: "VENUE", label: "Venue" },
  { value: "PHOTOGRAPHER", label: "Photographer" },
  { value: "DJ", label: "DJ" },
  { value: "DECORATOR", label: "Decorator" },
  { value: "PLANNER", label: "Event Planner" },
  { value: "WORKSHOP", label: "Workshop" },
  { value: "OTHER", label: "Other" },
] as const;

const CERTIFIERS = [
  { value: "NONE", label: "None / Not Applicable" },
  { value: "OU", label: "OU" },
  { value: "OK", label: "OK" },
  { value: "RCC", label: "RCC" },
  { value: "STAR_K", label: "Star-K" },
  { value: "CRC", label: "CRC" },
  { value: "OTHER", label: "Other" },
] as const;

const inputClass =
  "w-full rounded-brand-sm border-[1.5px] border-brand-sand bg-brand-parchment px-4 py-3 font-ui text-sm text-brand-navy outline-none transition-all placeholder:text-brand-sand focus:border-brand-gold focus:bg-white focus:ring-2 focus:ring-brand-gold/10";
const labelClass = "mb-1.5 block font-ui text-xs font-semibold text-brand-navy";

export default function AddBusinessPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    const result = await submitVendorListing(fd);

    setLoading(false);
    if (result.error) {
      setError(result.error);
    } else {
      setSubmitted(true);
    }
  }

  return (
    <section className="relative overflow-hidden bg-brand-cream px-6 py-28 sm:py-32">
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-brand-gold/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[300px] w-[300px] rounded-full bg-brand-burgundy/5 blur-[100px]" />

      <div className="relative mx-auto max-w-2xl">
        <div className="relative overflow-hidden rounded-brand border border-brand-sand/50 bg-white shadow-card-hover">
          {/* Top gradient accent */}
          <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-brand-gold via-brand-burgundy to-brand-navy" />

          <div className="p-8 sm:p-10">
            {!submitted ? (
              <>
                <div className="mb-2 flex items-center gap-2">
                  <div className="grid h-10 w-10 place-items-center rounded-brand-sm bg-brand-gold-pale">
                    <Store className="h-5 w-5 text-brand-gold" />
                  </div>
                  <p className="section-eyebrow text-left">For Vendors</p>
                </div>
                <h1 className="font-display text-2xl font-bold text-brand-navy sm:text-3xl">
                  Add Your Business to{" "}
                  <span className="bg-gradient-to-r from-brand-gold to-brand-gold-light bg-clip-text text-transparent">
                    Kosher Connect
                  </span>
                </h1>
                <p className="mt-3 font-accent text-sm leading-relaxed text-brand-navy/50 sm:text-base">
                  Get discovered by thousands of kosher consumers. Fill out the form below and our team will review your listing within 48 hours.
                </p>

                {error && (
                  <div className="mt-4 rounded-brand-sm border border-red-200 bg-red-50 px-4 py-3 font-ui text-sm text-red-600">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  {/* Business Info */}
                  <div className="space-y-4">
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand-navy/40">
                      Business Information
                    </h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label htmlFor="vb-name" className={labelClass}>
                          Business Name <span className="text-brand-burgundy">*</span>
                        </label>
                        <input
                          id="vb-name"
                          type="text"
                          name="name"
                          required
                          placeholder="Shalom Grill"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="vb-type" className={labelClass}>
                          Business Type <span className="text-brand-burgundy">*</span>
                        </label>
                        <select id="vb-type" name="type" required className={inputClass}>
                          <option value="">Select type...</option>
                          {LISTING_TYPES.map((t) => (
                            <option key={t.value} value={t.value}>
                              {t.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="vb-description" className={labelClass}>
                        Description <span className="font-normal text-brand-navy/40">(optional)</span>
                      </label>
                      <textarea
                        id="vb-description"
                        name="description"
                        rows={3}
                        placeholder="Tell us about your business..."
                        className={inputClass + " resize-y"}
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-4">
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand-navy/40">
                      Location
                    </h3>
                    <div>
                      <label htmlFor="vb-address" className={labelClass}>
                        Street Address <span className="font-normal text-brand-navy/40">(optional)</span>
                      </label>
                      <input id="vb-address" type="text" name="address" placeholder="123 Main St" className={inputClass} />
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3">
                      <div>
                        <label htmlFor="vb-city" className={labelClass}>
                          City <span className="text-brand-burgundy">*</span>
                        </label>
                        <input id="vb-city" type="text" name="city" required placeholder="Los Angeles" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="vb-state" className={labelClass}>
                          State <span className="text-brand-burgundy">*</span>
                        </label>
                        <input id="vb-state" type="text" name="state" required placeholder="CA" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="vb-postalCode" className={labelClass}>
                          Zip Code <span className="font-normal text-brand-navy/40">(optional)</span>
                        </label>
                        <input id="vb-postalCode" type="text" name="postalCode" placeholder="90035" className={inputClass} />
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="space-y-4">
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand-navy/40">
                      Contact
                    </h3>
                    <div className="grid gap-3 sm:grid-cols-3">
                      <div>
                        <label htmlFor="vb-phone" className={labelClass}>
                          Phone <span className="font-normal text-brand-navy/40">(optional)</span>
                        </label>
                        <input id="vb-phone" type="tel" name="phone" placeholder="(310) 555-1234" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="vb-email" className={labelClass}>
                          Email <span className="font-normal text-brand-navy/40">(optional)</span>
                        </label>
                        <input id="vb-email" type="email" name="email" placeholder="info@business.com" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="vb-website" className={labelClass}>
                          Website <span className="font-normal text-brand-navy/40">(optional)</span>
                        </label>
                        <input id="vb-website" type="url" name="website" placeholder="https://..." className={inputClass} />
                      </div>
                    </div>
                  </div>

                  {/* Kosher Details */}
                  <div className="space-y-4">
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand-navy/40">
                      Kosher Certification
                    </h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label htmlFor="vb-certifier" className={labelClass}>
                          Certifying Agency
                        </label>
                        <select id="vb-certifier" name="kosherCertifier" className={inputClass}>
                          {CERTIFIERS.map((c) => (
                            <option key={c.value} value={c.value}>
                              {c.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-wrap items-end gap-x-5 gap-y-3">
                        {[
                          ["kosherStatus", "Kosher"],
                          ["cholovYisroel", "Cholov Yisroel"],
                          ["pasYisroel", "Pas Yisroel"],
                          ["yoshon", "Yoshon"],
                          ["bishulYisroel", "Bishul Yisroel"],
                        ].map(([field, label]) => (
                          <label key={field} className="flex items-center gap-2 font-ui text-sm text-brand-navy">
                            <input
                              type="checkbox"
                              name={field}
                              className="h-4 w-4 rounded border-brand-sand text-brand-gold focus:ring-brand-gold/20"
                            />
                            {label}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <label htmlFor="vb-price" className={labelClass}>
                      Price Range <span className="font-normal text-brand-navy/40">(optional)</span>
                    </label>
                    <select id="vb-price" name="priceRange" className={inputClass + " sm:w-40"}>
                      <option value="">Not set</option>
                      <option value="$">$ — Budget</option>
                      <option value="$$">$$ — Moderate</option>
                      <option value="$$$">$$$ — Upscale</option>
                      <option value="$$$$">$$$$ — Fine Dining</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative w-full overflow-hidden rounded-pill bg-brand-burgundy py-4 font-ui text-base font-medium uppercase tracking-wider text-white shadow-button transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-burgundy-light hover:shadow-lg disabled:opacity-50 disabled:hover:translate-y-0"
                  >
                    <span className="relative inline-flex items-center gap-2">
                      {loading ? "Submitting..." : "Submit Your Business"}
                      {!loading && <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
                    </span>
                  </button>

                  <div className="flex items-center justify-center gap-4 pt-1">
                    <div className="flex items-center gap-1.5 font-ui text-[11px] text-brand-navy/35">
                      <Shield className="h-3.5 w-3.5" strokeWidth={1.5} />
                      <span>Reviewed within 48 hours</span>
                    </div>
                    <span className="h-3 w-px bg-brand-sand/60" />
                    <p className="font-ui text-[11px] text-brand-navy/35">Free to list</p>
                  </div>
                </form>
              </>
            ) : (
              <div className="py-10 text-center">
                <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-brand-gold-pale to-brand-gold-pale/40">
                  <CheckCircle2 className="h-10 w-10 text-brand-gold" strokeWidth={1.5} />
                </div>
                <h2 className="font-display text-2xl font-bold text-brand-navy sm:text-3xl">
                  Business Submitted!
                </h2>
                <p className="mt-4 font-accent text-base leading-relaxed text-brand-navy/50">
                  Thank you for joining Kosher Connect.
                  <br />
                  Our team will review your listing and get it live shortly.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-pill bg-brand-gold-pale/40 px-5 py-2.5">
                  <Sparkles className="h-4 w-4 text-brand-gold" />
                  <span className="font-ui text-sm font-semibold text-brand-navy">
                    Welcome to the community.
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
