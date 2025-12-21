import { makeAutoObservable } from 'mobx';

import { settingsData, settingsDataType } from './methods';

import { RoutingData, routeList } from 'shared';

const DEFAULT_PAGE: RoutingData = routeList[0];

export class SettingsStore {
  public isDrawerOpen: boolean = true;
  public currentPage: RoutingData = DEFAULT_PAGE;
  public drawerWidth: number = 220;

  constructor(private readonly settingsData: settingsDataType) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.refreshSettings();
  }

  private refreshSettings(): void {
    this.isDrawerOpen = this.settingsData.readDrawerState();
    const savedPage = this.settingsData.readCurrentPage();
    this.currentPage = this.isValidPage(savedPage) ? savedPage : DEFAULT_PAGE;
  }

  private isValidPage(page: RoutingData | null): page is RoutingData {
    return (
      page !== null &&
      typeof page.id === 'number' &&
      typeof page.path === 'string'
    );
  }

  public setDrawerState(newDrawerState: boolean): void {
    this.isDrawerOpen = newDrawerState;
    this.settingsData.saveDrawerState(newDrawerState);
  }

  public setCurrentPage(currentPage: RoutingData): void {
    this.currentPage = currentPage;
    this.settingsData.saveCurrentPage(currentPage);
  }
}

export const settingsStore = new SettingsStore(settingsData);
