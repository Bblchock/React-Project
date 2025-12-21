import { CustomSpeedDial } from './SpeedDial';

import { MuiSpeedDial, styled } from 'shared';

export const UiSpeedDial = styled(MuiSpeedDial, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})<CustomSpeedDial>`
  position: absolute;
  bottom: 16px;
  right: 16px;
  color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.palette.primary.main : theme.palette.primary.light};
`;
