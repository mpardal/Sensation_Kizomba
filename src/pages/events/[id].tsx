import React from 'react';
import Layout from '../../components/layout';
import { useEvent } from '../../hooks/use-event';
import Event from '../../components/event';
import type { NextPageWithLayout } from '../../components/layout';
import type { GetServerSideProps } from 'next';

interface EventPageProps {
  id: string;
}

const EventPage: NextPageWithLayout<EventPageProps> = ({ id }) => {
  // [id].tsx - events/slug-conexao
  const event = useEvent(id);

  const eventData = event.data?.data();

  return (
    <div className="px-4">
      {event.isSuccess && eventData && (
        <Event
          address={eventData.address}
          city={eventData.city}
          date={eventData.date.seconds.toString()}
          dj={eventData.dj}
          image="/mardi.jpeg"
          linkDetails={`/events/${event.data.id}`}
          teacher={eventData.teacher}
          title={eventData.title}
        />
      )}
    </div>
  );
};

EventPage.Layout = function ContactLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps<EventPageProps> = async (
  ctx,
  // eslint-disable-next-line @typescript-eslint/require-await
) => {
  const id = ctx.query.id as string;

  return {
    props: {
      id,
    },
  };
};

export default EventPage;
