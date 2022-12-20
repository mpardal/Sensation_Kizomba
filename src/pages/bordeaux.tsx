import Head from 'next/head';
import React from 'react';
import { withStaticQuerySSR } from '@/utils/react-query/ssr';
import { staticPropsRevalidate } from '@/utils/static-props';
import Layout from '@/components/layout';
import City from '@/components/ui/city';
import type { NextPageWithLayout } from '@/components/layout';
import { fetchEvents, getEventsQueryKey } from '@/hooks/use-events';
import { serializeQuerySnapshot } from '@/utils/serialize-snapshot';
import MetaForCity from '@/components/meta-for-city';

const Bordeaux: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>SENSATION-KIZOMBA — Les événements à Bordeaux</title>
        <MetaForCity city="bordeaux" />
      </Head>
      <City city="bordeaux" />
    </>
  );
};

Bordeaux.Layout = function BordeauxLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps = withStaticQuerySSR(async (_, queryClient) => {
  await queryClient.fetchQuery(getEventsQueryKey('bordeaux'), async () => {
    const eventsQuerySnapshot = await fetchEvents('bordeaux');

    return serializeQuerySnapshot(eventsQuerySnapshot);
  });

  return {
    props: {},
    revalidate: staticPropsRevalidate,
  };
});

export default Bordeaux;
