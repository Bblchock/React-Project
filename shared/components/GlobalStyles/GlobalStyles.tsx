import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

export const GlobalStyles = () => (
  <MuiGlobalStyles
    styles={{
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
        fontFamily: "'Pangolin', cursive",
        letterSpacing: '1px',
        fontSize: '15px',
        textDecoration: 'none',
      },
      a: {
        color: 'inherit',
      },
    }}
  />
);
