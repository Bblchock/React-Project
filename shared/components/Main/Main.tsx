import { HTMLAttributes, ReactNode } from 'react';

import { UiMain } from './styles';

interface MainProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const Main = ({ children, ...props }: MainProps) => {
  return <UiMain {...props}>{children}</UiMain>;
};
