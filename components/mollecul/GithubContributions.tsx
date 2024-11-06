'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/atom/card";
import { SiGithub } from "react-icons/si";

interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface GitHubStats {
  totalContributions: number;
  weeks: {
    contributionDays: ContributionDay[];
  }[];
}

const ContributionBox = ({ level, date, count }: { level: number; date?: string; count?: number }) => {
  const getBackgroundColor = () => {
    switch (level) {
      case 0: return 'bg-gray-200'; // Lebih gelap untuk box kosong
      case 1: return 'bg-emerald-200';
      case 2: return 'bg-emerald-400';
      case 3: return 'bg-emerald-600';
      case 4: return 'bg-emerald-800';
      default: return 'bg-gray-200';
    }
  };

  return (
    <div 
      className={`w-3 h-3 rounded-sm ${getBackgroundColor()} hover:ring-2 hover:ring-gray-400 transition-all`}
      title={date && count !== undefined ? `${count} contributions on ${new Date(date).toLocaleDateString()}` : undefined}
    />
  );
};

const GitHubContributions = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch('/api/github-stats');
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub stats');
        }
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  const calculateThisWeek = () => {
    if (!stats?.weeks) return 0;
    const lastWeek = stats.weeks[stats.weeks.length - 1];
    return lastWeek.contributionDays.reduce((sum, day) => sum + day.contributionCount, 0);
  };

  const calculateBestDay = () => {
    if (!stats?.weeks) return 0;
    let max = 0;
    stats.weeks.forEach(week => {
      week.contributionDays.forEach(day => {
        max = Math.max(max, day.contributionCount);
      });
    });
    return max;
  };

  const calculateAverage = () => {
    if (!stats?.totalContributions) return 0;
    const daysWithContributions = stats.weeks.reduce((sum, week) => {
      return sum + week.contributionDays.filter(day => day.contributionCount > 0).length;
    }, 0);
    return Math.round(stats.totalContributions / (daysWithContributions || 1));
  };

  if (loading) {
    return (
      <Card className="bg-white">
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-20 bg-gray-200 rounded"></div>
              ))}
            </div>
            <div className="h-32 bg-gray-200 rounded"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white border border-gray-800">
      <CardContent className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SiGithub className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-800">Contributions</h2>
          </div>
          <span className="text-gray-600">@lazkerz</span>
        </div>

        <p className="text-sm text-gray-600">My contributions from last year on github.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-800">
            <div className="text-sm text-gray-600">Total</div>
            <div className="text-2xl font-bold text-gray-900">{stats?.totalContributions || 0}</div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-800">
            <div className="text-sm text-gray-600">This Week</div>
            <div className="text-2xl font-bold text-gray-900">{calculateThisWeek()}</div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-800">
            <div className="text-sm text-gray-600">Best Day</div>
            <div className="text-2xl font-bold text-gray-900">{calculateBestDay()}</div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-800">
            <div className="text-sm text-gray-600">Average</div>
            <div className="text-2xl font-bold text-gray-900">{calculateAverage()} / day</div>
          </div>
        </div>

        <div className="space-y-4">
          
          <div className="flex flex-wrap gap-1">
            {stats?.weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.contributionDays.map((day) => (
                  <ContributionBox
                    key={day.date}
                    level={Math.min(4, Math.floor(day.contributionCount / 3))}
                    date={day.date}
                    count={day.contributionCount}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Less</span>
            <div className="flex gap-1">
              <ContributionBox level={0} />
              <ContributionBox level={1} />
              <ContributionBox level={2} />
              <ContributionBox level={3} />
              <ContributionBox level={4} />
            </div>
            <span>More</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GitHubContributions;