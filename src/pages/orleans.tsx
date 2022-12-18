import Head from 'next/head';
import React from 'react';
import type { GetStaticProps } from 'next';
import { dehydrate } from '@tanstack/react-query';
import Layout from '@/components/layout';
import City from '@/components/ui/city';
import type { NextPageWithLayout } from '@/components/layout';
import { initHydration } from '@/utils/react-query/ssr';
import { logger } from '@/utils/logger';
import {
  staticPropsRevalidate,
  staticPropsRevalidateError,
} from '@/utils/static-props';
import { fetchEvents, getEventsQueryKey } from '@/hooks/use-events';
import { serializeQuerySnapshot } from '@/utils/serialize-snapshot';

const Orleans: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>SENSATION-KIZOMBA — Événements à Orléans</title>
      </Head>
      <City city="orleans" />
    </>
  );
};

Orleans.Layout = function OrleansLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const { queryClient, hydrate } = initHydration();

  try {
    await hydrate();
    await queryClient.fetchQuery(getEventsQueryKey('orleans'), async () => {
      const eventsQuerySnapshot = await fetchEvents('orleans');

      return serializeQuerySnapshot(eventsQuerySnapshot);
    });
  } catch (err) {
    logger.error('prefetch error', err);

    return {
      notFound: true,
      revalidate: staticPropsRevalidateError,
    };
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: staticPropsRevalidate,
  };
};

export default Orleans;
