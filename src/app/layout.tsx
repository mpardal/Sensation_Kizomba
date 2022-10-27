'use client';

import { Alert, Snackbar } from '@mui/material';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import MuiTheme from '../components/mui-theme';
import FirebaseAuthProvider from '../hooks/auth/use-auth';
import GlobalSnackbarProvider, {
  useGlobalSnackbar,
} from '../hooks/use-global-snackbar';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function Snack() {
  const { message, severity, hide, open, duration } = useGlobalSnackbar();

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      autoHideDuration={duration}
      onClose={hide}
      open={open}
    >
      <Alert onClose={hide} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
}

function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="fr">
      <head>
        <title>SENSATION-KIZOMBA</title>
      </head>
      <body>
        <MuiTheme>
          <QueryClientProvider client={queryClient}>
            <GlobalSnackbarProvider>
              <FirebaseAuthProvider>
                {children}
                <Snack />
              </FirebaseAuthProvider>
            </GlobalSnackbarProvider>
          </QueryClientProvider>
        </MuiTheme>
      </body>
    </html>
  );
}

export default RootLayout;
