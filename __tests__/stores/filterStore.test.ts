import { describe, it, expect, vi, beforeEach } from 'vitest';

import { RoleFilter, PositionFilter, RungFilter } from '../../data/enums';

interface MockChampionsStore {
  showAllChampions: ReturnType<typeof vi.fn>;
  refreshChampions: ReturnType<typeof vi.fn>;
}

class TestFilterStore {
  public isAllSelected = true;
  public typesOfFilters = new Set<PositionFilter | RoleFilter>();
  public selectedRung?: RungFilter;

  constructor(private readonly championsStore: MockChampionsStore) {}

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

  public changeProperties(role: PositionFilter | RoleFilter): void {
    this.typesOfFilters.has(role)
      ? this.typesOfFilters.delete(role)
      : this.typesOfFilters.add(role);

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

const createMockChampionsStore = (): MockChampionsStore => ({
  showAllChampions: vi.fn(),
  refreshChampions: vi.fn(),
});

describe('FilterStore', () => {
  let filterStore: TestFilterStore;
  let mockChampionsStore: MockChampionsStore;

  beforeEach(() => {
    mockChampionsStore = createMockChampionsStore();
    filterStore = new TestFilterStore(mockChampionsStore);
  });

  describe('initial state', () => {
    it('should have isAllSelected as true by default', () => {
      expect(filterStore.isAllSelected).toBe(true);
    });

    it('should have empty typesOfFilters', () => {
      expect(filterStore.typesOfFilters.size).toBe(0);
    });

    it('should have no selectedRung', () => {
      expect(filterStore.selectedRung).toBeUndefined();
    });
  });

  describe('changeProperties', () => {
    it('should add filter to typesOfFilters', () => {
      filterStore.changeProperties(RoleFilter.tank);

      expect(filterStore.typesOfFilters.has(RoleFilter.tank)).toBe(true);
      expect(filterStore.isAllSelected).toBe(false);
    });

    it('should remove filter if already selected', () => {
      filterStore.changeProperties(RoleFilter.tank);
      filterStore.changeProperties(RoleFilter.tank);

      expect(filterStore.typesOfFilters.has(RoleFilter.tank)).toBe(false);
      expect(filterStore.isAllSelected).toBe(true);
    });

    it('should call refreshChampions on championsStore', () => {
      filterStore.changeProperties(PositionFilter.mid);

      expect(mockChampionsStore.refreshChampions).toHaveBeenCalled();
    });

    it('should support multiple filters', () => {
      filterStore.changeProperties(RoleFilter.tank);
      filterStore.changeProperties(PositionFilter.top);

      expect(filterStore.typesOfFilters.size).toBe(2);
      expect(filterStore.filtersContain(RoleFilter.tank)).toBe(true);
      expect(filterStore.filtersContain(PositionFilter.top)).toBe(true);
    });
  });

  describe('changeFilterByRung', () => {
    it('should set selectedRung', () => {
      filterStore.changeFilterByRung(RungFilter.max);

      expect(filterStore.selectedRung).toBe(RungFilter.max);
      expect(filterStore.isAllSelected).toBe(false);
    });

    it('should call refreshChampions', () => {
      filterStore.changeFilterByRung(RungFilter.high);

      expect(mockChampionsStore.refreshChampions).toHaveBeenCalled();
    });
  });

  describe('isSelectedRung', () => {
    it('should return true for selected rung', () => {
      filterStore.changeFilterByRung(RungFilter.max);

      expect(filterStore.isSelectedRung(RungFilter.max)).toBe(true);
      expect(filterStore.isSelectedRung(RungFilter.low)).toBe(false);
    });
  });

  describe('filtersContain', () => {
    it('should return true if filter is in typesOfFilters', () => {
      filterStore.changeProperties(RoleFilter.apk);

      expect(filterStore.filtersContain(RoleFilter.apk)).toBe(true);
      expect(filterStore.filtersContain(RoleFilter.tank)).toBe(false);
    });
  });

  describe('resetFilters', () => {
    it('should reset all filters to initial state', () => {
      filterStore.changeProperties(RoleFilter.tank);
      filterStore.changeProperties(PositionFilter.mid);
      filterStore.changeFilterByRung(RungFilter.max);

      filterStore.resetFilters();

      expect(filterStore.isAllSelected).toBe(true);
      expect(filterStore.typesOfFilters.size).toBe(0);
      expect(filterStore.selectedRung).toBeUndefined();
      expect(mockChampionsStore.showAllChampions).toHaveBeenCalled();
    });
  });
});
