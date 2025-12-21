import { PositionFilter, RoleFilter, RungFilter } from '../enums';

type FilterBlock = 'position' | 'role';

type PropertyFilterButton = {
  id: RoleFilter | PositionFilter;
  title: string;
};

type RungFilterButton = {
  id: RungFilter;
  title: string;
};

export const DEFAULT_FILTER = 'all';

export const filtersByRung: RungFilterButton[] = [
  { id: RungFilter.max, title: 'MaxRung' },
  { id: RungFilter.high, title: 'Rung 5-6' },
  { id: RungFilter.low, title: 'Rung < 5' },
];

export const propertiesFilters: Record<FilterBlock, PropertyFilterButton[]> = {
  position: [
    { id: PositionFilter.top, title: 'Top' },
    { id: PositionFilter.mid, title: 'Mid' },
    { id: PositionFilter.bot, title: 'Bot' },
    { id: PositionFilter.jungle, title: 'Jungle' },
  ],
  role: [
    { id: RoleFilter.tank, title: 'Tank' },
    { id: RoleFilter.apk, title: 'Apk' },
    { id: RoleFilter.adk, title: 'Adk' },
    { id: RoleFilter.support, title: 'Support' },
    { id: RoleFilter.fighter, title: 'Fighter' },
    { id: RoleFilter.assassin, title: 'Assassin' },
  ],
};
