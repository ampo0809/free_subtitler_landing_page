import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const siteUrl = "https://example.com";
const title = "FreeSubtitler — Free AI Subtitle Generator for Mac";
const description =
  "Add subtitles to any video for free. FreeSubtitler uses Whisper AI to generate accurate captions locally on your Mac — no upload, no account, no cost.";

const displayFont = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400"
});

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"]
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "FreeSubtitler",
  operatingSystem: "macOS",
  applicationCategory: "MultimediaApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD"
  },
  description:
    "Free AI subtitle and caption generator for Mac. Powered by Whisper AI. Works offline, no account required.",
  keywords:
    "free subtitle generator, free captions, add subtitles to video, whisper AI subtitles"
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "free subtitle generator",
    "add subtitles to video",
    "free captions",
    "AI subtitles",
    "whisper subtitles",
    "offline subtitle generator",
    "mac subtitle app",
    "automatic captions",
    "free subtitle maker",
    "video captioning tool"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "FreeSubtitler"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
