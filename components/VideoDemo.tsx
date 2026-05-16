"use client";

import Image from "next/image";

const chips = [
  "🔒 Fully Local — Nothing Uploaded",
  "🤫 Fully Private — We Collect NO Data",
  "⚡ Fast Results — Whisper AI Powered"
];

export function VideoDemo() {
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
            From Raw Footage to Subtitled Video
          </h2>
          <p className="mt-5 text-lg leading-8 text-[rgba(15,11,7,0.72)]">
            Watch FreeSubtitler turn video into polished captions with fully
            local processing on your machine. No uploads, no paid tokens, no subscription,
            no waiting on the cloud.
          </p>
        </div>

        <div className="mt-12 w-full">
          <div className="relative overflow-hidden rounded-[42px] border border-[var(--panel-border)] bg-[var(--shell)] shadow-[0_26px_80px_rgba(15,11,7,0.24)]">
            <div className="relative aspect-video">
              <Image
                src="/demo_gif.gif"
                alt="FreeSubtitler demo showing subtitle generation workflow"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 960px"
                className="scale-105 object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,11,7,0.04),rgba(15,11,7,0.2))]" />
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
