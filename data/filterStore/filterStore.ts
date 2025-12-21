import { makeAutoObservable } from 'mobx';

import { PositionFilter, RoleFilter, RungFilter } from '../enums';
import { ChampionsStore, championsStore } from '../championsStore';

export class FilterStore {
  public isAllSelected: boolean = true;
  public typesOfFilters: Set<PositionFilter | RoleFilter> = new Set();
  public selectedRung?: RungFilter;

  constructor(private readonly championsStore: ChampionsStore) {
    makeAutoObservable(this, {}, { autoBind: true });
  }

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

export const createFilterStore = () => new FilterStore(championsStore);
