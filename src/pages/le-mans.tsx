import Head from 'next/head';
import React from 'react';
import type { NextPageWithLayout } from '@/components/layout';
import { withStaticQuerySSR } from '@/utils/react-query/ssr';
import { staticPropsRevalidate } from '@/utils/static-props';
import City from '@/components/ui/city';
import Layout from '@/components/layout';
import { fetchEvents, getEventsQueryKey } from '@/hooks/use-events';
import { serializeQuerySnapshot } from '@/utils/serialize-snapshot';

const LeMans: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>SENSATION-KIZOMBA — Les événements au Mans</title>
      </Head>
      <City city="le-mans" />
    </>
  );
};

LeMans.Layout = function LeMansLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps = withStaticQuerySSR(async (_, queryClient) => {
  await queryClient.fetchQuery(getEventsQueryKey('le-mans'), async () => {
    const eventsQuerySnapshot = await fetchEvents('le-mans');

    return serializeQuerySnapshot(eventsQuerySnapshot);
  });

  return {
    props: {},
    revalidate: staticPropsRevalidate,
  };
});

export default LeMans;
