import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout';
import City from '../components/ui/city';
import type { NextPageWithLayout } from '../components/layout';

const Orleans: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>SENSATION-KIZOMBA — Événements à Orléans</title>
      </Head>
      <City city="Orléans" />
    </>
  );
};

Orleans.Layout = function OrleansLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Orleans;
