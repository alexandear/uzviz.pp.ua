# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Fan site for "Гори Вище" — an amateur cycling hill-climb sprint up Смородинський узвіз in Kyiv. A static, bilingual (Ukrainian/English), single-page site with **no build step and no external dependencies**. Deployed via Cloudflare Pages by pushing to the repo.

## Run locally

```sh
python3 -m http.server 8003 --directory .
```

Then open http://localhost:8003. There is no build, lint, or test setup — edit files and refresh.

## Architecture

The whole app is three files: `index.html`, `css/style.css`, `js/main.js`.

- **`js/main.js` (~640 lines) is the entire app.** It is a hand-rolled render-on-state-change SPA with no framework:
  - All copy lives in the `content` object, keyed by `ua` / `en`. Both language variants of every string live side by side — when you add or change any text, update **both** `ua` and `en`.
  - Structured content (facts, gallery, FAQ, schedule, results, voices) lives in arrays like `GALLERY_IMAGES`, `factsRaw`, `faqRaw` and is `.map()`-ed into an HTML template string.
  - `render()` builds one big template literal and replaces `#app`'s innerHTML wholesale. It runs on every state change, on a 30s interval (for the countdown timers), and once at startup.
  - `state` holds `lang`, `menuOpen`, `faqOpen`, `photo` (lightbox index, `-1` = closed). Language is persisted in `localStorage` under `lang` and defaults from `navigator.language`.
  - Events use delegation on `document` (`[data-action]` clicks + keydown), not per-element listeners — because `render()` throws away all DOM nodes each time.
  - Any user-supplied or dynamic text must go through `escapeHtml` / `escapeHtmlMultiline` since everything is string-concatenated HTML. Note some `content` strings intentionally contain trusted inline HTML (e.g. `storyBody`) and are injected raw.
  - Countdown dates (`RACE_DATE`, `REG_DATE`) and external links (`REGISTER_URL`, `RULES_URL`, photo galleries) are constants at the top of the file — update these per event edition.

- **Strava route embed** (`mountRouteMap`): because `render()` recreates `#hv-route-map` on every render, the third-party `strava-embeds.com` script (which only scans placeholders once on load) must be re-bootstrapped manually via `window.__STRAVA_EMBED_BOOTSTRAP__?.()`. See the comment there before touching it.

## Images

Every photo is stored in two formats and two sizes; the site prefers WebP and uses thumbnails in the gallery (see `picture()`, `webpOf()`, `thumbOf()`):

- `assets/NAME.jpg` + `assets/NAME.webp` — full size
- `assets/thumbs/NAME.jpg` + `assets/thumbs/NAME.webp` — thumbnail

When adding a photo to `GALLERY_IMAGES`, generate all four files. Filenames map by convention (`webpOf` swaps the extension, `thumbOf` inserts the `thumbs/` path), so keep names consistent across all four.

Favicons/OG assets live in `assets/` (`favicon.ico`, `apple-touch-icon.png`, `icon-192x192.png`, `icon-512x512.png`, `icon.svg`, `og-image.jpg`, `site.webmanifest`) and are generated from `assets/icon.svg` and the source OG image.

Always use `https://` for absolute URLs (canonical/OG/Twitter tags, links) — never `http://`. Social-share debuggers and browsers prefer HTTPS.

## Cache-busting: bump the version when committing asset changes

`index.html` loads `css/style.css`, `js/main.js`, the icons, and OG image with a `?v=N` query string. **Bump `N` only when the CSS/JS/icon changes are committed**, not on every local edit — a single bump per commit is enough, since only what ships to Cloudflare Pages needs cache-busting. This forces browsers — which cache these aggressively, favicons especially — to refetch. Keep the version numbers in sync across all asset references so a single bump refreshes everything.
