import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  themeColor: "#4f6f19",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://madugaimilk.in"),
  title: {
    default: "Madugai - Farm Fresh Cow Milk | Pure Milk Delivery in Tamil Nadu",
    template: "%s | Madugai Milk",
  },
  description: "Madugai Agro Product delivers hygienically handled, farm-fresh cow milk directly from local farmers in eco-friendly glass bottles. No dilution, no preservatives, no industrial shortcuts. Fresh milk delivery in Chennai, Ranipet, Vellore, Walajapet & Arcot. சென்னை மற்றும் அருகிலுள்ள பகுதிகளில் பசுமை பண்ணை பால்.",
  keywords: [
    "Madugai", "Madugai Milk", "Madugai Agro Product",
    "fresh milk Chennai", "farm fresh milk", "glass bottle milk delivery",
    "organic milk Tamil Nadu", "local farmers milk", "cow milk",
    "fresh cow milk", "raw cow milk", "pure milk",
    "fresh milk Ranipet", "fresh milk Vellore", "fresh milk Walajapet", "fresh milk Arcot",
    "milk delivery Chennai", "daily milk delivery", "A2 milk",
    "பசும்பால்", "பண்ணை பால்", "சென்னை பால் டெலிவரி",
    "milk subscription", "organic dairy", "natural milk",
    "unadulterated milk", "preservative free milk", "farm to home milk"
  ],
  authors: [{ name: "Madugai Agro Product" }],
  creator: "Madugai Agro Product",
  publisher: "Madugai Agro Product",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://madugaimilk.in",
    languages: {
      "en-IN": "https://madugaimilk.in",
      "ta-IN": "https://madugaimilk.in",
    },
  },
  openGraph: {
    title: "Madugai - Farm Fresh Cow Milk | Pure Milk Delivery in Tamil Nadu",
    description: "Being Elite – Just the Way Nature Made It! Premium dairy delivering farm-fresh milk in eco-friendly glass bottles, directly to your doorstep. No dilution, no preservatives.",
    url: "https://madugaimilk.in",
    siteName: "Madugai Milk",
    images: [
      {
        url: "https://madugaimilk.in/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Madugai - Farm Fresh Cow Milk",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madugai - Farm Fresh Cow Milk | Pure Milk Delivery",
    description: "Fresh milk sourced from Tamil Nadu's farmers. Delivered hygienically in glass bottles. No dilution, no preservatives.",
    images: ["https://madugaimilk.in/images/og-image.png"],
    creator: "@madugai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Food & Beverage",
  other: {
    "facebook-domain-verification": "s0r1sn5t2mokhgsaahibnk5a4cpora",
  },
};

import SmoothScroll from "@/components/SmoothScroll";

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Madugai Agro Product",
  image: "https://madugaimilk.in/images/og-image.png",
  description: "Farm-fresh cow milk delivered in eco-friendly glass bottles. No dilution, no preservatives.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No.176A, Padasalai Street, Padiyampakkam",
    addressLocality: "Walajapet",
    addressRegion: "Tamil Nadu",
    postalCode: "632513",
    addressCountry: "IN",
  },
  telephone: "+91-8903535222",
  email: "support@madugaimilk.in",
  url: "https://madugaimilk.in",
  priceRange: "$$",
  openingHours: "Mo-Su 06:00-20:00",
  sameAs: [
    "https://facebook.com/Madugai",
    "https://instagram.com/madugai",
    "https://twitter.com/Madugai",
    "https://linkedin.com/company/madugai",
    "https://youtube.com/c/Madugai",
  ],
  areaServed: [
    "Chennai", "Ranipet", "Vellore", "Walajapet", "Arcot", "Tamil Nadu"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/icons/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${montserrat.variable} font-montserrat antialiased`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
