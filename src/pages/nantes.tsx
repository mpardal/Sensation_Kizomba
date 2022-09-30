import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout';
import City from '../components/ui/city';
import type { NextPageWithLayout } from '../components/layout';

const Nantes: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>SENSATION-KIZOMBA — Événements à Nantes</title>
      </Head>
      <City city="Nantes" />
    </>
  );
};

Nantes.Layout = function ContactLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Nantes;
