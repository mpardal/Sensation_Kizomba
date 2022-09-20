/*
 * Copyright (c) 2022 Kiyozz~WK~WushuLate.
 *
 * All rights reserved.
 *
 */

import type { PaletteOptions } from '@mui/material'
import { createTheme, CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material'
import red from '@mui/material/colors/red'
import React from 'react'

function MuiTheme({ children }: React.PropsWithChildren) {
  const palette: PaletteOptions = {
    mode: 'dark',
    primary: { main: '#dbb12b', light: '#dbb12b', dark: '#dbb12b' },
    secondary: { main: '#2cb67d', light: '#3fc68e' },
    error: { main: red['300'], light: '#e45858' },
  }

  const theme = createTheme({
    palette,
    zIndex: {
      appBar: 20,
      drawer: 20,
      modal: 40,
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
            textTransform: 'none',
          },
        },
      },
    },
  })

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default MuiTheme
