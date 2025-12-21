import { UiSpeedDial } from './styles';

import { type SpeedDialProps } from 'shared';

export interface CustomSpeedDial extends SpeedDialProps {
  isDarkMode: boolean;
}

export const SpeedDial = (props: CustomSpeedDial) => {
  return <UiSpeedDial {...props}></UiSpeedDial>;
};
