import type { clans } from '../constants/images';

export type ClanRankingBoardProps = {
  clanStats: ClanStatsMap;
};

export type ClanKey = keyof typeof clans;

export type LeaderboardEntry = {
  displayName: string;
  victories: number;
  rank: string;
};

export type ClanStats = {
  members: number;
  victories: number;
  battles: number;
  topPlayers: LeaderboardEntry[];
};

export type ClanStatsMap = Partial<Record<ClanKey, ClanStats>>;
