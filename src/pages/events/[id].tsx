import React from 'react';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import type { GetServerSideProps } from 'next';
import Layout from '../../components/layout';
import { useEvent } from '../../hooks/use-event';
import Event from '../../components/event';
import type { NextPageWithLayout } from '../../components/layout';

interface EventPageProps {
  //Type le paramètre id
  id: string;
}

const EventPage: NextPageWithLayout<EventPageProps> = ({ id }) => {
  // [id].tsx - events/slug-conexao
  const event = useEvent(id);

  const eventData = event.data?.data();
  dayjs.extend(localizedFormat); //Donne la possibilité de fixer une localisation pour le format d'affichage de la date

  //Retourne le component event en intégrant les données récupéré dans Firebase
  return (
    <div className="px-4">
      {event.isSuccess && eventData ? (
        <Event
          address={eventData.address}
          city={eventData.city}
          date={eventData.date}
          dj={eventData.dj}
          linkDetails={`/events/${event.data.id}`}
          teacher={eventData.teacher}
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
    //Renseigne le paramètre à renvoyer
    props: {
      id,
    },
  };
};

export default EventPage;
