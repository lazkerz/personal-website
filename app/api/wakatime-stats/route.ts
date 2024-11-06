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
    return NextResponse.json(data.data);
    
  } catch (error) {
    console.error('Error fetching WakaTime stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch WakaTime statistics' },
      { status: 500 }
    );
  }
}