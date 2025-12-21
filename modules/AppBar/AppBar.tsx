import { observer } from 'mobx-react-lite';

import { UiAppBar } from './styles';
import { IconButton } from './IconButton';

import { MenuIcon, type MuiAppBarProps, Toolbar, Typography } from 'shared';

import { settingsStore, themeStore } from 'data';

export interface AppBarProps extends MuiAppBarProps {
  open: boolean;
  drawerWidth: number;
}

export const AppBar = observer(() => {
  const { isDrawerOpen, drawerWidth, currentPage } = settingsStore;
  const { theme } = themeStore;

  return (
    <UiAppBar position="fixed" open={isDrawerOpen} drawerWidth={drawerWidth}>
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="h1"
          color={theme.palette.primary.main}
        >
          {currentPage.title}
        </Typography>
      </Toolbar>
    </UiAppBar>
  );
});
