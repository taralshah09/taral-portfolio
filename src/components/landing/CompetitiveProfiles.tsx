'use client';

import { competitiveConfig } from '@/config/Competitive';
import { Code, ExternalLink, Target, Trophy } from 'lucide-react';
import { useEffect, useState } from 'react';

import Container from '../common/Container';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Skeleton } from '../ui/skeleton';

interface CPStats {
  platform: 'LeetCode' | 'Codeforces';
  rating: number;
  maxRating: number;
  solved: number;
  rank: string;
  loading: boolean;
  error: boolean;
}

export default function CompetitiveProfiles() {
  const [leetcodeStats, setLeetcodeStats] = useState<CPStats>({
    platform: 'LeetCode',
    rating: 0,
    maxRating: 0,
    solved: 0,
    rank: '',
    loading: true,
    error: false,
  });

  const [codeforcesStats, setCodeforcesStats] = useState<CPStats>({
    platform: 'Codeforces',
    rating: 0,
    maxRating: 0,
    solved: 0,
    rank: '',
    loading: true,
    error: false,
  });

  useEffect(() => {
    const fetchLeetCode = async () => {
      try {
        const response = await fetch(
          `${competitiveConfig.leetcode.apiUrl}/${competitiveConfig.leetcode.username}`,
        );
        const data = await response.json();
        if (data.status === 'success') {
          setLeetcodeStats({
            platform: 'LeetCode',
            rating: data.ranking || 0,
            maxRating: data.contributionPoints || 0,
            solved: data.totalSolved || 0,
            rank: data.ranking ? `#${data.ranking}` : 'N/A',
            loading: false,
            error: false,
          });
        } else {
          throw new Error('Failed to fetch LeetCode stats');
        }
      } catch (error) {
        console.error('LeetCode fetch error:', error);
        setLeetcodeStats((prev) => ({ ...prev, loading: false, error: true }));
      }
    };

    const fetchCodeforces = async () => {
      try {
        const response = await fetch(
          `${competitiveConfig.codeforces.apiUrl}${competitiveConfig.codeforces.username}`,
        );
        const data = await response.json();
        if (data.status === 'OK') {
          const user = data.result[0];
          setCodeforcesStats({
            platform: 'Codeforces',
            rating: user.rating || 0,
            maxRating: user.maxRating || 0,
            solved: 0, // Need a separate API call or manual update for solved count on CF
            rank: user.rank || 'N/A',
            loading: false,
            error: false,
          });
        } else {
          throw new Error('Failed to fetch Codeforces stats');
        }
      } catch (error) {
        console.error('Codeforces fetch error:', error);
        setCodeforcesStats((prev) => ({
          ...prev,
          loading: false,
          error: true,
        }));
      }
    };

    fetchLeetCode();
    fetchCodeforces();
  }, []);

  const StatCard = ({
    stats,
    config,
  }: {
    stats: CPStats;
    config:
      | typeof competitiveConfig.leetcode
      | typeof competitiveConfig.codeforces;
  }) => {
    if (stats.loading) {
      return (
        <Card className="border-primary/20 bg-background/50 relative overflow-hidden border-2 border-dashed backdrop-blur-sm">
          <CardHeader>
            <Skeleton className="mb-2 h-6 w-1/3" />
            <Skeleton className="h-4 w-1/2" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="mt-4 h-10 w-full" />
          </CardContent>
        </Card>
      );
    }

    if (stats.error) {
      return (
        <Card className="bg-background/50 relative overflow-hidden border-2 border-red-500/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-bold text-red-500">
              {stats.platform}
            </CardTitle>
            <CardDescription>Failed to load profile data</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center py-6">
            <Button variant="outline" asChild className="mt-4">
              <a
                href={config.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      );
    }

    return (
      <Card
        className={`group border-primary/10 bg-background/50 hover:border-primary/40 relative overflow-hidden border-2 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]`}
      >
        {/* Animated background glow */}
        <div
          className="absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-10 blur-3xl transition-opacity group-hover:opacity-20"
          style={{ backgroundColor: config.themeColor }}
        />

        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle
              className="text-2xl font-black tracking-tighter italic"
              style={{ color: config.themeColor }}
            >
              {stats.platform.toUpperCase()}
            </CardTitle>
            <Trophy className="text-muted-foreground group-hover:text-primary h-6 w-6 transition-colors" />
          </div>
          <CardDescription className="text-muted-foreground/80 font-medium">
            {competitiveConfig.display.subtitle}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-muted-foreground/60 text-xs font-bold tracking-widest uppercase">
                Rating
              </p>
              <p
                className="text-3xl font-black"
                style={{ color: config.themeColor }}
              >
                {stats.rating || 'N/A'}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-muted-foreground/60 text-xs font-bold tracking-widest uppercase">
                Max Rating
              </p>
              <p className="text-foreground text-3xl font-black">
                {stats.maxRating || 'N/A'}
              </p>
            </div>
          </div>

          <div className="border-primary/10 flex items-center gap-4 border-t pt-4">
            <div className="flex items-center gap-2">
              <Code className="text-muted-foreground h-4 w-4" />
              <p className="text-sm font-medium">
                <span className="text-muted-foreground">Solved:</span>{' '}
                {stats.solved || '---'}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Target className="text-muted-foreground h-4 w-4" />
              <p className="text-sm font-medium tracking-tight uppercase">
                <span className="text-muted-foreground">Rank:</span>{' '}
                {stats.rank}
              </p>
            </div>
          </div>

          <Button
            className="w-full font-bold tracking-tighter uppercase shadow-lg shadow-black/5 dark:shadow-white/5"
            variant="outline"
            asChild
            style={{
              borderColor: `${config.themeColor}33`,
              background: `linear-gradient(45deg, transparent, ${config.themeColor}08)`,
            }}
          >
            <a
              href={config.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              Explore Portfolio <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <Container className="mt-24 mb-12">
      <div className="space-y-10">
        <div className="space-y-2 text-center">
          <h2 className="text-4xl font-black tracking-tighter uppercase italic md:text-5xl">
            {competitiveConfig.display.title}
          </h2>
          <div className="bg-primary mx-auto h-1.5 w-24 rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <StatCard stats={leetcodeStats} config={competitiveConfig.leetcode} />
          <StatCard
            stats={codeforcesStats}
            config={competitiveConfig.codeforces}
          />
        </div>
      </div>
    </Container>
  );
}
