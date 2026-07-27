# Nexit.kz

Сайт ИТ-компании Nexit — ИТ-аутсорсинг, техподдержка 24/7, серверы, облака и разработка сайтов и приложений.

Стек: **TanStack Start (React 19) + Vite 7 + Tailwind CSS v4**, сборщик — Nitro.

---

## Запуск локально

```bash
npm install --legacy-peer-deps
npm run dev
```

Открыть [http://localhost:8080](http://localhost:8080).

---

## Сборка и деплой на хостинг

По умолчанию проект собирается под Cloudflare Workers (пресет Nitro `cloudflare_module`). Для деплоя на обычный хостинг (Netlify, Vercel, Beget, обычный VPS, статический хостинг) укажите нужный пресет через переменную окружения `NITRO_PRESET`.

### 1. Статический сайт (для любого хостинга, включая обычный shared/VPS)

```bash
npm install --legacy-peer-deps
NITRO_PRESET=static npm run build
```

Готовый статический сайт появится в папке:

```
.output/public/
```

Содержимое этой папки нужно загрузить в корень вашего хостинга (`public_html`, `www`, `htdocs` — в зависимости от провайдера).

> На Windows команда с переменной окружения выглядит так:
> ```powershell
> $env:NITRO_PRESET="static"; npm run build
> ```

### 2. Node.js хостинг

```bash
NITRO_PRESET=node-server npm run build
node .output/server/index.mjs
```

### 3. Netlify

```bash
NITRO_PRESET=netlify npm run build
```

Затем загрузите репозиторий на Netlify — он подхватит `.output/`.

### 4. Vercel

```bash
NITRO_PRESET=vercel npm run build
```

Полный список пресетов: <https://nitro.build/deploy>.

---

## SEO

Реализовано:

- Уникальные `<title>`, `description`, `keywords` для главной страницы.
- Open Graph и Twitter Card теги.
- `canonical` и `hreflang` (ru).
- JSON-LD (Organization, WebSite, ProfessionalService).
- `robots.txt` с директивой `Sitemap:`.
- `sitemap.xml` (динамический роут `/sitemap.xml`).
- Мета-тег `robots: index, follow, max-image-preview:large`.
- Отдельные правила для Googlebot, Bingbot, YandexBot, Twitterbot, facebookexternalhit.
- Semantic HTML, lazy-loading изображений, `lang="ru"`.

После деплоя на реальный домен (nexit.kz) добавьте сайт в:

- [Google Search Console](https://search.google.com/search-console) — отправьте `https://nexit.kz/sitemap.xml`.
- [Яндекс.Вебмастер](https://webmaster.yandex.ru) — отправьте sitemap.
- [Bing Webmaster Tools](https://www.bing.com/webmasters).

---

## Структура

```
src/
  routes/
    __root.tsx        — корневой layout, сайтовые meta
    index.tsx         — главная (Hero, услуги, портфолио, CTA)
    sitemap[.]xml.ts  — sitemap.xml
  assets/portfolio/   — скриншоты проектов
  styles.css          — Tailwind v4 + design tokens
public/
  robots.txt
  favicon.ico
```
