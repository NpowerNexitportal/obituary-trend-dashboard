import { prisma } from '@/lib/prisma';
import { ScraperService } from './scraper.service';

export class TrendEngineService {
  static async updateTrends() {
    console.log("Starting trend update cycle...");
    
    // 1. Scrape data
    const newsTrends = await ScraperService.scrapeGoogleNews("obituary OR accident");
    const topKeywords = await ScraperService.scrapeTrendingKeywords();

    // 2. Process and Save
    for (const item of topKeywords) {
      await prisma.trend.upsert({
        where: { id: `mock-${item.keyword}` }, // In real app, use a proper unique key
        update: {
          trendScore: item.trendScore,
          breakoutStatus: item.trendScore > 90 ? 'BREAKOUT' : 'TRENDING',
        },
        create: {
          keyword: item.keyword,
          country: item.country,
          category: item.category,
          trendScore: item.trendScore,
          source: 'Google Trends',
          breakoutStatus: item.trendScore > 90 ? 'BREAKOUT' : 'TRENDING',
        },
      });
    }

    console.log("Trend update cycle completed.");
  }

  static calculateVelocity(previousScore: number, currentScore: number, timeDiffMinutes: number) {
    if (timeDiffMinutes <= 0) return 0;
    return (currentScore - previousScore) / timeDiffMinutes;
  }
}
