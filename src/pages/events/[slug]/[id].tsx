/* eslint-disable no-console */
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
  console.log('start eventPage render');
  // [id].tsx - events/slug-conexao/[id].tsx
  const event = useEvent(id);
  console.log('useEvent');

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
  console.log('yo');

  return <Layout>{page}</Layout>;
};

//fonction provenant de Nextjs
export const getServerSideProps: GetServerSideProps<EventPageProps> = async (
  ctx,
  // eslint-disable-next-line @typescript-eslint/require-await
) => {
  console.log('start function getServerSideProps');
  //Utiliser pour gérér la récupération des routes dynamiques
  const id = ctx.query.id as string;
  console.log('get id', id);
  console.log('return id', { props: { id } });

  return {
    props: {
      //Renseigne le paramètre à renvoyer
      id,
    },
  };
};

export default EventPage;
/* eslint-enable no-console */
