import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Divider,
  IconButton,
  routeList,
} from 'shared';
import { settingsStore, themeStore } from 'data';
import { observer } from 'mobx-react-lite';

import { DrawerHeader, UiDrawer } from './styles';
import { Nav } from './Nav';

export const Drawer = observer(() => {
  const { drawerWidth, isDrawerOpen, setDrawerState, setCurrentPage } =
    settingsStore;
  const { theme } = themeStore;

  return (
    <UiDrawer
      variant="persistent"
      anchor="left"
      open={isDrawerOpen}
      drawerWidth={drawerWidth}
    >
      <DrawerHeader>
        <IconButton onClick={() => setDrawerState(false)}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Nav setCurrentPage={setCurrentPage} routeList={routeList} />
    </UiDrawer>
  );
});
