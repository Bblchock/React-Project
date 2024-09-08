import { ReactElement } from 'react';

import { HomePage } from 'pages/HomePage';

import { HomeIcon, PhoneIcon, TuneIcon } from '../../icons';

import { ChampionsFilterLazy, ContactsLazy } from './constants';

export type RoutingData = {
  title: string;
  icon: ReactElement;
  path: string;
  module: ReactElement;
  id: number;
};

export const routeList: RoutingData[] = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    path: '/home',
    module: <HomePage />,
    id: 1,
  },
  {
    title: 'Champion Filter',
    icon: <TuneIcon />,
    path: '/champions',
    module: <ChampionsFilterLazy />,
    id: 2,
  },
  {
    title: 'Contacts',
    icon: <PhoneIcon />,
    path: '/contacts',
    module: <ContactsLazy />,
    id: 3,
  },
];
