import React from 'react';
import type { GetServerSideProps } from 'next';
import { useEvent } from '@/hooks/use-event';
import type { NextPageWithLayout } from '@/components/layout';
import Layout from '@/components/layout';
import DetailEvent from '@/components/detail-event';

interface EventPageProps {
  //Type le paramètre id
  id: string;
}

const EventPage: NextPageWithLayout<EventPageProps> = ({ id }) => {
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
        />
      ) : null}
    </div>
  );
};

// Intègre les éléments de base de la page (graphisme)
EventPage.Layout = function ContactLayout(page) {
  return <Layout>{page}</Layout>;
};

//fonction provenant de Nextjs
export const getServerSideProps: GetServerSideProps<EventPageProps> = async (
  ctx,
  // eslint-disable-next-line @typescript-eslint/require-await
) => {
  //Utiliser pour gérér la récupération des routes dynamiques
  const id = ctx.query.id as string;

  return {
    props: {
      //Renseigne le paramètre à renvoyer
      id,
    },
  };
};

export default EventPage;
