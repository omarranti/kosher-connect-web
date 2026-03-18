export const siteConfig = {
  name: "Kosher Connect",
  tagline: "Your Jewish Community Hub",
  description:
    "Discover kosher restaurants, plan simchas, find community events, and connect with your Jewish neighborhood.",
  url: "https://kosherconnect.app",
  ogImage: "/images/brand/og-image.png",

  // App store links (update when live)
  appStore: "https://apps.apple.com/app/kosher-connect",
  playStore: "https://play.google.com/store/apps/details?id=app.kosherconnect",

  // Social links
  social: {
    instagram: "https://instagram.com/kosherconnect",
    tiktok: "https://tiktok.com/@kosherconnect",
    facebook: "https://facebook.com/kosherconnect",
  },

  // Support
  supportEmail: "support@kosherconnect.app",

  // Cities served
  cities: ["Los Angeles", "New York City", "Miami"],
} as const;
