import { describe, it, expect, beforeEach } from 'vitest';

import { PositionFilter, RoleFilter, RungFilter } from '../../data/enums';
import { type Champion } from '../../data/champions';

const mockChampions: Champion[] = [
  {
    id: 1,
    name: 'Азир',
    rung: '2',
    position: [PositionFilter.mid],
    role: [RoleFilter.apk],
    img: 'https://example.com/azir.jpg',
  },
  {
    id: 2,
    name: 'Гарен',
    rung: '7',
    position: [PositionFilter.top],
    role: [RoleFilter.tank, RoleFilter.fighter],
    img: 'https://example.com/garen.jpg',
  },
  {
    id: 3,
    name: 'Джинкс',
    rung: '5',
    position: [PositionFilter.bot],
    role: [RoleFilter.adk],
    img: 'https://example.com/jinx.jpg',
  },
  {
    id: 4,
    name: 'Ли Син',
    rung: '0',
    position: [PositionFilter.jungle],
    role: [RoleFilter.fighter],
    img: 'https://example.com/leesin.jpg',
  },
];

class TestChampionsStore {
  private previousRung?: RungFilter;
  private allChampions: Champion[];
  public champions: Champion[];
  private filteredByRung: Champion[];

  constructor(championsData: Champion[]) {
    this.allChampions = championsData;
    this.champions = championsData;
    this.filteredByRung = championsData;
  }

  public showAllChampions(): void {
    this.champions = this.allChampions;
  }

  public refreshChampions(
    targetProperty: Set<PositionFilter | RoleFilter>,
    targetRung?: RungFilter,
  ) {
    if (targetRung && this.previousRung !== targetRung) {
      this.filteredByRung = this.getFilteredByRung(targetRung);
      this.previousRung = targetRung;
    } else if (!targetRung) {
      this.filteredByRung = this.allChampions;
      this.previousRung = undefined;
    }

    if (targetProperty.size) {
      this.champions = this.getFilteredByProperties(Array.from(targetProperty));
    } else {
      this.champions = this.filteredByRung;
    }
  }

  private getFilteredByRung(rung: RungFilter): Champion[] {
    return this.allChampions.filter((champion) =>
      this.isTargetRung(champion.rung, rung),
    );
  }

  private getFilteredByProperties(
    filters: Array<PositionFilter | RoleFilter>,
  ): Champion[] {
    return this.filteredByRung.filter((champ) => {
      const roleAndPosition = [...champ.role, ...champ.position];
      return filters.every((property) => roleAndPosition.includes(property));
    });
  }

  private isTargetRung(rung: string, targetRung: RungFilter): boolean {
    const currentRung = Number(rung);

    switch (targetRung) {
      case RungFilter.max:
        return currentRung === 7;
      case RungFilter.high:
        return currentRung === 5 || currentRung === 6;
      default:
        return currentRung < 5;
    }
  }
}

describe('ChampionsStore', () => {
  let store: TestChampionsStore;

  beforeEach(() => {
    store = new TestChampionsStore(mockChampions);
  });

  describe('initialization', () => {
    it('should have all champions on init', () => {
      expect(store.champions).toHaveLength(4);
    });
  });

  describe('showAllChampions', () => {
    it('should display all champions', () => {
      store.refreshChampions(new Set(), RungFilter.max);
      store.showAllChampions();
      expect(store.champions).toHaveLength(4);
    });
  });

  describe('refreshChampions with rung filter', () => {
    it('should filter by max rung (7)', () => {
      store.refreshChampions(new Set(), RungFilter.max);

      expect(store.champions).toHaveLength(1);
      expect(store.champions[0].name).toBe('Гарен');
    });

    it('should filter by high rung (5-6)', () => {
      store.refreshChampions(new Set(), RungFilter.high);

      expect(store.champions).toHaveLength(1);
      expect(store.champions[0].name).toBe('Джинкс');
    });

    it('should filter by low rung (<5)', () => {
      store.refreshChampions(new Set(), RungFilter.low);

      expect(store.champions).toHaveLength(2);
      expect(store.champions.map((c) => c.name)).toContain('Азир');
      expect(store.champions.map((c) => c.name)).toContain('Ли Син');
    });
  });

  describe('refreshChampions with role/position filter', () => {
    it('should filter by role', () => {
      const filters = new Set<PositionFilter | RoleFilter>([RoleFilter.tank]);
      store.refreshChampions(filters);

      expect(store.champions).toHaveLength(1);
      expect(store.champions[0].name).toBe('Гарен');
    });

    it('should filter by position', () => {
      const filters = new Set<PositionFilter | RoleFilter>([
        PositionFilter.mid,
      ]);
      store.refreshChampions(filters);

      expect(store.champions).toHaveLength(1);
      expect(store.champions[0].name).toBe('Азир');
    });

    it('should filter by multiple properties (AND logic)', () => {
      const filters = new Set<PositionFilter | RoleFilter>([
        RoleFilter.fighter,
        PositionFilter.top,
      ]);
      store.refreshChampions(filters);

      expect(store.champions).toHaveLength(1);
      expect(store.champions[0].name).toBe('Гарен');
    });
  });

  describe('combined filters', () => {
    it('should combine rung and role filters', () => {
      const filters = new Set<PositionFilter | RoleFilter>([
        RoleFilter.fighter,
      ]);
      store.refreshChampions(filters, RungFilter.max);

      expect(store.champions).toHaveLength(1);
      expect(store.champions[0].name).toBe('Гарен');
    });
  });
});
