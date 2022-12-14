import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Head from 'next/head';
import React from 'react';
import type { AppProps } from 'next/app';
import type { NextPageWithLayout } from '@/components/layout';
import MuiTheme from '../components/mui-theme';
import FirebaseAuthProvider from '../hooks/auth/use-auth';
import GlobalSnackbarProvider from '../hooks/use-global-snackbar';
import '../styles/globals.css';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>SENSATION-KIZOMBA</title>
      </Head>
      <MuiTheme>
        <QueryClientProvider client={queryClient}>
          <GlobalSnackbarProvider>
            <FirebaseAuthProvider>
              {Layout(<Component {...pageProps} />)}
            </FirebaseAuthProvider>
          </GlobalSnackbarProvider>
        </QueryClientProvider>
      </MuiTheme>
    </>
  );
}

export default MyApp;
