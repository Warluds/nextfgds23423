import { useMemo, useState } from "react";

const PRICE = {
  pc: 6000,
  server: 25000,
  network: 4000,
  user1c: 3000,
};

const SLA = [
  { id: "std", label: "Стандарт", hint: "Пн–Пт, 9:00–19:00 · реакция до 4 ч", k: 1 },
  { id: "ext", label: "Расширенный", hint: "Пн–Сб, 8:00–22:00 · реакция до 2 ч", k: 1.35 },
  { id: "max", label: "24/7", hint: "Круглосуточно · реакция до 30 мин", k: 1.8 },
] as const;

function Row({
  label,
  hint,
  value,
  onChange,
  max,
}: {
  label: string;
  hint: string;
  value: number;
  onChange: (v: number) => void;
  max: number;
}) {
  return (
    <div className="flex flex-col gap-3 py-5">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <p className="text-sm font-medium">{label}</p>
          <p className="text-xs text-muted-foreground">{hint}</p>
        </div>
        <span className="font-display text-lg font-semibold tabular-nums text-brand">{value}</span>
      </div>
      <input
        type="range"
        min={0}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-border accent-[var(--brand-cyan)]"
      />
    </div>
  );
}

export function Calculator() {
  const [pc, setPc] = useState(20);
  const [server, setServer] = useState(2);
  const [network, setNetwork] = useState(3);
  const [user1c, setUser1c] = useState(5);
  const [sla, setSla] = useState<(typeof SLA)[number]["id"]>("ext");

  const { total, discount } = useMemo(() => {
    const base =
      pc * PRICE.pc + server * PRICE.server + network * PRICE.network + user1c * PRICE.user1c;
    const k = SLA.find((s) => s.id === sla)!.k;
    const units = pc + server * 4 + network;
    const disc = units >= 100 ? 0.15 : units >= 50 ? 0.1 : units >= 25 ? 0.05 : 0;
    return { total: Math.round((base * k * (1 - disc)) / 100) * 100, discount: disc };
  }, [pc, server, network, user1c, sla]);

  const fmt = new Intl.NumberFormat("ru-RU").format(total);
  const waText = encodeURIComponent(
    `Здравствуйте! Расчёт с сайта Nexit.kz: ПК ${pc}, серверов ${server}, сетевых устройств ${network}, пользователей 1С ${user1c}, SLA ${SLA.find((s) => s.id === sla)!.label}. Ориентир: ${fmt} ₸/мес.`,
  );

  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-5">
      <div className="bg-card p-8 md:p-10 lg:col-span-3">
        <div className="divide-y divide-border">
          <Row label="Рабочих станций (ПК/ноутбуков)" hint="обслуживание пользователей" value={pc} onChange={setPc} max={300} />
          <Row label="Серверов" hint="физические и виртуальные" value={server} onChange={setServer} max={40} />
          <Row label="Сетевого оборудования" hint="роутеры, коммутаторы, точки Wi-Fi" value={network} onChange={setNetwork} max={50} />
          <Row label="Пользователей 1С" hint="сопровождение и обновления" value={user1c} onChange={setUser1c} max={100} />
        </div>

        <div className="mt-8">
          <p className="mb-3 text-[10px] font-display font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Уровень сервиса (SLA)
          </p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {SLA.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSla(s.id)}
                className={`rounded-xl border p-4 text-left transition-colors ${
                  sla === s.id
                    ? "border-transparent bg-brand text-white"
                    : "border-border bg-background hover:bg-secondary"
                }`}
              >
                <span className="block text-sm font-medium">{s.label}</span>
                <span className={`mt-1 block text-[11px] ${sla === s.id ? "text-white/70" : "text-muted-foreground"}`}>
                  {s.hint}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex flex-col justify-between gap-8 overflow-hidden bg-[var(--brand-navy)] p-8 text-white md:p-10 lg:col-span-2">
        <div
          aria-hidden
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(circle at 80% 0%, rgba(0,245,255,0.22), transparent 55%), radial-gradient(circle at 10% 100%, rgba(0,245,255,0.12), transparent 60%)",
          }}
        />
        <div className="relative">
          <p className="text-[10px] font-display font-medium uppercase tracking-[0.2em] text-white/50">
            Предварительный расчёт
          </p>
          <p className="mt-6 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            {fmt} <span className="text-2xl text-[var(--brand-cyan)]">₸</span>
          </p>
          <p className="mt-2 text-sm text-white/60">в месяц, без НДС</p>
          {discount > 0 && (
            <span className="mt-4 inline-flex rounded-full bg-[var(--brand-cyan)]/15 px-3 py-1 text-xs font-medium text-[var(--brand-cyan)]">
              Скидка за объём −{Math.round(discount * 100)}%
            </span>
          )}
          <ul className="mt-8 space-y-2 text-sm text-white/70">
            <li>· Выделенный инженер и менеджер</li>
            <li>· Мониторинг и резервное копирование</li>
            <li>· Отчётность по инцидентам</li>
          </ul>
        </div>
        <div className="relative flex flex-col gap-2">
          <a
            href={`https://wa.me/77001767007?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[var(--brand-cyan)] px-5 py-3 text-center text-sm font-semibold text-[var(--brand-navy)] transition-opacity hover:opacity-90"
          >
            Получить точное КП в WhatsApp
          </a>
          <a
            href="https://t.me/nexitkz"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-5 py-3 text-center text-sm font-medium text-white ring-1 ring-white/20 transition-colors hover:bg-white/10"
          >
            Написать в Telegram
          </a>
          <p className="mt-1 text-[11px] leading-relaxed text-white/40">
            Расчёт ориентировочный. Точная стоимость — после аудита инфраструктуры.
          </p>
        </div>
      </div>
    </div>
  );
}
