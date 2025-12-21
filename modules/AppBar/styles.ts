import { AppBarProps } from './AppBar';

import { MuiAppBar, styled } from 'shared';

export const UiAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'drawerWidth',
})<AppBarProps>`
  background-color: ${({ theme }) => theme.palette.background.default};
  transition: ${({ theme }) =>
    theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })};

  width: ${({ open, drawerWidth }) =>
    open ? `calc(100% - ${drawerWidth}px)` : '100%'};
  margin-left: ${({ open, drawerWidth }) => (open ? drawerWidth : 0)};
`;
