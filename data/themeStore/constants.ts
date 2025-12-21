import { COLORS } from './enums.ts';

import { Palette, PaletteMode, TypeBackground } from 'shared';

export type Color = {
  main: string;
  light: string;
  dark: string;
};

export type ThemeMode = {
  mode: PaletteMode;
  background: TypeBackground;
};

export const themeModes: Record<'darkMode' | 'lightMode', ThemeMode> = {
  darkMode: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#242424',
    },
  },
  lightMode: {
    mode: 'light',
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
  },
};

export type CustomPalette = Record<COLORS, Palette['primary']>;

export const palette: CustomPalette = {
  ORANGE: {
    main: '#f8a131',
    light: '#f8d09c',
    dark: '#ff960d',
    contrastText: '#000',
  },
  BLUE: {
    main: '#1792f7',
    light: '#94c9f5',
    dark: '#007de4',
    contrastText: '#000',
  },
  GREEN: {
    main: '#8bc34a',
    light: '#c4e79c',
    dark: '#6cca00',
    contrastText: '#000',
  },
  RED: {
    main: '#ff5f2e',
    light: '#ffa488',
    dark: '#ff3c00',
    contrastText: '#000',
  },
};

//Проверить наличие списка чемпионов в LS
export const getChampionsLS = () => {
  const data = localStorage.getItem('championsData');
  return data ? JSON.parse(data) : [];
};
