import { observer } from 'mobx-react-lite';

import { Wrapper } from './styles';
import { SpeedDial } from './SpeedDial';

import {
  SpeedDialAction,
  DarkModeIcon,
  PaletteIcon,
  Brightness7Icon,
} from 'shared';

import { COLORS, themeModes, themeStore } from 'data';

export const ThemeBar = observer(() => {
  const { isDarkMode, palette, setDarkMode, setPrimaryColor } = themeStore;

  const iconColor = isDarkMode
    ? themeModes.lightMode.background.default
    : themeModes.darkMode.background.default;

  return (
    <Wrapper>
      <SpeedDial
        ariaLabel="themeMode"
        icon={isDarkMode ? <DarkModeIcon /> : <Brightness7Icon />}
        isDarkMode={isDarkMode}
      >
        <SpeedDialAction
          key="Light"
          icon={<Brightness7Icon htmlColor={iconColor} />}
          tooltipTitle="Light"
          onClick={() => setDarkMode(false)}
        />
        <SpeedDialAction
          key="Dark"
          icon={<DarkModeIcon htmlColor={iconColor} />}
          tooltipTitle="Dark"
          onClick={() => setDarkMode(true)}
        />

        {Object.values(COLORS).map((color) => (
          <SpeedDialAction
            key={color}
            icon={<PaletteIcon htmlColor={palette[color].main} />}
            tooltipTitle={color}
            onClick={() => setPrimaryColor(color)}
          />
        ))}
      </SpeedDial>
    </Wrapper>
  );
});
