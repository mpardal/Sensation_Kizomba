/*
 * Copyright (c) 2022 Kiyozz~WK~WushuLate.
 *
 * All rights reserved.
 *
 */

import type { PaletteMode, PaletteOptions } from '@mui/material'
import { createTheme, CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material'
import red from '@mui/material/colors/red'
import React from 'react'

function MuiTheme({ children }: React.PropsWithChildren) {
  const palette: PaletteOptions = {
    mode: 'dark',
    primary: { main: '#2c5896', light: '#3388ff', dark: '#1f3e69' },
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
        styleOverrides: {},
      },
    },
  })

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  )
}

export default MuiTheme
