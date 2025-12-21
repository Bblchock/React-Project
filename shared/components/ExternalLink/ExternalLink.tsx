import { type ReactNode } from 'react';

import { UiLink } from './styles';

type ExternalLinkProps = { children: ReactNode; to: string };

export const ExternalLink = ({ children, to }: ExternalLinkProps) => {
  return (
    <UiLink target="blank" href={to} rel="noopener">
      {children}
    </UiLink>
  );
};
