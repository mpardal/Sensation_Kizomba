import { CircularProgress, Fade, Typography } from '@mui/material';
import React from 'react';
import { useEvents } from '@/hooks/use-events';
import { cityKeyToCityName } from '@/utils/city-key-to-city-name';
import type { AppEvent } from '@/types/app-event';
import EventCard from '@/components/event-card';
import { slugifyEventLink } from '@/utils/slugify-event-link';

function City({ city, events }: { city: string; events?: AppEvent[] }) {
  const eventsQuery = useEvents(city, {
    initialData: events,
  });

  return (
    <div>
      {/*Appel le composant Events*/}
      <div className="m-3">
        <Typography className="ml-3" gutterBottom variant="h2">
          {cityKeyToCityName(city)}
        </Typography>
        {eventsQuery.isLoading ? (
          <div className="flex justify-center">
            <CircularProgress variant="indeterminate" />
          </div>
        ) : null}

        <Fade in={eventsQuery.isSuccess}>
          <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:gap-y-12">
            {eventsQuery.isSuccess ? (
              <div className="flex flex-col w-full mx-auto grow overflow-auto gap-3 px-4">
                {eventsQuery.data.map((event) => (
                  <EventCard
                    address={event.address}
                    date={event.date}
                    images={event.images}
                    key={event.id}
                    linkDetails={slugifyEventLink(event)}
                    title={event.title}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default City;
