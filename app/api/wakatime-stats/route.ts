import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Get your API Key from environment variables
    const WAKATIME_API_KEY = process.env.WAKATIME_API_KEY;
    
    if (!WAKATIME_API_KEY) {
      return NextResponse.json({ error: 'WakaTime API key not configured' }, { status: 500 });
    }

    // Base64 encode the API key
    const encodedKey = Buffer.from(WAKATIME_API_KEY).toString('base64');

    const response = await fetch('https://wakatime.com/api/v1/users/current/stats/last_7_days', {
      headers: {
        'Authorization': `Basic ${encodedKey}`
      }
    });

    if (!response.ok) {
      throw new Error(`WakaTime API responded with status: ${response.status}`);
    }

    const data = await response.json();
    
    // Log the data structure and types
    console.log('WakaTime API response structure:', {
      start: typeof data.data.start,
      end: typeof data.data.end,
      daily_average_seconds: typeof data.data.daily_average_seconds,
      total_seconds: typeof data.data.total_seconds
    });
    
    // Ensure values are proper numbers
    const dailyAverage = parseFloat(data.data.daily_average_seconds) || 0;
    const totalSeconds = parseFloat(data.data.total_seconds) || 0;
    
    // Transform with explicit type conversion
    return NextResponse.json({
      start_date: data.data.start,
      end_date: data.data.end,
      daily_average: dailyAverage,
      total_seconds: totalSeconds,
      best_day: {
        date: data.data.best_day?.date || '',
        total_seconds: parseFloat(data.data.best_day?.total_seconds) || 0
      },
      languages: Array.isArray(data.data.languages) 
        ? data.data.languages.map(lang => ({
            name: lang.name,
            percent: parseFloat(lang.percent) || 0,
            total_seconds: parseFloat(lang.total_seconds) || 0
          }))
        : []
    });
    
  } catch (error) {
    console.error('Error fetching WakaTime stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch WakaTime statistics' },
      { status: 500 }
    );
  }
}