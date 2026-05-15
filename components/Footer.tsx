export function Footer() {
  return (
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
              aria-label="Send FreeSubtitler feedback"
            >
              Feedback
            </a>
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
  );
}
