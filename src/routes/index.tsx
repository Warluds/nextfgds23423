import { createFileRoute } from "@tanstack/react-router";

import caseAbisImg from "@/assets/case-abis.jpg";
import caseEgloImg from "@/assets/case-eglo.jpg";
import caseImpulseImg from "@/assets/case-impulse.jpg";
import caseAbisGroupImg from "@/assets/case-abisgroup.jpg";
import caseDeltaImg from "@/assets/case-delta.jpg";
import caseMiracodeImg from "@/assets/case-miracode.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexit — Инженерная точность ваших ИТ-систем" },
      {
        name: "description",
        content:
          "Nexit.kz — ИТ-аутсорсинг, техподдержка 24/7, облака и разработка сайтов и приложений в Казахстане.",
      },
      { property: "og:title", content: "Nexit — Инженерная точность ваших ИТ-систем" },
      {
        property: "og:description",
        content:
          "ИТ-аутсорсинг, техподдержка 24/7, облака и разработка. Nexit.kz — технологический партнёр вашего бизнеса.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nexit — Инженерная точность ваших ИТ-систем" },
      {
        name: "twitter:description",
        content: "ИТ-аутсорсинг и разработка. Nexit.kz",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const services = [
  {
    n: "01",
    title: "ИТ-аутсорсинг",
    desc: "Полное управление инфраструктурой — от рабочих мест сотрудников до серверных кластеров и SLA.",
  },
  {
    n: "02",
    title: "Техподдержка 24/7",
    desc: "Круглосуточная линия помощи пользователям с гарантированным временем реакции от 15 минут.",
  },
  {
    n: "03",
    title: "Администрирование серверов и сетей",
    desc: "Настройка, мониторинг и обслуживание серверов, сетевого оборудования и систем хранения.",
  },
  {
    n: "04",
    title: "Облачные решения",
    desc: "Миграция в облака, гибридные среды и управление ресурсами AWS, Azure и Yandex Cloud.",
  },
  {
    n: "05",
    title: "Разработка сайтов",
    desc: "Корпоративные сайты, порталы",
  },
  {
    n: "06",
    title: "Разработка приложений",
    desc: "Нативные и кроссплатформенные решения с интеграцией в вашу ИТ-экосистему.",
  },
];

const steps = [
  { n: "01", title: "Аудит и стратегия", desc: "Анализируем текущую инфраструктуру и выявляем узкие места и риски." },
  { n: "02", title: "Оптимизация", desc: "Приводим системы к стандартам безопасности и производительности." },
  { n: "03", title: "Миграция и запуск", desc: "Бесшовный перенос данных и запуск сервисов без остановки бизнеса." },
  { n: "04", title: "Сопровождение 24/7", desc: "Непрерывный мониторинг и мгновенная реакция на любые изменения." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="/" className="flex items-baseline gap-1">
              <span className="text-xl font-display font-semibold tracking-tight">Nexit</span>
              <span className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase">.kz</span>
            </a>
            <div className="hidden md:flex items-center gap-7">
              <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
              <a href="#process" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Метод</a>
              <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Кейсы</a>
              <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-medium border border-emerald-100 uppercase tracking-wider">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Онлайн
            </span>
            <a
              href="#contact"
              className="text-sm font-medium px-4 py-2 bg-foreground text-background rounded-md hover:bg-foreground/90 transition-colors"
            >
              Обсудить проект
            </a>
          </div>
        </div>
      </nav>

      {/* Hero with bento grid */}
      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden className="absolute inset-0 tech-grid" />
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main headline block */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-10 bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
              <div className="flex flex-col gap-8">
                <span className="text-xs md:text-sm font-display font-medium tracking-[0.2em] text-brand uppercase">
                  Nexit.kz — IT Outsourcing & Engineering
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold leading-[1.05] tracking-tight text-balance max-w-[18ch]">
                  Инженерная точность <span className="text-brand">ваших</span> ИТ-систем.
                </h1>
                <p className="text-lg text-muted-foreground text-balance max-w-[52ch] leading-relaxed">
                  Мы проектируем, поддерживаем и развиваем ИТ-ландшафты для компаний, которым важна отказоустойчивость.
                  Не просто аутсорсинг — технологическое преимущество.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-foreground text-background text-sm font-medium rounded-md hover:bg-foreground/90 transition-colors"
                >
                  Обсудить проект
                </a>
                <a
                  href="#services"
                  className="px-6 py-3 bg-card text-foreground text-sm font-medium rounded-md ring-1 ring-border hover:bg-secondary transition-colors"
                >
                  Посмотреть услуги
                </a>
              </div>
            </div>

            {/* Bento tiles */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-6">
              <div className="col-span-2 bg-foreground text-background rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-6">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-background/10 flex items-center justify-center">
                    <svg className="size-5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <span className="text-xs font-display font-medium uppercase tracking-widest text-background/60">Экспертиза</span>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-display font-semibold tracking-tight">Полный цикл</p>
                  <p className="text-sm text-background/70 mt-1">от аудита инфраструктуры до 24/7 поддержки</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 flex flex-col justify-between gap-4">
                <div className="size-10 rounded-lg bg-secondary flex items-center justify-center">
                  <svg className="size-5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-display font-semibold">24/7</p>
                  <p className="text-xs text-muted-foreground">Мониторинг и поддержка</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 flex flex-col justify-between gap-4">
                <div className="size-10 rounded-lg bg-secondary flex items-center justify-center">
                  <svg className="size-5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-display font-semibold">Cloud</p>
                  <p className="text-xs text-muted-foreground">AWS · Azure · Yandex</p>
                </div>
              </div>

              <div className="col-span-2 bg-brand text-white rounded-2xl p-6 md:p-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-display font-semibold tracking-tight">Нужен аудит ИТ-инфраструктуры?</p>
                  <p className="text-sm text-white/80 mt-1">Бесплатная консультация и план на 12 месяцев.</p>
                </div>
                <a
                  href="#contact"
                  className="shrink-0 size-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-14">
            <div className="flex justify-between items-end border-b border-border pb-8 gap-6">
              <div className="flex flex-col gap-4">
                <span className="text-xs text-muted-foreground font-display font-medium uppercase tracking-widest">01 — Services</span>
                <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-balance max-w-[16ch]">
                  Спектр компетенций
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border overflow-hidden rounded-2xl">
              {services.map((s) => (
                <div
                  key={s.n}
                  className="bg-card p-8 md:p-10 flex flex-col gap-6 hover:bg-secondary/50 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <div className="size-10 bg-secondary rounded-lg flex items-center justify-center">
                      <span className="text-brand font-display font-medium text-xs tabular-nums">{s.n}</span>
                    </div>
                    <span className="text-muted-foreground group-hover:text-brand transition-colors text-xl">→</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-display font-medium tracking-tight">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed text-balance">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 md:py-32 border-y border-border bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="flex flex-col gap-8">
              <span className="text-xs text-muted-foreground font-display font-medium uppercase tracking-widest">02 — Method</span>
              <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-balance">
                Как мы работаем
              </h2>
              <p className="text-muted-foreground text-balance max-w-[48ch] leading-relaxed">
                Наш подход основан на методологии ITSM и строгом соблюдении SLA.
                Мы не решаем проблемы по мере их появления — мы их предотвращаем.
              </p>
            </div>
            <div className="flex flex-col divide-y divide-border">
              {steps.map((s) => (
                <div key={s.n} className="py-8 first:pt-0 flex gap-6">
                  <span className="text-sm font-display font-medium text-brand tabular-nums shrink-0 mt-0.5">{s.n}.</span>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-display font-medium tracking-tight">{s.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12 border-b border-border pb-8 gap-6">
            <div className="flex flex-col gap-4">
              <span className="text-xs text-muted-foreground font-display font-medium uppercase tracking-widest">03 — Portfolio</span>
              <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-balance max-w-[16ch]">
                Реализованные проекты
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: caseAbisImg,
                title: "abis",
                tag: "ИТ-аутсорсинг · 1С · Серверы · Приложения · Сайт",
                desc: "Полное ИТ-сопровождение: серверная инфраструктура, 1С, разработка приложений и корпоративного сайта.",
              },
              {
                img: caseEgloImg,
                title: "eglo.kz",
                tag: "ИТ-аутсорсинг · 1С · Серверы · Приложения · Сайт",
                desc: "Комплексная поддержка ритейла освещения: серверы, 1С, мобильные приложения и веб-платформа.",
              },
              {
                img: caseImpulseImg,
                title: "impulse-media.kz",
                tag: "Веб-разработка · Корпоративный сайт",
                desc: "Корпоративный сайт медиа-агентства с портфолио и системой заявок.",
              },
              {
                img: caseAbisGroupImg,
                title: "abis.group",
                tag: "Веб-разработка · Корпоративный сайт",
                desc: "Сайт-визитка холдинга: структура направлений, кейсы и точки контакта.",
              },
              {
                img: caseDeltaImg,
                title: "deltaminingcons.kz",
                tag: "Веб-разработка · Корпоративный сайт",
                desc: "Презентационный сайт для консалтинга в горнодобывающей отрасли.",
              },
              {
                img: caseMiracodeImg,
                title: "miracode.kz",
                tag: "Веб-разработка · Корпоративный сайт",
                desc: "Сайт студии разработки: услуги, портфолио и лид-форма.",
              },
            ].map((p) => (
              <article key={p.title} className="group flex flex-col gap-5">
                {p.img ? (
                  <div className="w-full aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-border bg-card">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-border bg-gradient-to-br from-secondary to-card flex items-center justify-center p-6 group-hover:from-secondary/80 group-hover:to-card transition-colors">
                    <span className="text-xl md:text-2xl font-display font-semibold text-foreground/80 text-center break-all">
                      {p.title}
                    </span>
                  </div>
                )}
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-lg font-display font-medium tracking-tight">{p.title}</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">{p.tag}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-foreground text-background rounded-3xl p-12 md:p-24 flex flex-col items-center text-center gap-8 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(2,132,199,0.5), transparent 50%), radial-gradient(circle at 80% 90%, rgba(2,132,199,0.25), transparent 55%)",
              }}
            />
            <div className="relative flex flex-col items-center gap-8">
              <span className="text-xs font-display font-medium tracking-[0.2em] text-background/50 uppercase">
                Начнём разговор
              </span>
              <h2 className="text-3xl md:text-6xl font-display font-semibold tracking-tight text-balance max-w-[20ch]">
                Готовы оптимизировать вашу ИТ-инфраструктуру?
              </h2>
              <p className="text-background/60 text-balance max-w-[44ch] leading-relaxed">
                Закажите бесплатный аудит и получите детальный план развития инфраструктуры на 12 месяцев.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <a
                  href="mailto:hello@nexit.kz"
                  className="px-7 py-3.5 bg-brand text-white text-sm font-medium rounded-md hover:bg-brand-ink transition-colors"
                >
                  Написать нам
                </a>
                <a
                  href="https://wa.me/77001767007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 bg-transparent text-background ring-1 ring-background/20 text-sm font-medium rounded-md hover:bg-background/10 transition-colors"
                >
                  +7 700 176 7007
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-14 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            <div className="flex flex-col gap-3 max-w-sm">
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-display font-semibold tracking-tight">Nexit</span>
                <span className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase">.kz</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Технологический партнёр для бизнеса в Казахстане. ИТ-аутсорсинг, поддержка и разработка.
              </p>
            </div>
            <div className="flex flex-wrap gap-14">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-display font-medium uppercase tracking-[0.2em] text-muted-foreground">Контакты</span>
                <a href="mailto:hello@nexit.kz" className="text-sm font-medium hover:text-brand transition-colors">
                  hello@nexit.kz
                </a>
                <a
                  href="https://wa.me/77001767007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:text-brand transition-colors"
                >
                  +7 700 176 7007
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-display font-medium uppercase tracking-[0.2em] text-muted-foreground">Офис</span>
                <span className="text-sm text-muted-foreground">Алматы, Казахстан</span>
                <span className="text-sm text-muted-foreground">Пн–Вс · 24/7 support</span>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3">
            <p className="text-xs text-muted-foreground">© 2026 Nexit IT Solutions. Все права защищены.</p>
            <p className="text-xs text-muted-foreground">Nexit.kz</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
