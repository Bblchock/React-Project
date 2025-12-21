import { readLocalStorage, saveLocalStorage } from './utils';

import { RoutingData } from 'shared';

export const settingsData = {
  readDrawerState: (): boolean => {
    return readLocalStorage('drawer', true);
  },

  saveDrawerState: (drawerState: boolean): void => {
    saveLocalStorage('drawer', drawerState);
  },

  readCurrentPage: (): RoutingData | null => {
    return readLocalStorage<RoutingData | null>('currentPage', null);
  },

  saveCurrentPage: (currentPage: RoutingData): void => {
    saveLocalStorage('currentPage', currentPage);
  },
};

export type settingsDataType = typeof settingsData;
