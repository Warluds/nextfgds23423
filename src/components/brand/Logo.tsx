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
      <span className="inline-flex items-center font-display font-bold tracking-[-0.04em] text-2xl">
        <span className={ink}>NE</span>
        <span className="relative inline-flex items-center">
          <span className={ink}>X</span>
          <svg
            viewBox="0 0 16 24"
            aria-hidden
            className="absolute -right-[0.28em] h-[1.05em] w-[0.6em] text-[var(--brand-cyan)]"
            fill="currentColor"
          >
            <path d="M2 0h7l7 12-7 12H2l7-12L2 0z" />
          </svg>
        </span>
        <span className="pl-[0.42em] text-[var(--brand-cyan)]">IT</span>
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
