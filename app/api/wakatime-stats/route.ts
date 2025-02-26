import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Get your API Key from environment variables
    const WAKATIME_API_KEY = process.env.WAKATIME_API_KEY;
    
    if (!WAKATIME_API_KEY) {
      console.log('Missing WakaTime API key');
      return NextResponse.json({ error: 'WakaTime API key not configured' }, { status: 500 });
    }

    // Base64 encode the API key
    const encodedKey = Buffer.from(WAKATIME_API_KEY).toString('base64');
    console.log('Fetching WakaTime stats...');

    const response = await fetch('https://wakatime.com/api/v1/users/current/stats/last_7_days', {
      headers: {
        'Authorization': `Basic ${encodedKey}`
      }
    });

    console.log('WakaTime API status:', response.status);

    if (!response.ok) {
      throw new Error(`WakaTime API responded with status: ${response.status}`);
    }

    const responseData = await response.json();
    
    // Log the exact structure we're receiving
    console.log('WakaTime API raw data structure:');
    console.log(JSON.stringify({
      hasData: !!responseData.data,
      dataProps: responseData.data ? Object.keys(responseData.data) : [],
      dailyAvgType: responseData.data ? typeof responseData.data.daily_average : 'undefined',
      dailyAvgSecondsType: responseData.data ? typeof responseData.data.daily_average_seconds : 'undefined',
      dailyAvg: responseData.data ? responseData.data.daily_average : null,
      dailyAvgSeconds: responseData.data ? responseData.data.daily_average_seconds : null,
    }, null, 2));
    
    // If we have daily_average but not daily_average_seconds
    const dailyAverage = responseData.data.daily_average_seconds !== undefined 
      ? responseData.data.daily_average_seconds 
      : (responseData.data.daily_average !== undefined 
          ? responseData.data.daily_average * 3600 // Convert hours to seconds if that's what we have
          : 0);
    
    const totalSeconds = responseData.data.total_seconds || 0;
    
    // Create best day object safely
    const bestDay = responseData.data.best_day || {};
    
    // Create the transformed response
    const transformedData = {
      start_date: responseData.data.start || responseData.data.range.start || '',
      end_date: responseData.data.end || responseData.data.range.end || '',
      daily_average: dailyAverage,
      total_seconds: totalSeconds,
      best_day: {
        date: bestDay.date || '',
        total_seconds: bestDay.total_seconds || 0
      },
      languages: Array.isArray(responseData.data.languages) 
        ? responseData.data.languages.map((lang: { name: string; percent: number; total_seconds: number }) => ({
            name: lang.name,
            percent: lang.percent || 0,
            total_seconds: lang.total_seconds || 0
          }))
        : []
    };
    
    console.log('Transformed data:', JSON.stringify(transformedData, null, 2));
    
    return NextResponse.json(transformedData);
    
  } catch (error) {
    console.error('Error fetching WakaTime stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch WakaTime statistics: ' + (error instanceof Error ? error.message : 'Unknown error') },
      { status: 500 }
    );
  }
}