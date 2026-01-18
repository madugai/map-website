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
};

export const metadata: Metadata = {
  title: "Madugai - Cow Milk. Without Industrial Shortcuts.",
  description: "Madugai provides pure, unadulterated cow milk collected daily from local farms and delivered fresh in glass bottles. No dilution, no preservatives.",
  keywords: "madugai, fresh cow milk, fresh milk in chennai, pure milk, glass bottle milk",
  authors: [{ name: "Madugai" }],
  openGraph: {
    title: "Madugai - Cow Milk. Without Industrial Shortcuts.",
    description: "Madugai provides pure, unadulterated cow milk collected daily from local farms and delivered fresh in glass bottles.",
    url: "https://madugai.com",
    siteName: "madugai.com",
    images: [
      {
        url: "https://madugai.com/images/og-image.png",
      },
    ],
    locale: "en",
    type: "website",
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
