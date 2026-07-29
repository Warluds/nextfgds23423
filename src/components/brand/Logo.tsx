import { cn } from "@/lib/utils";

import logoAsset from "@/assets/nexit-logo.png.asset.json";

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
 * Вариант 1 — Wordmark: логотип NEXIT.
 * Вариант 2 — Full: логотип + подпись «ИТ-аутсорсинг и поддержка».
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
  return (
    <span className={cn("inline-flex flex-col items-start leading-none", className)}>
      <img
        src={logoAsset.url}
        alt="Nexit"
        className={cn("h-7 w-auto select-none", tone === "light" && "brightness-0 invert")}
        loading="eager"
        decoding="async"
      />
      {variant === "full" && (
        <span
          className={cn(
            "mt-2 text-[8px] font-medium uppercase tracking-[0.22em]",
            tone === "dark" ? "text-muted-foreground" : "text-white/60",
          )}
        >
          ИТ-аутсорсинг и поддержка
        </span>
      )}
    </span>
  );
}
