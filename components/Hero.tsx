import Image from "next/image";

export function Hero() {
  return (
    <section
      className="w-full px-6 py-16 sm:py-24 lg:py-32"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-14">
        <div className="max-w-2xl">
          <p className="hero-fade-up text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)] sm:text-sm">
            100% Free · No Account · No Watermark
          </p>
          <h1
            id="hero-heading"
            className="hero-fade-up mt-5 text-6xl leading-[0.92] tracking-[0.03em] text-[var(--shell)] sm:text-7xl lg:text-[5.75rem]"
            data-display="true"
            style={{ animationDelay: "120ms" }}
          >
            Free Subtitle Generator. No Account. No Watermark.
          </h1>
          <p
            className="hero-fade-up mt-6 max-w-xl text-lg leading-8 text-[rgba(15,11,7,0.82)] sm:text-xl"
            style={{ animationDelay: "240ms" }}
          >
            FreeSubtitler turns your video into accurate subtitles on your Mac.
            Upload a video, generate captions with Whisper AI, then export an
            SRT file or a burned-in video. No signup, no limits, no upsell.
          </p>
          <p
            className="hero-fade-up mt-5 text-sm font-medium tracking-[0.04em] text-[rgba(15,11,7,0.58)]"
            style={{ animationDelay: "360ms" }}
          >
            Free forever · No registration · No video upload · Works offline
          </p>
          <div
            className="hero-fade-up mt-10 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center"
            style={{ animationDelay: "480ms" }}
          >
            <div className="flex flex-col items-start gap-3">
              <a
                href="https://github.com/ampo0809/free_subtitler_release/releases/download/v1.0.0/FreeSubtitler.zip"
                aria-label="Download FreeSubtitler for Mac"
                className="rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-[var(--shell)] shadow-[0_14px_40px_rgba(245,166,35,0.26)] transition hover:bg-[var(--accent-strong)]"
              >
                Download Free for Mac
              </a>
            </div>
            <button
              type="button"
              aria-label="Windows version coming soon"
              disabled
              className="rounded-full border border-[rgba(15,11,7,0.10)] bg-[rgba(15,11,7,0.06)] px-7 py-3.5 text-sm font-semibold text-[rgba(15,11,7,0.38)] opacity-100"
            >
              Windows — Coming Soon
            </button>
          </div>
        </div>

        <div
          className="hero-fade-up overflow-hidden rounded-[16px] border border-[rgba(15,11,7,0.08)] shadow-[0_30px_80px_rgba(15,11,7,0.22)]"
          style={{ animationDelay: "600ms" }}
        >
          <Image
            src="/hero-mockup.png"
            alt="FreeSubtitler app generating subtitles from video on Mac"
            width={1500}
            height={1200}
            sizes="(max-width: 1024px) 100vw, 46vw"
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
