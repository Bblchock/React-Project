import { useEffect } from 'react';

import { observer } from 'mobx-react-lite';

import {
  CssBaseline,
  ErrorBoundary,
  GlobalStyles,
  SkipLink,
  ThemeProvider,
  useNavigate,
  Main,
  Routing,
} from 'shared';

import { themeStore, settingsStore } from 'data';

import { AppBar, Drawer, ThemeBar } from 'modules';

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
      <SkipLink />
      <AppBar />
      <Drawer />
      <ThemeBar />

      <Main id="main-content" tabIndex={-1}>
        <ErrorBoundary>
          <Routing />
        </ErrorBoundary>
      </Main>
    </ThemeProvider>
  );
});
