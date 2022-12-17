import { Typography } from '@mui/material';
import React from 'react';
import Layout from '@/components/layout';
import type { NextPageWithLayout } from '@/components/layout';
import { useNextEvents } from '@/hooks/use-next-events';
import { slugifyEventLink } from '@/utils/slugify-event-link';
import Event from '@/components/event';

const Home: NextPageWithLayout = () => {
  const nextEvents = useNextEvents();

  return (
    <div>
      <Typography className="text-center mb-10" component="h1" variant="h3">
        Prochains événements
      </Typography>
      {nextEvents.isSuccess ? (
        <div className="flex flex-col w-3/4 mx-auto grow overflow-auto gap-3">
          {nextEvents.data.docs.map((event) => {
            const data = event.data();

            return (
              <Event
                address={data.address}
                date={data.date}
                key={event.id}
                linkDetails={slugifyEventLink(data, event)}
                title={data.title}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

Home.Layout = function HomeLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
