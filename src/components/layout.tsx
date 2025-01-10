import React from 'react';
import type { PropsWithChildren, ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Alert, Snackbar } from '@mui/material';
import PageContainer from '@/components/page-container';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useGlobalSnackbar } from '@/hooks/use-global-snackbar';
import NextEventsBanner from '@/components/next-events-banner';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  Layout?: (page: ReactElement) => ReactNode;
};

function Layout({ children }: PropsWithChildren) {
  const { message, severity, hide, open, duration } = useGlobalSnackbar();

  return (
    <div className="flex flex-col min-h-screen">
      <NextEventsBanner />
      <Header />
      <PageContainer>
        {children}
        <Analytics />
      </PageContainer>
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
