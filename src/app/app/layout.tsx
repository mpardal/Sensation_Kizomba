'use client';

import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import NextEventsBanner from '../../components/next-events-banner';
import PageContainer from '../../components/page-container';

function AppLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <NextEventsBanner />
      <Header />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </>
  );
}

export default AppLayout;
