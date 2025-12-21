import { makeAutoObservable } from 'mobx';
import { createTheme } from '@mui/material/styles';

import { themeData, themeDataType } from './methods';
import { COLORS } from './enums';
import { CustomPalette, palette, themeModes } from './constants';

import { Theme } from 'shared';

class ThemeStore {
  public theme: Theme = createTheme({});
  public isDarkMode: boolean = false;
  public primaryColor: COLORS = COLORS.RED;

  constructor(
    private readonly themeData: themeDataType,
    public readonly palette: CustomPalette,
  ) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.readSavedTheme();
    this.refreshTheme();
  }

  public setDarkMode(isDarkMode: boolean): void {
    this.isDarkMode = isDarkMode;
    this.refreshTheme();
    this.themeData.saveIsDarkMode(this.isDarkMode);
  }

  public setPrimaryColor(color: COLORS): void {
    this.primaryColor = color;
    this.refreshTheme();
    this.themeData.saveThemeColor(this.primaryColor);
  }

  private readSavedTheme(): void {
    const [isDarkMode, primaryColor] = this.themeData.readSavedTheme();
    this.isDarkMode = isDarkMode;
    this.primaryColor = COLORS[primaryColor];
  }

  private refreshTheme(): void {
    const currentMode = this.isDarkMode
      ? themeModes.darkMode
      : themeModes.lightMode;

    this.theme = createTheme({
      palette: {
        ...currentMode,
        primary: this.palette[this.primaryColor],
      },
    });
  }
}

export const themeStore = new ThemeStore(themeData, palette);
