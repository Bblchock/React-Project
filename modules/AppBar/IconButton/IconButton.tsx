import { UiIconButton } from './styles';

import type { MuiIconButtonProps } from 'shared';

import { settingsStore } from 'data';

export interface IconButtonProps extends MuiIconButtonProps {
  isDrawerOpen: boolean;
  drawerWidth: number;
}

export const IconButton = ({ children }: MuiIconButtonProps) => {
  const { isDrawerOpen, drawerWidth, setDrawerState } = settingsStore;

  return (
    <UiIconButton
      isDrawerOpen={isDrawerOpen}
      drawerWidth={drawerWidth}
      aria-label="open drawer"
      onClick={() => setDrawerState(true)}
      edge="start"
    >
      {children}
    </UiIconButton>
  );
};
