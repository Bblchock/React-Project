import { makeAutoObservable } from 'mobx';

import { type Champion } from '../types';
import { PositionFilter, RoleFilter, RungFilter } from '../enums';
import { champions } from '../champions';

export class ChampionsStore {
  public champions: Champion[];

  private previousRung?: RungFilter;
  private allChampions: Champion[];
  private filteredByRung: Champion[];

  constructor(championsData: Champion[]) {
    this.allChampions = championsData;
    this.champions = championsData;
    this.filteredByRung = championsData;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public showAllChampions(): void {
    this.champions = this.allChampions;
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

  public refreshChampions(
    targetProperty: Set<PositionFilter | RoleFilter>,
    targetRung?: RungFilter,
  ) {
    if (targetRung && this.previousRung !== targetRung) {
      this.filteredByRung = this.getFilteredByRung(targetRung);
      this.previousRung = targetRung;
    } else {
      this.filteredByRung = this.allChampions;
    }

    if (targetProperty.size) {
      this.champions = this.getFilteredByProperties(Array.from(targetProperty));
    } else {
      this.champions = this.filteredByRung;
    }
  }

  private isTargetRung(
    rung: Champion['rung'],
    targetRung: RungFilter,
  ): boolean {
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

export const championsStore = new ChampionsStore(champions);
