import React from 'react';
import type { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEvent } from '@/hooks/use-event';
import type { NextPageWithLayout } from '@/components/layout';
import Layout from '@/components/layout';
import DetailEvent from '@/components/detail-event';

const EventPage: NextPageWithLayout = () => {
  const router = useRouter();

  const id = router.query.id as string | undefined;

  // [id].tsx - events/slug-conexao/[id].tsx
  const event = useEvent(id);

  const eventData = event.data?.data();

  //Retourne le component event en intégrant les données récupéré dans Firebase
  return (
    <div className="px-4">
      {event.isSuccess && eventData ? (
        <DetailEvent
          address={eventData.address}
          date={eventData.date}
          description={eventData.description}
          title={eventData.title}
          weezeventUrl={eventData.weezeventUrl}
        />
      ) : null}
    </div>
  );
};

// Intègre les éléments de base de la page (graphisme)
EventPage.Layout = function ContactLayout(page) {
  return <Layout>{page}</Layout>;
};

export default EventPage;
