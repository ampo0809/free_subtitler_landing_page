"use client";

import Image from "next/image";
import { useState } from "react";

const videoId = "QSKXvauVjeU";
const videoTitle = "FreeSubtitler demo video";
const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

const chips = [
  "🔒 Fully Local — Nothing Uploaded",
  "🤫 Fully Private — We Collect NO Data",
  "⚡ Fast Results — Whisper AI Powered"
];

export function VideoDemo() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section
      className="px-6 py-20 sm:py-24 lg:py-28"
      aria-labelledby="video-demo-heading"
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col items-center">
        <div className="max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)] sm:text-sm">
            See It In Action
          </p>
          <h2
            id="video-demo-heading"
            className="mt-5 text-5xl leading-[0.95] text-[var(--shell)] sm:text-6xl lg:text-[4.75rem]"
            data-display="true"
          >
            From Raw Footage to Subtitled Video in Seconds
          </h2>
          <p className="mt-5 text-lg leading-8 text-[rgba(15,11,7,0.72)]">
            Watch FreeSubtitler turn video into polished captions with fully
            local processing on your Desktop. No uploads, no paid tokens, no subscription,
            no waiting on the cloud.
          </p>
        </div>

        <div className="mt-12 w-full">
          <div className="group relative overflow-hidden rounded-[42px] border border-[var(--panel-border)] bg-[var(--shell)] shadow-[0_26px_80px_rgba(15,11,7,0.24)] transition duration-300 hover:shadow-[0_34px_90px_rgba(245,166,35,0.18)]">
            <div className="relative aspect-video">
              {isLoaded ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={embedUrl}
                  title={videoTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  aria-label="Play FreeSubtitler demo video"
                  onClick={() => setIsLoaded(true)}
                  className="absolute inset-0 h-full w-full cursor-pointer overflow-hidden text-left"
                >
                  <Image
                    src={thumbnailUrl}
                    alt="Preview thumbnail for the FreeSubtitler demo video"
                    fill
                    sizes="(max-width: 1024px) 100vw, 960px"
                    className="object-cover opacity-90 transition duration-500 group-hover:scale-[1.015] group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,11,7,0.06),rgba(15,11,7,0.48))]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.14),transparent_30%)]" />
                  <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(245,166,35,0.92)] text-[var(--shell)] shadow-[0_18px_36px_rgba(15,11,7,0.38)] transition duration-300 group-hover:scale-105 group-hover:bg-[var(--accent-strong)]">
                    <span className="ml-1 text-2xl">▶</span>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-3">
          {chips.map((chip) => (
            <p
              key={chip}
              className="rounded-full border border-[rgba(245,166,35,0.42)] bg-[var(--shell)] px-4 py-2 text-sm font-medium text-[var(--text)] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            >
              {chip}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
