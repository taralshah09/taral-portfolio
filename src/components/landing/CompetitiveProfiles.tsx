'use client';

import { useEffect, useState } from 'react';
import { competitiveConfig } from '@/config/Competitive';
import Container from '../common/Container';
import { Button } from '../ui/button';
import { Skeleton } from '../ui/skeleton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Trophy, Code, Target, ExternalLink } from 'lucide-react';

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
                const response = await fetch(`${competitiveConfig.leetcode.apiUrl}/${competitiveConfig.leetcode.username}`);
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
                setLeetcodeStats(prev => ({ ...prev, loading: false, error: true }));
            }
        };

        const fetchCodeforces = async () => {
            try {
                const response = await fetch(`${competitiveConfig.codeforces.apiUrl}${competitiveConfig.codeforces.username}`);
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
                setCodeforcesStats(prev => ({ ...prev, loading: false, error: true }));
            }
        };

        fetchLeetCode();
        fetchCodeforces();
    }, []);

    const StatCard = ({ stats, config }: { stats: CPStats; config: typeof competitiveConfig.leetcode | typeof competitiveConfig.codeforces }) => {
        if (stats.loading) {
            return (
                <Card className="relative overflow-hidden border-2 border-dashed border-primary/20 bg-background/50 backdrop-blur-sm">
                    <CardHeader>
                        <Skeleton className="h-6 w-1/3 mb-2" />
                        <Skeleton className="h-4 w-1/2" />
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Skeleton className="h-8 w-full" />
                        <Skeleton className="h-8 w-full" />
                        <Skeleton className="h-10 w-full mt-4" />
                    </CardContent>
                </Card>
            );
        }

        if (stats.error) {
            return (
                <Card className="relative overflow-hidden border-2 border-red-500/20 bg-background/50 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="text-red-500 font-bold">{stats.platform}</CardTitle>
                        <CardDescription>Failed to load profile data</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center py-6">
                        <Button variant="outline" asChild className="mt-4">
                            <a href={config.profileUrl} target="_blank" rel="noopener noreferrer">
                                View Profile <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </CardContent>
                </Card>
            );
        }

        return (
            <Card className={`group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] border-2 border-primary/10 bg-background/50 backdrop-blur-sm hover:border-primary/40`}>
                {/* Animated background glow */}
                <div
                    className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-10 blur-3xl transition-opacity group-hover:opacity-20"
                    style={{ backgroundColor: config.themeColor }}
                />

                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl font-black italic tracking-tighter" style={{ color: config.themeColor }}>
                            {stats.platform.toUpperCase()}
                        </CardTitle>
                        <Trophy className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <CardDescription className="font-medium text-muted-foreground/80">
                        {competitiveConfig.display.subtitle}
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">Rating</p>
                            <p className="text-3xl font-black" style={{ color: config.themeColor }}>
                                {stats.rating || 'N/A'}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">Max Rating</p>
                            <p className="text-3xl font-black text-foreground">
                                {stats.maxRating || 'N/A'}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 border-t border-primary/10 pt-4">
                        <div className="flex items-center gap-2">
                            <Code className="h-4 w-4 text-muted-foreground" />
                            <p className="text-sm font-medium">
                                <span className="text-muted-foreground">Solved:</span> {stats.solved || '---'}
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Target className="h-4 w-4 text-muted-foreground" />
                            <p className="text-sm font-medium uppercase tracking-tight">
                                <span className="text-muted-foreground">Rank:</span> {stats.rank}
                            </p>
                        </div>
                    </div>

                    <Button
                        className="w-full font-bold uppercase tracking-tighter shadow-lg shadow-black/5 dark:shadow-white/5"
                        variant="outline"
                        asChild
                        style={{
                            borderColor: `${config.themeColor}33`,
                            background: `linear-gradient(45deg, transparent, ${config.themeColor}08)`
                        }}
                    >
                        <a href={config.profileUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
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
                <div className="text-center space-y-2">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
                        {competitiveConfig.display.title}
                    </h2>
                    <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <StatCard stats={leetcodeStats} config={competitiveConfig.leetcode} />
                    <StatCard stats={codeforcesStats} config={competitiveConfig.codeforces} />
                </div>
            </div>
        </Container>
    );
}
