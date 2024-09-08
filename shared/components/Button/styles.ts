import { MuiButton, styled } from '../external';

import { ButtonProps } from './Button';

export const UiButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<ButtonProps>`
  margin: ${({ theme }) => theme.spacing(0.1)};

  background-color: ${({ theme, isActive }) =>
    isActive ? theme.palette.primary.main : theme.palette.primary.light};

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
    border-color: ${({ theme }) => theme.palette.primary.dark}
`;
