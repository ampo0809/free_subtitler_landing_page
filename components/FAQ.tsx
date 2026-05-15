export function FAQ() {
  return (
    <section className="px-6 pb-20 sm:pb-24" aria-labelledby="faq-heading">
      <div className="mx-auto w-full max-w-6xl">
        <div className="rounded-[34px] border border-[var(--panel-border)] bg-[var(--panel)] p-8 text-[var(--text)] shadow-[0_24px_60px_rgba(15,11,7,0.18)] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)] sm:text-sm">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="mt-5 text-4xl leading-[0.95] sm:text-5xl"
            data-display="true"
          >
            Why is it free?
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            Free Subtitler is part of{" "}
            <a
              className="underline decoration-[rgba(245,166,35,0.45)] underline-offset-4 transition hover:text-[var(--text)]"
              href="https://www.backlogbuild.com"
              target="_blank"
              rel="noreferrer"
            >
              BacklogBuild
            </a>
            &apos;s free public toolkit. No subscriptions, no hidden fees -
            just a tool we built and decided to make available to everyone.
          </p>
        </div>
      </div>
    </section>
  );
}
