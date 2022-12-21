import {
  QueryClientProvider,
  QueryClient,
  Hydrate,
} from '@tanstack/react-query';
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

type AppPropsWithLayout = AppProps<{ dehydratedState?: unknown }> & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 100_000,
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
        <link
          href="/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link href="/site.webmanifest" rel="manifest" />
        <link color="#191919" href="/safari-pinned-tab.svg" rel="mask-icon" />
        <meta content="#191919" name="msapplication-TileColor" />
        <meta content="#191919" name="theme-color" />
      </Head>
      <MuiTheme>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <ReactQueryDevtools />

            <GlobalSnackbarProvider>
              <FirebaseAuthProvider>
                {Layout(
                  <Component {...(pageProps as Record<never, unknown>)} />,
                )}
              </FirebaseAuthProvider>
            </GlobalSnackbarProvider>
          </Hydrate>
        </QueryClientProvider>
      </MuiTheme>
    </>
  );
}

export default MyApp;
