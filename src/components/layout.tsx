import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import { useGlobalSnackbar } from '../hooks/use-global-snackbar';
import Footer from './footer';
import Header from './header';
import NextEventsBanner from './next-events-banner';
import PageContainer from './page-container';
import type { PropsWithChildren, ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  Layout?: (page: ReactElement) => ReactNode;
};

function Layout({ children }: PropsWithChildren) {
  const { message, severity, hide, open, duration } = useGlobalSnackbar();

  return (
    <div>
      <NextEventsBanner />
      <Header />
      <PageContainer>{children}</PageContainer>
      <Footer />
      {/*Permet d'afficher le message lors de la connexion*/}
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
    </div>
  );
}

export default Layout;
