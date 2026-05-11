export function Hero() {
  return (
    <section
      className="w-full px-6 py-16 sm:py-24 lg:py-32"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-14">
        <div className="max-w-2xl">
          <p className="hero-fade-up text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)] sm:text-sm">
            100% Free · Mac App · No Account Needed
          </p>
          <h1
            id="hero-heading"
            className="hero-fade-up mt-5 text-6xl leading-[0.92] tracking-[0.03em] text-[var(--shell)] sm:text-7xl lg:text-[5.75rem]"
            data-display="true"
            style={{ animationDelay: "120ms" }}
          >
            Add Subtitles to Any Video. Free.
          </h1>
          <p
            className="hero-fade-up mt-6 max-w-xl text-lg leading-8 text-[rgba(15,11,7,0.82)] sm:text-xl"
            style={{ animationDelay: "240ms" }}
          >
            FreeSubtitler uses Whisper AI to generate accurate subtitles and
            captions directly on your Mac — no internet required, no
            subscription, no limits.
          </p>
          <p
            className="hero-fade-up mt-5 text-sm font-medium tracking-[0.04em] text-[rgba(15,11,7,0.58)]"
            style={{ animationDelay: "360ms" }}
          >
            Free subtitle generator · Free captions · AI-powered · Works
            offline
          </p>
          <div
            className="hero-fade-up mt-10 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center"
            style={{ animationDelay: "480ms" }}
          >
            <div className="flex flex-col items-start gap-3">
              <button
                type="button"
                aria-label="Download FreeSubtitler for Mac"
                className="rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-[var(--shell)] shadow-[0_14px_40px_rgba(245,166,35,0.26)] transition hover:bg-[var(--accent-strong)]"
              >
                Download Free for Mac
              </button>
              <p className="pl-1 text-sm text-[var(--muted)]">
                macOS only · Free forever
              </p>
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
          className="hero-fade-up relative min-h-[360px] overflow-hidden rounded-[42px] border border-[var(--panel-border)] bg-[var(--shell)] shadow-[0_30px_80px_rgba(15,11,7,0.22)]"
          style={{ animationDelay: "600ms" }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,166,35,0.20),transparent_34%),linear-gradient(180deg,rgba(30,22,16,0.96),rgba(15,11,7,1))]" />
          <div className="absolute inset-x-8 top-8 h-24 rounded-[28px] border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]" />
          <div className="absolute inset-x-10 bottom-10 top-24 rounded-[30px] border border-[rgba(255,255,255,0.05)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] shadow-[inset_0_0_80px_rgba(245,166,35,0.08)]" />
          <div className="absolute left-1/2 top-12 h-32 w-32 -translate-x-1/2 rounded-full bg-[rgba(245,166,35,0.12)] blur-3xl" />
        </div>
      </div>
    </section>
  );
}
