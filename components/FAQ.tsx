export function FAQ() {
  const faqs = [
    {
      question: "Why is it free?",
      answer: (
        <>
          FreeSubtitler is part of{" "}
          <a
            className="underline decoration-[rgba(245,166,35,0.45)] underline-offset-4 transition hover:text-[var(--text)]"
            href="https://www.backlogbuild.com"
            target="_blank"
            rel="noreferrer"
          >
            BacklogBuild
          </a>
          &apos;s free public toolkit. No subscriptions, no hidden fees, no
          upsells, and no paywalled subtitle export features.
        </>
      )
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
            Frequently Asked Questions
          </h2>
          <div className="mt-8 grid gap-7">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="border-t border-[var(--panel-border)] pt-7 first:border-t-0 first:pt-0"
              >
                <h3 className="text-2xl leading-tight sm:text-3xl" data-display="true">
                  {faq.question}
                </h3>
                <p className="mt-3 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
