import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Head from 'next/head';
import React from 'react';
import type { AppProps } from 'next/app';
import dayjs from 'dayjs';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import type { NextPageWithLayout } from '@/components/layout';
import MuiTheme from '../components/mui-theme';
import FirebaseAuthProvider from '../hooks/auth/use-auth';
import GlobalSnackbarProvider from '../hooks/use-global-snackbar';
import 'dayjs/locale/fr';
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

dayjs.extend(LocalizedFormat);
dayjs.locale('fr');

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>SENSATION-KIZOMBA</title>
      </Head>
      <MuiTheme>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />

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
