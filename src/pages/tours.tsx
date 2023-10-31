import Head from 'next/head';
import React from 'react';
import Layout from '@/components/layout';
import City from '@/components/ui/city';
import type { NextPageWithLayout } from '@/components/layout';
import { withStaticQuerySSR } from '@/utils/react-query/ssr';
import { fetchEvents, getEventsQueryKey } from '@/hooks/use-events';
import MetaForCity from '@/components/meta-for-city';

const Tours: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>SENSATION-KIZOMBA — Les événements à Tours</title>
        <MetaForCity city="tours" />
      </Head>
      <City city="tours" />
    </>
  );
};

Tours.Layout = function ToursLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps = withStaticQuerySSR(async (_, queryClient) => {
  await queryClient.fetchQuery(getEventsQueryKey('tours'), () =>
    fetchEvents('tours'),
  );

  return {
    props: {},
  };
});

export default Tours;
