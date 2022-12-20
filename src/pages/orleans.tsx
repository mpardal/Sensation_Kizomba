import Head from 'next/head';
import React from 'react';
import Layout from '@/components/layout';
import City from '@/components/ui/city';
import type { NextPageWithLayout } from '@/components/layout';
import { withStaticQuerySSR } from '@/utils/react-query/ssr';
import { staticPropsRevalidate } from '@/utils/static-props';
import { fetchEvents, getEventsQueryKey } from '@/hooks/use-events';
import { serializeQuerySnapshot } from '@/utils/serialize-snapshot';

const Orleans: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>SENSATION-KIZOMBA — Les événements à Orléans</title>
      </Head>
      <City city="orleans" />
    </>
  );
};

Orleans.Layout = function OrleansLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps = withStaticQuerySSR(async (_, queryClient) => {
  await queryClient.fetchQuery(getEventsQueryKey('orleans'), async () => {
    const eventsQuerySnapshot = await fetchEvents('orleans');

    return serializeQuerySnapshot(eventsQuerySnapshot);
  });

  return {
    props: {},
    revalidate: staticPropsRevalidate,
  };
});

export default Orleans;
