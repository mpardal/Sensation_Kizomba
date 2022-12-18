import React from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { dehydrate } from '@tanstack/react-query';
import type { CollectionReference } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';
import slugify from 'slugify';
import { useEvent, getEventQueryKey, fetchEvent } from '@/hooks/use-event';
import type { NextPageWithLayout } from '@/components/layout';
import Layout from '@/components/layout';
import DetailEvent from '@/components/detail-event';
import { database } from '@/config/firebase-config';
import type { AppEvent } from '@/types/app-event';
import { serializeSnapshot } from '@/utils/serialize-snapshot';
import {
  staticPropsRevalidate,
  staticPropsRevalidateError,
} from '@/utils/static-props';
import { initHydration } from '@/utils/react-query/ssr';
import { logger } from '@/utils/logger';

const EventPage: NextPageWithLayout = () => {
  const router = useRouter();

  const id = router.query.id as string | undefined;

  // [id].tsx - events/slug-conexao/[id].tsx
  const event = useEvent(id);

  //Retourne le component event en intégrant les données récupéré dans Firebase
  return (
    <div className="px-4">
      {event.isSuccess ? (
        <DetailEvent
          address={event.data.address}
          date={event.data.date}
          description={event.data.description}
          title={event.data.title}
          weezeventUrl={event.data.weezeventUrl}
        />
      ) : null}
    </div>
  );
};

// Intègre les éléments de base de la page (graphisme)
EventPage.Layout = function ContactLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const eventsDocRef = collection(
    database,
    'events',
  ) as CollectionReference<AppEvent>;
  const eventSnapshots = await getDocs<AppEvent>(eventsDocRef);

  return {
    paths: eventSnapshots.docs.map((doc) => ({
      params: {
        id: doc.id,
        slug: slugify(doc.data().title),
      },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<
  Record<string, unknown>,
  { id: string }
> = async (ctx) => {
  const id = ctx.params?.id;

  if (!id) {
    return {
      notFound: true,
      revalidate: 60,
    };
  }

  const { queryClient, hydrate } = initHydration();

  try {
    await queryClient.fetchQuery(getEventQueryKey(id), async () => {
      const eventSnapshot = await fetchEvent(id);

      return serializeSnapshot(eventSnapshot);
    });
    await hydrate();
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

export default EventPage;
