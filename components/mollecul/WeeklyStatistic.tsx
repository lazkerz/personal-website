import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/atom/card";
import { Alert, AlertDescription } from "@/components/atom/alert";
import { AlertCircle, Clock } from "lucide-react";

interface WakaTimeStats {
  start_date: string;
  end_date: string;
  daily_average: number;
  total_seconds: number;
  best_day: {
    date: string;
    total_seconds: number;
  };
  languages: {
    name: string;
    percent: number;
    total_seconds: number;
  }[];
}

const WeeklyStatistic = () => {
    const [stats, setStats] = useState<WakaTimeStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchWakaTimeStats = async () => {
        try {
          const response = await fetch('/api/wakatime-stats');
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to fetch WakaTime stats');
          }
          const data = await response.json();
          setStats(data);
          setError(null);
        } catch (error) {
          console.error('Error:', error);
          setError(error instanceof Error ? error.message : 'Failed to load statistics');
        } finally {
          setLoading(false);
        }
      };
  
      fetchWakaTimeStats();
    }, []);
  
    if (error) {
      return (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {error}. Please check if your WakaTime API key is configured correctly.
          </AlertDescription>
        </Alert>
      );
    }

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours} hrs ${minutes} mins`;
  };

  if (loading) {
    return (
      <Card className="bg-white shadow shadow-md">
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-100 rounded w-1/4"></div>
            <div className="h-4 bg-gray-100 rounded w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white justify-start border-gray-800 shadow shadow-md mt-5">
      <CardContent className="p-6 space-y-6">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-gray-400" />
          <h2 className="text-lg font-semibold text-gray-700">Weekly Statistic</h2>
        </div>

        <p className="text-sm text-gray-700">My WakaTime last 7 days stats.</p>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-700">Start Date</p>
            <p className="text-lg text-gray-600">
              {stats?.start_date ? new Date(stats.start_date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) : '-'}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-700">End Date</p>
            <p className="text-lg text-gray-600">
              {stats?.end_date ? new Date(stats.end_date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) : '-'}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-700">Daily Coding Average</p>
            <p className="text-lg text-gray-600">
              {stats ? formatTime(stats.daily_average) : '-'}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-700">This Week Coding Time</p>
            <p className="text-lg text-gray-600">
              {stats ? formatTime(stats.total_seconds) : '-'}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-700">Best Day Coding Time</p>
            <p className="text-lg text-gray-600">
              {stats?.best_day ? `${new Date(stats.best_day.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })} (${formatTime(stats.best_day.total_seconds)})` : '-'}
            </p>
          </div>

          {stats?.languages && stats.languages.length > 0 && (
            <div>
              <p className="text-sm text-gray-400 mb-2">Languages</p>
              <div className="space-y-2">
                {stats.languages.map((lang, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{lang.name}</span>
                      <span className="text-gray-400">{Math.round(lang.percent)}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5">
                      <div
                        className="bg-emerald-500 h-1.5 rounded-full"
                        style={{ width: `${lang.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeeklyStatistic;