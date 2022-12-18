import { Typography } from '@mui/material';
import React from 'react';
import { dehydrate } from '@tanstack/react-query';
import type { GetStaticProps } from 'next';
import Layout from '@/components/layout';
import type { NextPageWithLayout } from '@/components/layout';
import { useNextEvents } from '@/hooks/use-next-events';
import { slugifyEventLink } from '@/utils/slugify-event-link';
import Event from '@/components/event';
import {
  staticPropsRevalidate,
  staticPropsRevalidateError,
} from '@/utils/static-props';
import { initHydration } from '@/utils/react-query/ssr';
import { logger } from '@/utils/logger';

const Home: NextPageWithLayout = () => {
  const nextEvents = useNextEvents();

  return (
    <div>
      <Typography className="text-center mb-10" component="h1" variant="h3">
        Prochains événements
      </Typography>
      {nextEvents.isSuccess ? (
        <div className="flex flex-col w-full mx-auto grow overflow-auto gap-3 px-4">
          {nextEvents.data.map((event) => (
            <Event
              address={event.address}
              date={event.date}
              key={event.id}
              linkDetails={slugifyEventLink(event)}
              title={event.title}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

Home.Layout = function HomeLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const { queryClient, hydrate } = initHydration();

  try {
    await hydrate();
  } catch (err) {
    logger.error(err);

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

export default Home;
