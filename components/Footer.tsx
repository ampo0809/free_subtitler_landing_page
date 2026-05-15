"use client";

import { useState } from "react";

export function Footer() {
  const [isCreditsOpen, setIsCreditsOpen] = useState(false);

  return (
    <>
      <footer className="px-6 pb-10 pt-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 border-t border-[rgba(15,11,7,0.10)] pt-8 text-sm text-[var(--shell)] sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xl">
            <p className="font-semibold">
              FreeSubtitler · Free AI Subtitle Generator
            </p>
            <p className="mt-3 text-sm text-[var(--muted)]">
              FreeSubtitler is a free, offline subtitle and caption generator
              powered by OpenAI Whisper. Available for macOS.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:items-end">
            <nav
              className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--muted)]"
              aria-label="Footer navigation"
            >
              {/* TODO: replace with real download URL */}
              <a
                className="transition hover:text-[var(--shell)]"
                href="#"
                aria-label="Go to FreeSubtitler download"
              >
                Download
              </a>
              {/* TODO: replace with real Google Form URL */}
              <a
                className="transition hover:text-[var(--shell)]"
                href="https://forms.gle/58JKsQwSYWHr9duD7"
                target="_blank"
                rel="noreferrer"
                aria-label="Send FreeSubtitler feedback"
              >
                Feedback
              </a>
              <button
                type="button"
                className="transition hover:text-[var(--shell)]"
                onClick={() => setIsCreditsOpen(true)}
                aria-haspopup="dialog"
                aria-expanded={isCreditsOpen}
                aria-controls="credits-dialog"
              >
                Credits
              </button>
              {/* TODO: replace with real privacy policy URL */}
              <a
                className="transition hover:text-[var(--shell)]"
                href="https://www.backlogbuild.com/privacy-policy"
                target="_blank"
                rel="noreferrer"
                aria-label="Read the FreeSubtitler privacy policy"
              >
                Privacy Policy
              </a>
            </nav>
            <p className="text-xs text-[var(--muted)]">
              © {new Date().getFullYear()} FreeSubtitler. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {isCreditsOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(15,11,7,0.45)] px-6"
          onClick={() => setIsCreditsOpen(false)}
        >
          <div
            id="credits-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="credits-title"
            className="w-full max-w-lg rounded-[28px] border border-[rgba(15,11,7,0.12)] bg-[#f8f1e3] p-6 shadow-[0_24px_80px_rgba(15,11,7,0.18)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p
                  id="credits-title"
                  className="text-lg font-semibold text-[var(--shell)]"
                >
                  Credits
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  FreeSubtitler builds on open-source work and the MLX model
                  ecosystem.
                </p>
              </div>
              <button
                type="button"
                className="rounded-full border border-[rgba(15,11,7,0.12)] px-3 py-1 text-sm text-[var(--muted)] transition hover:border-[rgba(15,11,7,0.22)] hover:text-[var(--shell)]"
                onClick={() => setIsCreditsOpen(false)}
                aria-label="Close credits"
              >
                Close
              </button>
            </div>

            <div className="mt-5 space-y-4 text-sm text-[var(--shell)]">
              <div className="rounded-2xl border border-[rgba(15,11,7,0.10)] bg-white/60 p-4">
                <p className="font-medium">lightning-whisper-mlx</p>
                <p className="mt-1 text-[var(--muted)]">
                  Whisper transcription backend by mustafaaljadery.
                </p>
                <a
                  className="mt-3 inline-block text-[var(--shell)] underline decoration-[rgba(15,11,7,0.25)] underline-offset-4 transition hover:decoration-[rgba(15,11,7,0.65)]"
                  href="https://github.com/mustafaaljadery/lightning-whisper-mlx#"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/mustafaaljadery/lightning-whisper-mlx
                </a>
              </div>

              <div className="rounded-2xl border border-[rgba(15,11,7,0.10)] bg-white/60 p-4">
                <p className="font-medium">mlx-community</p>
                <p className="mt-1 text-[var(--muted)]">
                  Hosted MLX model community and distribution hub on
                  Hugging Face.
                </p>
                <a
                  className="mt-3 inline-block text-[var(--shell)] underline decoration-[rgba(15,11,7,0.25)] underline-offset-4 transition hover:decoration-[rgba(15,11,7,0.65)]"
                  href="https://huggingface.co/mlx-community"
                  target="_blank"
                  rel="noreferrer"
                >
                  huggingface.co/mlx-community
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
