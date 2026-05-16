export function DownloadSection() {
  return (
    <section className="px-6 py-20 sm:py-24 lg:py-28" aria-label="Download and feedback">
      <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-2">
        <article className="rounded-[34px] border border-[var(--panel-border)] bg-[var(--panel)] p-8 text-[var(--text)] shadow-[0_24px_60px_rgba(15,11,7,0.18)] transition duration-200 hover:-translate-y-0.5 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)] sm:text-sm">
            Download
          </p>
          <h2
            className="mt-5 text-4xl leading-[0.95] sm:text-5xl"
            data-display="true"
          >
            Free Subtitle Generator
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            One-click install. FreeSubtitler runs entirely on your machine. No
            account, no signup, no upload, no watermark, no cost. Export SRT
            files or burned-in videos without an upgrade.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4">
            <a
              href="https://github.com/ampo0809/free_subtitler_release/releases/download/v1.0.0/FreeSubtitler.zip"
              aria-label="Download FreeSubtitler for Mac"
              className="rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-[var(--shell)] shadow-[0_14px_40px_rgba(245,166,35,0.24)] transition hover:bg-[var(--accent-strong)]"
            >
              Download Free for Mac
            </a>
            <p className="text-sm text-[var(--muted)]">
              macOS 14+ · Apple Silicon (M Chips)
            </p>
            <button
              type="button"
              aria-disabled="true"
              disabled
              className="cursor-not-allowed rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-7 py-3.5 text-sm font-semibold text-[rgba(242,237,230,0.42)]"
            >
              Windows — Coming Soon
            </button>
          </div>
        </article>

        <article className="rounded-[34px] border border-[var(--panel-border)] bg-[var(--panel)] p-8 text-[var(--text)] shadow-[0_24px_60px_rgba(15,11,7,0.18)] transition duration-200 hover:-translate-y-0.5 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)] sm:text-sm">
            Help Us Improve
          </p>
          <h2
            className="mt-5 text-4xl leading-[0.95] sm:text-5xl"
            data-display="true"
          >
            Found a Bug? Have a Suggestion?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            FreeSubtitler is actively developed. Your feedback directly shapes
            it.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4">
            <a
              href="https://forms.gle/58JKsQwSYWHr9duD7"
              target="_blank"
              aria-label="Send feedback or report a bug"
              className="rounded-full border border-[rgba(245,166,35,0.5)] bg-transparent px-7 py-3.5 text-sm font-semibold text-[var(--accent)] transition hover:border-[var(--accent)] hover:bg-[rgba(245,166,35,0.06)]"
            >
              Send Feedback / Report a Bug
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
