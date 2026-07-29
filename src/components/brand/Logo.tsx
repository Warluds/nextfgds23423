import { cn } from "@/lib/utils";

type Tone = "dark" | "light";

/** Фирменный знак — двойной шеврон «X» (cyan). */
export function LogoMark({ className, tone = "dark" }: { className?: string; tone?: Tone }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("size-8", className)}
      role="img"
      aria-label="Nexit"
      fill="none"
    >
      <path
        d="M4 4h13l14 20-14 20H4l14-20L4 4z"
        fill={tone === "dark" ? "var(--brand-navy)" : "#FFFFFF"}
      />
      <path d="M27 4h13l-14 20 14 20H27L13 24 27 4z" fill="var(--brand-cyan)" opacity="0.95" />
    </svg>
  );
}

/**
 * Вариант 1 — Wordmark: NEX (navy/white) + шеврон + IT (cyan).
 * Вариант 2 — Full: wordmark + подпись «ИТ-аутсорсинг и поддержка».
 */
export function Logo({
  variant = "wordmark",
  tone = "dark",
  className,
}: {
  variant?: "wordmark" | "full";
  tone?: Tone;
  className?: string;
}) {
  const ink = tone === "dark" ? "text-[var(--brand-navy)]" : "text-white";

  return (
    <span className={cn("inline-flex flex-col leading-none", className)}>
      <span className="inline-flex items-center gap-[0.08em] font-display text-2xl font-bold tracking-[-0.03em]">
        <span className={ink}>NEX</span>
        <svg
          viewBox="0 0 16 24"
          aria-hidden
          className="h-[0.85em] w-[0.55em] shrink-0 text-[var(--brand-cyan)]"
          fill="currentColor"
        >
          <path d="M1 0h7l7 12-7 12H1l7-12L1 0z" />
        </svg>
        <span className="text-[var(--brand-cyan)]">IT</span>
      </span>

      {variant === "full" && (
        <span
          className={cn(
            "mt-1 text-[8px] font-medium uppercase tracking-[0.22em]",
            tone === "dark" ? "text-muted-foreground" : "text-white/60",
          )}
        >
          ИТ-аутсорсинг и поддержка
        </span>
      )}
    </span>
  );
}
