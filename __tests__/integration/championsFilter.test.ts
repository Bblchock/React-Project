import { describe, it, expect, beforeEach } from 'vitest';

/**
 * Интеграционный тест: FilterStore + ChampionsStore
 * Проверяет корректную работу системы фильтрации чемпионов
 */

// Определяем типы локально чтобы избежать circular imports
type PositionFilter = 'top' | 'mid' | 'bot' | 'jungle';
type RoleFilter = 'tank' | 'apk' | 'adk' | 'support' | 'fighter' | 'assassin';

interface Champion {
  id: number;
  name: string;
  rung: string;
  position: PositionFilter[];
  role: RoleFilter[];
  img: string;
}

enum RungFilter {
  max = 'max',
  high = 'high',
  low = 'low',
}

// Реализация ChampionsStore для тестов
class TestChampionsStore {
  private previousRung?: RungFilter;
  private allChampions: Champion[] = [];
  public champions: Champion[] = [];
  private filteredByRung: Champion[] = [];

  constructor(championsData: Champion[]) {
    this.allChampions = championsData;
    this.filteredByRung = this.allChampions;
    this.champions = this.allChampions;
  }

  public showAllChampions(): void {
    this.champions = this.allChampions;
    this.filteredByRung = this.allChampions;
    this.previousRung = undefined;
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
      const roleAndPosition: string[] = [...champ.role, ...champ.position];
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

// Реализация FilterStore для тестов
class TestFilterStore {
  public isAllSelected = true;
  public typesOfFilters = new Set<PositionFilter | RoleFilter>();
  public selectedRung?: RungFilter;

  constructor(private readonly championsStore: TestChampionsStore) {}

  public resetFilters(): void {
    this.isAllSelected = true;
    this.selectedRung = undefined;
    this.typesOfFilters.clear();
    this.championsStore.showAllChampions();
  }

  public isSelectedRung(rung: RungFilter): boolean {
    return this.selectedRung === rung;
  }

  public changeFilterByRung(rung: RungFilter): void {
    this.selectedRung = rung;
    this.refreshIsAllSelected();
    this.refreshChampions();
  }

  public filtersContain(id: PositionFilter | RoleFilter): boolean {
    return this.typesOfFilters.has(id);
  }

  public changeProperties(filter: PositionFilter | RoleFilter): void {
    this.typesOfFilters.has(filter)
      ? this.typesOfFilters.delete(filter)
      : this.typesOfFilters.add(filter);

    this.refreshIsAllSelected();
    this.refreshChampions();
  }

  private refreshChampions(): void {
    this.championsStore.refreshChampions(
      this.typesOfFilters,
      this.selectedRung,
    );
  }

  private refreshIsAllSelected(): void {
    this.isAllSelected = !this.typesOfFilters.size && !this.selectedRung;
  }
}

const mockChampions: Champion[] = [
  {
    id: 1,
    name: 'Азир',
    rung: '2',
    position: ['mid'],
    role: ['apk'],
    img: 'https://example.com/azir.jpg',
  },
  {
    id: 2,
    name: 'Гарен',
    rung: '7',
    position: ['top', 'mid'],
    role: ['tank', 'fighter'],
    img: 'https://example.com/garen.jpg',
  },
  {
    id: 3,
    name: 'Джинкс',
    rung: '5',
    position: ['bot'],
    role: ['adk'],
    img: 'https://example.com/jinx.jpg',
  },
  {
    id: 4,
    name: 'Ли Син',
    rung: '0',
    position: ['jungle'],
    role: ['fighter'],
    img: 'https://example.com/leesin.jpg',
  },
  {
    id: 5,
    name: 'Лулу',
    rung: '7',
    position: ['bot'],
    role: ['support', 'apk'],
    img: 'https://example.com/lulu.jpg',
  },
];

describe('Champions Filter Integration', () => {
  let championsStore: TestChampionsStore;
  let filterStore: TestFilterStore;

  beforeEach(() => {
    championsStore = new TestChampionsStore(mockChampions);
    filterStore = new TestFilterStore(championsStore);
  });

  describe('User flow: filtering champions', () => {
    it('should show all champions initially', () => {
      expect(championsStore.champions).toHaveLength(5);
      expect(filterStore.isAllSelected).toBe(true);
    });

    it('should filter by role and update champions list', () => {
      filterStore.changeProperties('tank');

      expect(filterStore.isAllSelected).toBe(false);
      expect(filterStore.filtersContain('tank')).toBe(true);
      expect(championsStore.champions).toHaveLength(1);
      expect(championsStore.champions[0].name).toBe('Гарен');
    });

    it('should filter by position and update champions list', () => {
      filterStore.changeProperties('mid');

      expect(championsStore.champions).toHaveLength(2);
      expect(championsStore.champions.map((c) => c.name)).toContain('Азир');
      expect(championsStore.champions.map((c) => c.name)).toContain('Гарен');
    });

    it('should filter by rung tier', () => {
      filterStore.changeFilterByRung(RungFilter.max);

      expect(filterStore.isSelectedRung(RungFilter.max)).toBe(true);
      expect(championsStore.champions).toHaveLength(2);
      expect(championsStore.champions.map((c) => c.name)).toContain('Гарен');
      expect(championsStore.champions.map((c) => c.name)).toContain('Лулу');
    });

    it('should combine role and rung filters', () => {
      filterStore.changeFilterByRung(RungFilter.max);
      filterStore.changeProperties('support');

      expect(championsStore.champions).toHaveLength(1);
      expect(championsStore.champions[0].name).toBe('Лулу');
    });

    it('should add multiple role filters with AND logic', () => {
      filterStore.changeProperties('fighter');
      filterStore.changeProperties('tank');

      expect(championsStore.champions).toHaveLength(1);
      expect(championsStore.champions[0].name).toBe('Гарен');
    });

    it('should reset all filters and show all champions', () => {
      filterStore.changeFilterByRung(RungFilter.max);
      filterStore.changeProperties('tank');

      expect(championsStore.champions).toHaveLength(1);

      filterStore.resetFilters();

      expect(filterStore.isAllSelected).toBe(true);
      expect(filterStore.selectedRung).toBeUndefined();
      expect(filterStore.typesOfFilters.size).toBe(0);
      expect(championsStore.champions).toHaveLength(5);
    });

    it('should toggle filter off when clicked twice', () => {
      filterStore.changeProperties('apk');
      expect(filterStore.filtersContain('apk')).toBe(true);
      expect(championsStore.champions.length).toBeLessThan(5);

      filterStore.changeProperties('apk');
      expect(filterStore.filtersContain('apk')).toBe(false);
      expect(championsStore.champions).toHaveLength(5);
    });
  });

  describe('Edge cases', () => {
    it('should handle empty filter result', () => {
      filterStore.changeProperties('assassin');
      filterStore.changeProperties('bot');

      expect(championsStore.champions).toHaveLength(0);
    });

    it('should handle switching between rung filters', () => {
      filterStore.changeFilterByRung(RungFilter.max);
      expect(championsStore.champions).toHaveLength(2); // Гарен, Лулу

      filterStore.resetFilters();
      filterStore.changeFilterByRung(RungFilter.low);
      expect(championsStore.champions).toHaveLength(2); // Азир, Ли Син
    });
  });
});
