import { createFileRoute } from "@tanstack/react-router";

import { Logo, LogoMark } from "@/components/brand/Logo";
import { Calculator } from "@/components/Calculator";
import heroBg from "@/assets/bg-hero.jpg";
import serversBg from "@/assets/bg-servers.jpg";
import caseAbisImg from "@/assets/portfolio/abis.png";
import caseEgloImg from "@/assets/portfolio/eglo.png";
import caseImpulseImg from "@/assets/portfolio/impulse-media.png";
import caseAbisGroupImg from "@/assets/portfolio/abis-group.png";
import caseDeltaImg from "@/assets/portfolio/delta.png";
import caseMiracodeImg from "@/assets/portfolio/miracode.png";

const SITE_URL = "https://nexit.kz";
const WA = "https://wa.me/77001767007";
const TG = "https://t.me/nexitkz";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexit — ИТ-аутсорсинг, поддержка 24/7 и разработка в Казахстане" },
      {
        name: "description",
        content:
          "Nexit.kz — ИТ-аутсорсинг, техподдержка 24/7, серверы и виртуализация, облака, разработка сайтов и приложений. Онлайн-калькулятор стоимости обслуживания.",
      },
      { name: "keywords", content: "ИТ-аутсорсинг, IT аутсорсинг Казахстан, техподдержка 24/7, обслуживание серверов, виртуализация, облачные решения, разработка сайтов, разработка приложений, Nexit, Алматы, Астана, калькулятор ИТ-аутсорсинга" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "theme-color", content: "#031740" },
      { property: "og:title", content: "Nexit — ИТ-аутсорсинг, поддержка 24/7 и разработка в Казахстане" },
      {
        property: "og:description",
        content:
          "ИТ-аутсорсинг, поддержка 24/7, серверы, облака и разработка. Рассчитайте стоимость обслуживания онлайн.",
      },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ru_RU" },
      { property: "og:site_name", content: "Nexit" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nexit — ИТ-аутсорсинг и разработка в Казахстане" },
      {
        name: "twitter:description",
        content: "ИТ-аутсорсинг, поддержка 24/7, серверы, облака и разработка сайтов и приложений.",
      },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "alternate", hrefLang: "ru", href: `${SITE_URL}/` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: "Nexit",
              url: SITE_URL,
              slogan: "Инженерная точность ваших ИТ-систем",
              areaServed: "KZ",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+7-700-176-7007",
                contactType: "customer support",
                availableLanguage: ["Russian", "Kazakh", "English"],
              },
              sameAs: [WA, TG],
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: SITE_URL,
              name: "Nexit",
              inLanguage: "ru-RU",
              publisher: { "@id": `${SITE_URL}/#organization` },
            },
            {
              "@type": "ProfessionalService",
              name: "Nexit — ИТ-аутсорсинг",
              url: SITE_URL,
              areaServed: "KZ",
              serviceType: [
                "ИТ-аутсорсинг",
                "Техподдержка 24/7",
                "Администрирование серверов и сетей",
                "Облачные решения",
                "Разработка сайтов",
                "Разработка приложений",
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  { n: "01", title: "ИТ-аутсорсинг", desc: "Полное управление инфраструктурой — от рабочих мест сотрудников до серверных кластеров и SLA." },
  { n: "02", title: "Техподдержка 24/7", desc: "Круглосуточная линия помощи пользователям с гарантированным временем реакции." },
  { n: "03", title: "Администрирование серверов и сетей", desc: "Настройка, мониторинг и обслуживание серверов, сетевого оборудования и систем хранения." },
  { n: "04", title: "Облачные решения", desc: "Миграция в Google Workspace, Microsoft 365 и Yandex Cloud, гибридные среды и управление ресурсами." },
  { n: "05", title: "Разработка сайтов", desc: "Корпоративные сайты и порталы." },
  { n: "06", title: "Разработка приложений", desc: "Нативные и кроссплатформенные решения с интеграцией в вашу ИТ-экосистему." },
];

const steps = [
  { n: "01", title: "Аудит и стратегия", desc: "Инвентаризация парка техники, схема сети, карта рисков и план работ на 12 месяцев." },
  { n: "02", title: "Оптимизация", desc: "Обновление ПО, разграничение доступов, резервное копирование, наведение порядка в лицензиях." },
  { n: "03", title: "Миграция и запуск", desc: "Перенос почты, файлов и сервисов, установка мониторинга и системы заявок без остановки бизнеса." },
  { n: "04", title: "Сопровождение", desc: "Выделенный инженер, регулярные выезды, отчёты по инцидентам и ежеквартальный пересмотр SLA." },
];

const serverServices = [
  { title: "Серверы и виртуализация", desc: "Подбор, установка и настройка серверов, Proxmox / Hyper-V / VMware, кластеры и отказоустойчивость." },
  { title: "Резервное копирование", desc: "Схема 3-2-1, локальные и облачные копии, регулярные тесты восстановления данных." },
  { title: "Сети и Wi-Fi", desc: "Проектирование ЛВС, VLAN, VPN между офисами, корпоративный Wi-Fi и контроль доступа." },
  { title: "1С и почтовые сервисы", desc: "Терминальные серверы, сопровождение 1С, корпоративная почта и файловое хранилище." },
  { title: "Мониторинг", desc: "Zabbix / Grafana: нагрузка, диски, температура, доступность сервисов и оповещения инженерам." },
  { title: "Аренда серверов", desc: "Размещение в дата-центре или аренда мощностей с администрированием под ключ." },
];

const brands = ["HP", "Dell", "Lenovo", "Canon", "Acer", "ASUS", "Cisco", "MikroTik", "Ubiquiti", "Microsoft", "1С", "Kaspersky", "Synology", "APC"];

const projects = [
  { img: caseAbisImg, title: "abis.kz", tag: "ИТ-аутсорсинг · 1С · Серверы · Приложения · Сайт", desc: "Холдинг ABIS Group — освещение, краски и декоративные покрытия. 15 лет на рынке, 500+ партнёров." },
  { img: caseEgloImg, title: "eglo.kz", tag: "ИТ-аутсорсинг · 1С · Серверы · Приложения · Сайт", desc: "EGLO — международный бренд декоративного и технического освещения для дома и бизнеса." },
  { img: caseImpulseImg, title: "impulse-media.kz", tag: "Веб-разработка · Корпоративный сайт", desc: "Маркетинговое агентство в Алматы: Instagram-маркетинг, реклама, айдентика, видеопродакшн и сайты." },
  { img: caseAbisGroupImg, title: "abis.group", tag: "Веб-разработка · Корпоративный сайт", desc: "Сайт холдинга ABIS Group: SVET.KZ, Центр Красок №1 и ABIS Import — направления, кейсы и контакты." },
  { img: caseDeltaImg, title: "deltaminingcons.kz", tag: "Веб-разработка · Корпоративный сайт", desc: "DELTA Mining Consultancy — инженерно-горнодобывающий консалтинг: от геологоразведки до IPO." },
  { img: caseMiracodeImg, title: "miracode.kz", tag: "Веб-разработка · Корпоративный сайт", desc: "MIRA CODE — внедрение и разработка на 1С. Официальный партнёр 1С, резидент Astana Hub." },
];

const nav = [
  { href: "#services", label: "Услуги" },
  { href: "#process", label: "Метод" },
  { href: "#servers", label: "Серверы" },
  { href: "#calc", label: "Калькулятор" },
  { href: "#projects", label: "Кейсы" },
  { href: "#contact", label: "Контакты" },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.14h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.19 8.19 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.22-8.24 8.22zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.2 3.7.59.26 1.05.41 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M21.94 4.6l-3.02 14.25c-.23 1.01-.83 1.26-1.68.78l-4.64-3.42-2.24 2.16c-.25.25-.46.46-.94.46l.33-4.73 8.6-7.77c.37-.33-.08-.52-.58-.19L6.14 12.6 1.56 11.17c-1-.31-1.02-1 .21-1.48L20.65 3.1c.83-.31 1.55.19 1.29 1.5z" />
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-10">
            <a href="/" aria-label="Nexit — на главную">
              <Logo variant="wordmark" className="text-[19px]" />
            </a>
            <div className="hidden items-center gap-6 lg:flex">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand">
                  {n.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a href={TG} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand">
              <TelegramIcon className="size-4" />
            </a>
            <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand">
              <WhatsAppIcon className="size-4" />
            </a>
            <a href="#calc" className="rounded-lg bg-[var(--brand-navy)] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90">
              Рассчитать
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--brand-navy)] text-white">
        <img src={heroBg} alt="" aria-hidden width={1920} height={1080} className="absolute inset-0 size-full object-cover opacity-70" />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 15% 20%, rgba(0,245,255,0.18), transparent 45%), radial-gradient(circle at 90% 80%, rgba(0,245,255,0.12), transparent 50%), linear-gradient(to bottom, rgba(3,23,64,0.85), rgba(3,23,64,0.95))",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="flex flex-col justify-between gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12 lg:col-span-7">
              <div className="flex flex-col gap-7">
                <span className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--brand-cyan)] md:text-sm">
                  Nexit.kz — IT Outsourcing &amp; Engineering
                </span>
                <h1 className="max-w-[18ch] text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                  Инженерная точность <span className="text-[var(--brand-cyan)]">ваших</span> ИТ-систем.
                </h1>
                <p className="max-w-[52ch] text-balance text-lg leading-relaxed text-white/70">
                  Мы проектируем, поддерживаем и развиваем ИТ-ландшафты для компаний, которым важна отказоустойчивость.
                  Не просто аутсорсинг — технологическое преимущество.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="#calc" className="rounded-xl bg-[var(--brand-cyan)] px-6 py-3.5 text-sm font-semibold text-[var(--brand-navy)] transition-opacity hover:opacity-90">
                  Рассчитать стоимость
                </a>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium text-white ring-1 ring-white/25 transition-colors hover:bg-white/10">
                  <WhatsAppIcon className="size-4" /> WhatsApp
                </a>
                <a href={TG} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium text-white ring-1 ring-white/25 transition-colors hover:bg-white/10">
                  <TelegramIcon className="size-4" /> Telegram
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 lg:col-span-5">
              <div className="col-span-2 flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-[#02102e]/80 p-6 backdrop-blur-sm md:p-8">
                <div className="flex items-center gap-3">
                  <LogoMark tone="light" className="size-8" />
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">Экспертиза</span>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold tracking-tight md:text-3xl">Полный цикл</p>
                  <p className="mt-1 text-sm text-white/60">от аудита инфраструктуры до 24/7 поддержки</p>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex size-10 items-center justify-center rounded-xl bg-[var(--brand-cyan)]/15">
                  <svg className="size-5 text-[var(--brand-cyan)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-lg font-bold">24/7</p>
                  <p className="text-xs text-white/60">Мониторинг и поддержка</p>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex size-10 items-center justify-center rounded-xl bg-[var(--brand-cyan)]/15">
                  <svg className="size-5 text-[var(--brand-cyan)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="6" rx="2" />
                    <rect x="3" y="14" width="18" height="6" rx="2" />
                    <path d="M7 7h.01M7 17h.01" />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-lg font-bold">Серверы</p>
                  <p className="text-xs text-white/60">Виртуализация · Бэкапы</p>
                </div>
              </div>

              <a href="#calc" className="col-span-2 flex items-center justify-between gap-4 rounded-3xl bg-[var(--brand-cyan)] p-6 text-[var(--brand-navy)] transition-transform hover:-translate-y-0.5 md:p-8">
                <div>
                  <p className="font-display text-lg font-bold tracking-tight">Калькулятор ИТ-обслуживания</p>
                  <p className="mt-1 text-sm text-[var(--brand-navy)]/70">Узнайте стоимость за 30 секунд.</p>
                </div>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-navy)]/10">
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative overflow-hidden bg-background py-24 md:py-32">
        <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-60" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-14 flex items-end justify-between gap-6 border-b border-border pb-8">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand">01 — Services</span>
              <h2 className="max-w-[16ch] text-balance font-display text-3xl font-bold tracking-tight md:text-5xl">
                Спектр компетенций
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
            {services.map((s) => (
              <div key={s.n} className="group relative flex flex-col gap-6 bg-card p-8 transition-colors hover:bg-secondary/60 md:p-10">
                <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 scale-x-0 bg-[var(--brand-cyan)] transition-transform duration-300 group-hover:scale-x-100" />
                <div className="flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-[var(--brand-navy)] text-[var(--brand-cyan)]">
                    <span className="font-display text-xs font-bold tabular-nums">{s.n}</span>
                  </div>
                  <span className="text-xl text-muted-foreground transition-colors group-hover:text-brand">→</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-lg font-semibold tracking-tight">{s.title}</h3>
                  <p className="text-balance text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-y border-border bg-card py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="flex flex-col gap-8">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand">02 — Method</span>
              <h2 className="text-balance font-display text-3xl font-bold tracking-tight md:text-5xl">Как мы работаем</h2>
              <p className="max-w-[48ch] text-balance leading-relaxed text-muted-foreground">
                Подход основан на методологии ITSM и прозрачном SLA: сначала аудит и документация,
                затем оптимизация и только потом — постоянное сопровождение.
              </p>
              <div className="mt-2 overflow-hidden rounded-3xl border border-border">
                <img src={serversBg} alt="Серверная инфраструктура Nexit" loading="lazy" width={1600} height={1000} className="h-64 w-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col divide-y divide-border">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-6 py-8 first:pt-0">
                  <span className="mt-0.5 shrink-0 font-display text-sm font-bold tabular-nums text-brand">{s.n}.</span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-lg font-semibold tracking-tight">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Servers */}
      <section id="servers" className="relative overflow-hidden bg-[var(--brand-navy)] py-24 text-white md:py-32">
        <img src={serversBg} alt="" aria-hidden loading="lazy" width={1600} height={1000} className="absolute inset-0 size-full object-cover opacity-25" />
        <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(3,23,64,0.92), rgba(3,23,64,0.97))" }} />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-col gap-4 border-b border-white/10 pb-8">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand-cyan)]">03 — Infrastructure</span>
            <h2 className="max-w-[20ch] text-balance font-display text-3xl font-bold tracking-tight md:text-5xl">
              Серверы, сети и хранение данных
            </h2>
            <p className="max-w-[60ch] leading-relaxed text-white/60">
              Проектируем и обслуживаем серверную инфраструктуру: от одного сервера в офисе
              до кластера с виртуализацией, бэкапами и мониторингом 24/7.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serverServices.map((s) => (
              <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-colors hover:border-[var(--brand-cyan)]/50">
                <h3 className="font-display text-base font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calc" className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-col gap-4 border-b border-border pb-8">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand">04 — Calculator</span>
            <h2 className="max-w-[22ch] text-balance font-display text-3xl font-bold tracking-tight md:text-5xl">
              Калькулятор ИТ-обслуживания
            </h2>
            <p className="max-w-[56ch] leading-relaxed text-muted-foreground">
              Укажите количество техники и нужный уровень сервиса — получите ориентировочную
              стоимость ежемесячного обслуживания.
            </p>
          </div>
          <Calculator />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-border bg-card py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col gap-4 border-b border-border pb-8">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand">05 — Portfolio</span>
            <h2 className="max-w-[16ch] text-balance font-display text-3xl font-bold tracking-tight md:text-5xl">
              Реализованные проекты
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <article key={p.title} className="group flex flex-col gap-5">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-background ring-1 ring-border">
                  <img src={p.img} alt={p.title} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-lg font-semibold tracking-tight">{p.title}</h3>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-brand">{p.tag}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="border-y border-border bg-background py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-8 text-center text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Работаем с оборудованием и ПО
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {brands.map((b) => (
              <span key={b} className="font-display text-xl font-bold tracking-tight text-muted-foreground/60 transition-colors hover:text-[var(--brand-navy)] md:text-2xl">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-card py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative flex flex-col items-center gap-8 overflow-hidden rounded-3xl bg-[var(--brand-navy)] p-12 text-center text-white md:p-24">
            <img src={heroBg} alt="" aria-hidden loading="lazy" width={1920} height={1080} className="absolute inset-0 size-full object-cover opacity-50" />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(0,245,255,0.28), transparent 50%), radial-gradient(circle at 80% 90%, rgba(0,245,255,0.18), transparent 55%)",
              }}
            />
            <div className="relative flex flex-col items-center gap-8">
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--brand-cyan)]">Начнём разговор</span>
              <h2 className="max-w-[20ch] text-balance font-display text-3xl font-bold tracking-tight md:text-6xl">
                Готовы оптимизировать вашу ИТ-инфраструктуру?
              </h2>
              <p className="max-w-[44ch] text-balance leading-relaxed text-white/60">
                Закажите бесплатный аудит и получите детальный план развития инфраструктуры на 12 месяцев.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand-cyan)] px-7 py-3.5 text-sm font-semibold text-[var(--brand-navy)] transition-opacity hover:opacity-90">
                  <WhatsAppIcon className="size-4" /> WhatsApp
                </a>
                <a href={TG} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-medium text-white ring-1 ring-white/25 transition-colors hover:bg-white/10">
                  <TelegramIcon className="size-4" /> Telegram
                </a>
                <a href="mailto:hello@nexit.kz" className="rounded-xl px-7 py-3.5 text-sm font-medium text-white ring-1 ring-white/25 transition-colors hover:bg-white/10">
                  hello@nexit.kz
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
            <div className="flex max-w-sm flex-col gap-4">
              <Logo variant="full" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                Технологический партнёр для бизнеса в Казахстане. ИТ-аутсорсинг, поддержка, серверы и разработка.
              </p>
              <div className="flex gap-2">
                <a href={TG} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand">
                  <TelegramIcon className="size-4" />
                </a>
                <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand">
                  <WhatsAppIcon className="size-4" />
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-14">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">Навигация</span>
                {nav.map((n) => (
                  <a key={n.href} href={n.href} className="text-sm text-muted-foreground transition-colors hover:text-brand">
                    {n.label}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">Контакты</span>
                <a href="mailto:hello@nexit.kz" className="text-sm font-medium transition-colors hover:text-brand">hello@nexit.kz</a>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="text-sm font-medium transition-colors hover:text-brand">+7 700 176 7007</a>
                <a href={TG} target="_blank" rel="noopener noreferrer" className="text-sm font-medium transition-colors hover:text-brand">Telegram</a>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">Офис</span>
                <span className="text-sm text-muted-foreground">Алматы, Казахстан</span>
                <span className="text-sm text-muted-foreground">Пн–Вс · 24/7 support</span>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col justify-between gap-3 border-t border-border pt-6 md:flex-row">
            <p className="text-xs text-muted-foreground">© 2026 Nexit IT Solutions. Все права защищены.</p>
            <p className="text-xs text-muted-foreground">Nexit.kz</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
