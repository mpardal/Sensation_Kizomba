import Head from 'next/head';
import React from 'react';
import { withStaticQuerySSR } from '@/utils/react-query/ssr';
import Layout from '@/components/layout';
import City from '@/components/ui/city';
import type { NextPageWithLayout } from '@/components/layout';
import { fetchEvents, getEventsQueryKey } from '@/hooks/use-events';
import MetaForCity from '@/components/meta-for-city';

const Angers: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>SENSATION-KIZOMBA — Les événements à Angers</title>
        <MetaForCity city="angers" />
      </Head>
      <City city="angers" />
    </>
  );
};

Angers.Layout = function AngersLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps = withStaticQuerySSR(async (_, queryClient) => {
  await queryClient.fetchQuery(getEventsQueryKey('angers'), () =>
    fetchEvents('angers'),
  );

  return {
    props: {},
  };
});

export default Angers;
