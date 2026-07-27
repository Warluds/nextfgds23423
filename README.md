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

## Сборка и деплой на обычный хостинг

Важное уточнение: папка `public/` в исходниках — это **не готовый сайт**, там лежат только статические файлы вроде `robots.txt` и favicon. Готовый сайт появляется **после сборки**.

### Готовый статический сайт (для обычного shared-хостинга)

```bash
npm install --legacy-peer-deps
npm run build:static
```

После этого готовый сайт лежит в папке:

```
dist/
```

Внутри — `index.html` с уже отрендеренным содержимым (SEO-friendly), `assets/` с картинками, CSS и JS, `robots.txt`, `sitemap.xml` и favicon. Загрузите **содержимое** папки `dist/` в корень хостинга (`public_html`, `www`, `htdocs`).

Проверка локально:

```bash
npx serve dist
```

> `npm run build` (без `:static`) — сборка под Cloudflare Workers, используется внутри Lovable. Для обычного хостинга запускайте `npm run build:static`.


---

## Альтернативные варианты сборки

Если нужен не статический хостинг, можно указать другой Nitro preset вручную.

### Node.js хостинг

```bash
NITRO_PRESET=node-server npm run build
node .output/server/index.mjs
```

### Netlify

```bash
NITRO_PRESET=netlify npm run build
```

Затем загрузите репозиторий на Netlify — он подхватит `.output/`.

### Vercel

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
  sitemap.xml
  favicon.ico
```
