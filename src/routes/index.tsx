import { createFileRoute } from "@tanstack/react-router";

import caseInfraImg from "@/assets/case-infrastructure.jpg";
import caseFintechImg from "@/assets/case-fintech.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexit — Инженерная точность ваших ИТ-систем" },
      {
        name: "description",
        content:
          "Nexit.kz — ИТ-аутсорсинг, техподдержка 24/7, облака и разработка сайтов и мобильных приложений в Казахстане.",
      },
      { property: "og:title", content: "Nexit — Инженерная точность ваших ИТ-систем" },
      {
        property: "og:description",
        content:
          "ИТ-аутсорсинг, техподдержка 24/7, облака и разработка. Nexit.kz — технологический партнёр вашего бизнеса.",
      },
      { property: "og:url", content: "/" },
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
    title: "Разработка мобильных приложений",
    desc: "Нативные и кроссплатформенные решения для iOS и Android.",
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
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans antialiased">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-950/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="/" className="flex items-baseline gap-1">
              <span className="text-lg font-semibold tracking-tight">Nexit</span>
              <span className="text-[10px] text-neutral-400 font-medium tracking-widest uppercase">.kz</span>
            </a>
            <div className="hidden md:flex items-center gap-7">
              <a href="#services" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">Услуги</a>
              <a href="#process" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">Метод</a>
              <a href="#projects" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">Кейсы</a>
              <a href="#contact" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">Контакты</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-medium border border-emerald-100 uppercase tracking-wider">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Онлайн
            </span>
            <a
              href="#contact"
              className="text-sm font-medium px-4 py-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition-colors"
            >
              Обсудить проект
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 md:py-36 border-b border-neutral-950/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-8">
            <span className="text-xs md:text-sm font-medium tracking-[0.2em] text-brand uppercase">
              Nexit.kz — IT Outsourcing & Engineering
            </span>
            <h1 className="text-5xl md:text-8xl font-semibold leading-[1.02] tracking-tighter text-balance max-w-[18ch]">
              Инженерная точность <span className="font-display italic font-normal text-brand">ваших</span> ИТ-систем.
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 text-pretty max-w-[52ch] leading-relaxed">
              Мы проектируем, поддерживаем и развиваем ИТ-ландшафты для компаний, которым важна отказоустойчивость.
              Не просто аутсорсинг — технологическое преимущество.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-neutral-900 text-white text-sm font-medium rounded-md hover:bg-neutral-800 transition-colors"
              >
                Обсудить проект
              </a>
              <a
                href="#services"
                className="px-6 py-3 bg-white text-neutral-900 text-sm font-medium rounded-md ring-1 ring-neutral-200 hover:bg-neutral-100 transition-colors"
              >
                Посмотреть услуги
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-14">
            <div className="flex justify-between items-end border-b border-neutral-950/5 pb-8 gap-6">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-balance max-w-[16ch]">
                Спектр компетенций
              </h2>
              <span className="text-xs text-neutral-400 font-medium uppercase tracking-widest shrink-0">
                01 — Services
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-950/5 border border-neutral-950/5 overflow-hidden rounded-xl">
              {services.map((s) => (
                <div
                  key={s.n}
                  className="bg-white p-8 md:p-10 flex flex-col gap-6 hover:bg-neutral-50/50 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <div className="size-10 bg-neutral-50 rounded-md ring-1 ring-black/5 flex items-center justify-center">
                      <span className="text-brand font-medium text-xs tabular-nums">{s.n}</span>
                    </div>
                    <span className="text-neutral-300 group-hover:text-brand transition-colors text-xl">→</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium tracking-tight">{s.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed text-pretty">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 md:py-32 border-y border-neutral-950/5 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="flex flex-col gap-8">
              <span className="text-xs text-neutral-400 font-medium uppercase tracking-widest">02 — Method</span>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-balance">
                Как мы работаем
              </h2>
              <p className="text-neutral-500 text-pretty max-w-[48ch] leading-relaxed">
                Наш подход основан на методологии ITSM и строгом соблюдении SLA.
                Мы не решаем проблемы по мере их появления — мы их предотвращаем.
              </p>
            </div>
            <div className="flex flex-col divide-y divide-neutral-950/5">
              {steps.map((s) => (
                <div key={s.n} className="py-8 first:pt-0 flex gap-6">
                  <span className="text-sm font-medium text-brand tabular-nums shrink-0 mt-0.5">{s.n}.</span>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-medium tracking-tight">{s.title}</h4>
                    <p className="text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 md:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12 border-b border-neutral-950/5 pb-8 gap-6">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-balance max-w-[16ch]">
              Реализованные кейсы
            </h2>
            <span className="text-xs text-neutral-400 font-medium uppercase tracking-widest shrink-0">
              03 — Selected work
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                img: caseInfraImg,
                title: "Модернизация сети ритейл-компании",
                tag: "ИТ-аутсорсинг · Инфраструктура",
              },
              {
                img: caseFintechImg,
                title: "Мобильная система мониторинга платежей",
                tag: "Разработка приложений · Fintech",
              },
            ].map((p) => (
              <article key={p.title} className="group flex flex-col gap-5">
                <div className="w-full aspect-[16/10] overflow-hidden rounded-xl ring-1 ring-black/5 bg-white">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-lg font-medium tracking-tight">{p.title}</h4>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest">{p.tag}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="text-center mt-14 text-sm text-neutral-500">
            Полный список проектов появится здесь — <span className="text-neutral-900 font-medium">в работе</span>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-neutral-900 text-white rounded-3xl p-12 md:p-24 flex flex-col items-center text-center gap-8 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(2,132,199,0.6), transparent 50%), radial-gradient(circle at 80% 90%, rgba(2,132,199,0.35), transparent 55%)",
              }}
            />
            <div className="relative flex flex-col items-center gap-8">
              <span className="text-xs font-medium tracking-[0.2em] text-neutral-400 uppercase">
                Начнём разговор
              </span>
              <h2 className="text-3xl md:text-6xl font-semibold tracking-tighter text-balance max-w-[20ch]">
                Готовы оптимизировать вашу ИТ-инфраструктуру?
              </h2>
              <p className="text-neutral-400 text-pretty max-w-[44ch] leading-relaxed">
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
                  href="tel:+77000000000"
                  className="px-7 py-3.5 bg-transparent text-white ring-1 ring-neutral-700 text-sm font-medium rounded-md hover:bg-neutral-800 transition-colors"
                >
                  +7 700 000 00 00
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-14 border-t border-neutral-950/5 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            <div className="flex flex-col gap-3 max-w-sm">
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-semibold tracking-tight">Nexit</span>
                <span className="text-[10px] text-neutral-400 font-medium tracking-widest uppercase">.kz</span>
              </div>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Технологический партнёр для бизнеса в Казахстане. ИТ-аутсорсинг, поддержка и разработка.
              </p>
            </div>
            <div className="flex flex-wrap gap-14">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">Контакты</span>
                <a href="mailto:hello@nexit.kz" className="text-sm font-medium hover:text-brand transition-colors">
                  hello@nexit.kz
                </a>
                <a href="tel:+77000000000" className="text-sm font-medium hover:text-brand transition-colors">
                  +7 700 000 00 00
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">Офис</span>
                <span className="text-sm text-neutral-500">Алматы, Казахстан</span>
                <span className="text-sm text-neutral-500">Пн–Вс · 24/7 support</span>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-neutral-950/5 flex flex-col md:flex-row justify-between gap-3">
            <p className="text-xs text-neutral-500">© 2026 Nexit IT Solutions. Все права защищены.</p>
            <p className="text-xs text-neutral-400">Nexit.kz</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
