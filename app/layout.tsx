import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://freesubtitler.com";
const googleAnalyticsId = "G-ZPMB2CY206";
const title = "Free Subtitle Generator: No Account, No Watermark";
const description =
  "Generate subtitles for free with FreeSubtitler. No account, no signup, no watermark, no upsell. Export an SRT file or burned-in video.";

const displayFont = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400"
});

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"]
});

const faqItems = [
  {
    question: "Why is FreeSubtitler free?",
    answer:
      "FreeSubtitler is part of BacklogBuild's free public toolkit. There are no subscriptions, hidden fees, upsells, or paywalled subtitle export features."
  },
  {
    question: "Is FreeSubtitler really free with no account or signup?",
    answer:
      "Yes. FreeSubtitler is completely free and works without an account, signup, login, or registration. There are no subscriptions, hidden fees, upsells, or paywalled subtitle export features."
  },
  {
    question: "Does FreeSubtitler add a watermark?",
    answer:
      "No. FreeSubtitler does not add a watermark to exported videos. You can generate subtitles and export an SRT file or a burned-in video without upgrading to a paid plan."
  },
  {
    question: "What can I export with FreeSubtitler?",
    answer:
      "FreeSubtitler lets you generate subtitles from video and export either an SRT subtitle file or a video with subtitles burned in. Subtitle generation runs locally on your Mac, so your video does not need to be uploaded."
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["SoftwareApplication", "WebApplication"],
      name: "FreeSubtitler",
      url: siteUrl,
      image: `${siteUrl}/og-image.png`,
      operatingSystem: "macOS",
      applicationCategory: "MultimediaApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      description:
        "FreeSubtitler is a free subtitle generator that turns video into accurate subtitles using Whisper AI. It works without an account, adds no watermark, and exports SRT files or burned-in videos.",
      keywords:
        "free subtitle generator, add subtitles to video free, free SRT generator, subtitle generator no watermark, no account subtitle generator, free subtitle tool no registration",
      featureList: [
        "No account required",
        "No signup",
        "No watermark",
        "No upsell",
        "Export SRT subtitle files",
        "Export burned-in video",
        "Runs locally on Mac"
      ]
    },
    {
      "@type": "HowTo",
      name: "How to generate subtitles with FreeSubtitler",
      step: [
        {
          "@type": "HowToStep",
          name: "Upload video",
          text: "Open FreeSubtitler and choose your video file."
        },
        {
          "@type": "HowToStep",
          name: "Generate subtitles",
          text: "FreeSubtitler uses Whisper AI to generate subtitles locally on your Mac."
        },
        {
          "@type": "HowToStep",
          name: "Export",
          text: "Export an SRT subtitle file or a video with subtitles burned in."
        }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      }))
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Free Subtitle Generator",
          item: siteUrl
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  },
  keywords: [
    "free subtitle generator",
    "add subtitles to video free",
    "free SRT generator",
    "generate subtitles no watermark",
    "subtitle video no account",
    "no account subtitle generator",
    "subtitle generator no watermark",
    "free SRT file generator no signup",
    "burn subtitles into video free",
    "free subtitle tool no registration",
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
    siteName: "FreeSubtitler",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FreeSubtitler local video subtitling app interface"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"]
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
        <Script
          id="google-analytics-loader"
          strategy="afterInteractive"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
