# Obituary & Accident Trend Intelligence Dashboard

AI-powered real-time dashboard that tracks obituaries, accidents, and breaking death-related news using Google Trends, News feeds, and custom scrapers.

## Features

- **Real-time Trend Monitoring**: Tracks Google Trends, News, and Search spikes.
- **Breakout Detection Engine**: Identifies sudden search spikes and viral topics.
- **AI Content Generator**: Generates obituary summaries, SEO headlines, and blog posts.
- **Advanced Filtering**: Filter by country, category, trend type, and time interval.
- **Live Alert System**: Browser notifications, Telegram, and Email alerts.
- **Dashboard Analytics**: Visualizes trend data with charts and heatmaps.
- **WordPress Integration**: Push trending topics directly to WordPress.

## Tech Stack

- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS, shadcn/ui.
- **Backend**: Next.js API Routes, BullMQ (Queueing).
- **Database**: PostgreSQL with Prisma.
- **Scraping**: Puppeteer, Cheerio, RSS Parser.
- **AI**: OpenAI/Anthropic API for content generation.

## Setup Instructions

### Prerequisites

- Node.js 18+
- PostgreSQL
- Redis (for BullMQ)

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in `.env`:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/obituary_dashboard"
   REDIS_URL="redis://localhost:6379"
   OPENAI_API_KEY="your-api-key"
   TELEGRAM_BOT_TOKEN="your-bot-token"
   TELEGRAM_CHAT_ID="your-chat-id"
   ```
4. Initialize the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```
5. Run the development server:
   ```bash
   npm run dev
   ```

## Architecture

The system uses a modular architecture:
- `services/`: Core logic for scraping, trend detection, and AI generation.
- `lib/`: Shared utilities and database clients.
- `app/api/`: REST API endpoints.
- `app/`: Next.js pages and layouts.

## Deployment

### Docker

Build and run with Docker:
```bash
docker-compose up --build
```

### Manual

Deploy the frontend/API to Vercel/Railway and the background workers to a VPS or Render.
