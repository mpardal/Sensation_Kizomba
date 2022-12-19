import React from 'react';
import type { GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import type { CollectionReference } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';
import slugify from 'slugify';
import { useEvent } from '@/hooks/use-event';
import type { NextPageWithLayout } from '@/components/layout';
import Layout from '@/components/layout';
import DetailEvent from '@/components/detail-event';
import { database } from '@/config/firebase-config';
import type { AppEvent } from '@/types/app-event';
import { serializeQuerySnapshot } from '@/utils/serialize-snapshot';
import { staticPropsRevalidate } from '@/utils/static-props';
import { withStaticQuerySSR } from '@/utils/react-query/ssr';
import { fetchEvents, getEventsQueryKey } from '@/hooks/use-events';

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

export const getStaticPaths: GetStaticPaths<{
  id: string;
  slug: string;
}> = async () => {
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

export default EventPage;
