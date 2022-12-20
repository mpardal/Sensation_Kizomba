/*
 * Copyright (c) 2022 Kiyozz~WK~WushuLate.
 *
 * All rights reserved.
 *
 */

import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';
import { red } from '@mui/material/colors';
import type { PropsWithChildren } from 'react';
import type { PaletteOptions } from '@mui/material';

function MuiTheme({ children }: PropsWithChildren) {
  const palette: PaletteOptions = {
    mode: 'dark',
    // couleurs à définir
    primary: { main: '#dbb12b', light: '#dbb12b', dark: '#dbb12b' },
    secondary: { main: '#2cb67d', light: '#3fc68e' },
    error: { main: red['300'], light: '#e45858' },
  };

  const theme = createTheme({
    palette,
    zIndex: {
      appBar: 20,
      drawer: 20,
      modal: 40,
    },
    typography: {
      allVariants: {
        fontFamily: "'Inter', 'Helvetica Neue', 'sans-serif'",
      },
      h1: {
        fontFamily: "'Alatsi', 'Inter', 'Helvetica Neue', 'sans-serif'",
      },
      h2: {
        fontFamily: "'Alatsi', 'Inter', 'Helvetica Neue', 'sans-serif'",
      },
      h3: {
        fontFamily: "'Alatsi', 'Inter', 'Helvetica Neue', 'sans-serif'",
      },
    },
    components: {
      MuiAppBar: {
        defaultProps: {
          position: 'sticky',
        },
      },
      MuiTypography: {
        defaultProps: {
          gutterBottom: false,
        },
      },
      MuiButton: {
        defaultProps: {
          type: 'button',
        },
        styleOverrides: {
          root: {
            // supprime le uppercase par défaut de mui
            textTransform: 'none',
          },
        },
      },
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      {/* le problème de couleur venait d'ici, il fallait d'abord mettre ThemeProvider puis CssBaseline, là où on avait l'inverse */}
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MuiTheme;
