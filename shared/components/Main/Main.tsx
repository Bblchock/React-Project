import { ReactNode } from 'react';

import { UiMain } from './styles';

type MainProps = {
  children: ReactNode;
};

export const Main = ({ children }: MainProps) => {
  return <UiMain>{children}</UiMain>;
};
