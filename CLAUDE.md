# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun install
bun run dev       # Start dev server at http://localhost:3000
bun run build     # Production build
bun run generate  # Static site generation
bun run preview   # Preview production build
```

## Architecture Overview

**Docus-based bilingual documentation site** for Vietnamese SMEs on carbon credits. The site uses Nuxt 4 with full English/Vietnamese localization.

### Tech Stack
- **Nuxt 4** with Docus theme extension
- **Nuxt Content** for markdown content management
- **@nuxtjs/i18n** for bilingual routing (`/en/*`, `/vi/*`)
- **Nuxt UI** (Tailwind CSS 4) for components
- **@nuxt/fonts** with Vietnamese subset support
- **Better SQLite3** for content indexing

### Project Structure

```
app/                  # Nuxt app source
├── components/       # Vue components (landing/, about/, app/, docs/)
├── composables/      # Shared composables (useMarketingRoute, useReveal)
├── data/            # Static data (about.ts with localized content)
├── pages/           # Route handlers
├── utils/           # Helpers (navigation.ts)
└── assets/css/      # Global styles

content/             # Markdown documentation
├── en/              # English content (6 parts)
└── vi/              # Vietnamese content (6 parts)
```

### Key Patterns

**Localization**: Content lives in `content/{en,vi}/` with mirrored structure. Routes use `/:lang` prefix pattern handled by `app/pages/[lang]/index.vue`.

**Localized Assistant**: FAQ questions update dynamically based on current locale via `app/plugins/assistant-faq.ts`.

**Marketing Routes**: Custom landing pages (`/`, `/about-us`) use `useMarketingRoute()` composable for locale-aware navigation and label localization.

**Static Data**: About page content uses `app/data/about.ts` with `AboutPageCopy` pattern for bilingual text objects.

### AI Features

- **MCP Server** at `/mcp` for AI agent tool access
- **llms.txt** auto-generated for documentation discovery
- **Assistant API** at `/api/assistant-localized` with locale-aware responses

### Environment

Set `AI_GATEWAY_API_KEY` in `.env.local` to enable the AI assistant. Set `NUXT_SITE_URL` for production domain references.
