// Shared type definitions
// These mirror the Prisma schema for client-side use

export type ListingType =
  | "RESTAURANT"
  | "CAFE"
  | "BAKERY"
  | "BUTCHER"
  | "GROCERY"
  | "CATERER"
  | "FOOD_TRUCK"
  | "WHOLESALE"
  | "VENUE"
  | "PHOTOGRAPHER"
  | "DJ"
  | "DECORATOR"
  | "PLANNER"
  | "WORKSHOP"
  | "OTHER";

export type ListingStatus = "DRAFT" | "PENDING" | "ACTIVE" | "PAUSED" | "CLOSED";

export type SubscriptionPlan = "FREE" | "MONTHLY" | "YEARLY" | "FAMILY";

export type UserRole = "USER" | "ADMIN" | "SUPER_ADMIN";

export interface PricingPlan {
  name: string;
  price: number;
  period: "month" | "year";
  features: string[];
  isBestValue?: boolean;
  trialDays?: number;
  maxMembers?: number;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Monthly",
    price: 6.99,
    period: "month",
    trialDays: 7,
    features: [
      "Full kosher directory access",
      "Event discovery & RSVP",
      "Daily Nudges & Torah insights",
      "Kosher label scanner",
      "Community features",
    ],
  },
  {
    name: "Yearly",
    price: 59.99,
    period: "year",
    features: [
      "Everything in Monthly",
      "Save 28% vs monthly",
      "Priority event listings",
      "Early access to features",
    ],
  },
  {
    name: "Family",
    price: 89.99,
    period: "year",
    isBestValue: true,
    maxMembers: 4,
    features: [
      "Everything in Yearly",
      "Up to 4 family members",
      "Shared simcha planning",
      "Family calendar sync",
    ],
  },
];
