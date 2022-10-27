import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout';
import City from '../components/ui/city';
import type { NextPageWithLayout } from '../components/layout';

const LeMans: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>SENSATION-KIZOMBA — Événements au Mans</title>
      </Head>
      <City city="Le Mans" />
    </>
  );
};

LeMans.Layout = function LeMansLayout(page) {
  return <Layout>{page}</Layout>;
};

export default LeMans;
