import { useEffect } from 'react';

import { observer } from 'mobx-react-lite';
import { AppBar, Drawer, ThemeBar } from 'modules';
import {
  CssBaseline,
  ErrorBoundary,
  GlobalStyles,
  ThemeProvider,
  useNavigate,
  Main,
  Routing,
} from 'shared';
import { themeStore, settingsStore } from 'data';

export const App = observer(() => {
  const navigate = useNavigate();
  const { currentPage } = settingsStore;

  useEffect(() => {
    if (currentPage.id !== 0) {
      navigate(currentPage.path);
    }
  }, [navigate, currentPage]);

  return (
    <ThemeProvider theme={themeStore.theme}>
      <CssBaseline />
      <GlobalStyles />
      <AppBar />
      <Drawer />
      <ThemeBar />

      <Main>
        <ErrorBoundary>
          <Routing />
        </ErrorBoundary>
      </Main>
    </ThemeProvider>
  );
});
