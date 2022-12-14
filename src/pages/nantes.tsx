import Head from 'next/head';
import React from 'react';
import type { NextPageWithLayout } from '@/components/layout';
import Layout from '../components/layout';
import City from '../components/ui/city';

const Nantes: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>SENSATION-KIZOMBA — Événements à Nantes</title>
      </Head>
      <City city="nantes" />
    </>
  );
};

Nantes.Layout = function ContactLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Nantes;
