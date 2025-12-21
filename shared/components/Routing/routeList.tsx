import { type ReactNode } from 'react';

import { PhoneIcon, TuneIcon } from '../../icons';

import { ChampionsFilterLazy, ContactsLazy } from './constants';

export type RoutingData = {
  title: string;
  icon: ReactNode;
  path: string;
  module: ReactNode;
  id: number;
};

export const routeList: RoutingData[] = [
  {
    title: 'Champion Filter',
    icon: <TuneIcon />,
    path: '/champions',
    module: <ChampionsFilterLazy />,
    id: 1,
  },
  {
    title: 'Contacts',
    icon: <PhoneIcon />,
    path: '/contacts',
    module: <ContactsLazy />,
    id: 2,
  },
];
