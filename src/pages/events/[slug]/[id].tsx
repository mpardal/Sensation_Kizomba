import React from 'react';
import type { GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import type { CollectionReference } from 'firebase/firestore';
import { collection, getDocs, Timestamp } from 'firebase/firestore';
import slugify from 'slugify';
import Head from 'next/head';
import { stripHtml } from 'string-strip-html';
import { fetchEvent, getEventQueryKey, useEvent } from '@/hooks/use-event';
import type { NextPageWithLayout } from '@/components/layout';
import Layout from '@/components/layout';
import DetailEvent from '@/components/detail-event';
import { database } from '@/config/firebase-config';
import type { AppEvent } from '@/types/app-event';
import { withStaticQuerySSR } from '@/utils/react-query/ssr';
import { generateEventJsonLd } from '@/utils/seo/generate-event-json-ld';
import {
  cityKeyToCityName,
  cityNameForPageTitle,
} from '@/utils/city-key-to-city-name';
import { appEventFormatDate } from '@/utils/app-event-format-date';
import MetaForDescription from '@/components/meta-for-description';
import MetaForTitle from '@/components/meta-for-title';

const EventPage: NextPageWithLayout = () => {
  const router = useRouter();

  const id = router.query.id as string | undefined;

  // [id].tsx - events/slug-conexao/[id].tsx
  const event = useEvent(id);
  const pageTitle = `SENSATION-KIZOMBA —
  ${
    event.data?.title
      ? ` ${event.data.title} ${cityNameForPageTitle(
          cityKeyToCityName(event.data.city),
        )} le ${appEventFormatDate(Timestamp.fromMillis(event.data.date.from))}`
      : ' Événement'
  }`;

  //Retourne le component event en intégrant les données récupéré dans Firebase
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <MetaForTitle title={pageTitle} />
        <MetaForDescription
          description={`${
            event.data?.title ?? ''
          } - Événement organisé par Sensation Kizomba. ${
            stripHtml(event.data?.description.slice(0, 400) ?? '').result
          }...`}
        />
        <script
          dangerouslySetInnerHTML={generateEventJsonLd(event.data)}
          id="event-json-ld"
          key="event-jsonld"
          type="application/ld+json"
        />
      </Head>
      <div className="px-4">
        {event.isSuccess ? (
          <DetailEvent
            address={event.data.address}
            city={event.data.city}
            date={event.data.date}
            description={event.data.description}
            title={event.data.title}
            weezeventUrl={event.data.weezeventUrl}
          />
        ) : null}
      </div>
    </>
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

export const getStaticProps = withStaticQuerySSR(async (ctx, queryClient) => {
  const id = ctx.params?.id as string | undefined;

  await queryClient.fetchQuery(getEventQueryKey(id), () => fetchEvent(id));

  return {
    props: {},
  };
});

export default EventPage;
