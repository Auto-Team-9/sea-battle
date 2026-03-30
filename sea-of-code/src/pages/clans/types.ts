import type { clans } from '../../constants/images';

export type ClanKey = keyof typeof clans;

export type ClanStats = {
  members: number;
  victories: number;
  battles: number;
};

export type ClanStatsMap = Partial<Record<ClanKey, ClanStats>>;
