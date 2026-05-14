import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get('country');
  const category = searchParams.get('category');
  const breakout = searchParams.get('breakout');

  try {
    const trends = await prisma.trend.findMany({
      where: {
        ...(country && { country }),
        ...(category && { category }),
        ...(breakout === 'true' && { breakoutStatus: 'BREAKOUT' }),
      },
      orderBy: {
        trendScore: 'desc',
      },
      take: 100,
    });

    return NextResponse.json(trends);
  } catch (error) {
    console.error("Error fetching trends:", error);
    return NextResponse.json({ error: 'Failed to fetch trends' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  // Manual trigger for scraping
  // In a real app, this would be protected or handled by a cron job
  try {
    // await TrendEngineService.updateTrends();
    return NextResponse.json({ message: 'Trend update triggered' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to trigger update' }, { status: 500 });
  }
}
