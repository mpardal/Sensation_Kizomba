import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout';
import City from '../components/ui/city';
import type { NextPageWithLayout } from '../components/layout';

const Bordeaux: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>SENSATION-KIZOMBA — Événements à Bordeaux</title>
      </Head>
      <City city="bordeaux" />
    </>
  );
};

Bordeaux.Layout = function BordeauxLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Bordeaux;
