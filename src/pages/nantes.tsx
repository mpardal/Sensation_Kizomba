import Head from 'next/head';
import React from 'react';
import type { NextPageWithLayout } from '@/components/layout';
import { withStaticQuerySSR } from '@/utils/react-query/ssr';
import { staticPropsRevalidate } from '@/utils/static-props';
import City from '@/components/ui/city';
import Layout from '@/components/layout';
import { fetchEvents, getEventsQueryKey } from '@/hooks/use-events';
import { serializeQuerySnapshot } from '@/utils/serialize-snapshot';
import MetaForCity from '@/components/meta-for-city';

const Nantes: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>SENSATION-KIZOMBA — Les événements à Nantes</title>
        <MetaForCity city="nantes" />
      </Head>
      <City city="nantes" />
    </>
  );
};

Nantes.Layout = function ContactLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps = withStaticQuerySSR(async (_, queryClient) => {
  await queryClient.fetchQuery(getEventsQueryKey('nantes'), async () => {
    const eventsQuerySnapshot = await fetchEvents('nantes');

    return serializeQuerySnapshot(eventsQuerySnapshot);
  });

  return {
    props: {},
    revalidate: staticPropsRevalidate,
  };
});

export default Nantes;
