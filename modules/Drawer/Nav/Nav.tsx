import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
  type RoutingData,
} from 'shared';
import { type SettingsStore } from 'data';

import { UiListItemButton } from './styles';

type NavProps = {
  setCurrentPage: SettingsStore['setCurrentPage'];
  routeList: RoutingData[];
};

export const Nav = ({ setCurrentPage, routeList }: NavProps) => {
  return (
    <List>
      {routeList.map(({ title, path, icon }, index) => (
        <Link
          to={path}
          key={`link-${title}`}
          onClick={() => setCurrentPage(routeList[index])}
        >
          <ListItem disablePadding>
            <UiListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={title} />
            </UiListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};
