import {
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Fade,
  Typography,
} from '@mui/material';
import React from 'react';
import { limit } from 'firebase/firestore';
import { useEvents } from '@/hooks/use-events';
import { cityKeyToCityName } from '@/utils/city-key-to-city-name';
import type { AppEvent } from '@/types/app-event';
import EventsCardList from '../events-card-list';

function City({ city, events }: { city: string; events?: AppEvent[] }) {
  const eventsQuery = useEvents(city, {
    initialData: events,
  });

  return (
    <div>
      {/*Appel le composant Events*/}
      <div className="m-3 lg:m-5">
        <Typography gutterBottom variant="h2">
          {cityKeyToCityName(city)}
        </Typography>
        {eventsQuery.isLoading ? (
          <div className="flex justify-center">
            <CircularProgress variant="indeterminate" />
          </div>
        ) : null}

        <Fade in={eventsQuery.isSuccess}>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-12 gap-y-8 sm:gap-y-12">
            {eventsQuery.data ? (
              <>
                <Card className="flex flex-col">
                  <CardHeader
                    title="Événements hebdomadaires"
                    titleTypographyProps={{ variant: 'h4', component: 'h4' }}
                  />

                  <CardContent className="w-full">
                    <EventsCardList
                      events={eventsQuery.data.filter(
                        (d) => d.type === 'weekly',
                      )}
                    />
                  </CardContent>
                </Card>

                <Card className="flex flex-col">
                  <CardHeader
                    title="Événements mensuels"
                    titleTypographyProps={{ variant: 'h4', component: 'h4' }}
                  />
                  <CardContent className="grow flex justify-center">
                    <EventsCardList
                      events={eventsQuery.data.filter(
                        (d) => d.type === 'monthly',
                      )}
                    />
                  </CardContent>
                </Card>

                <Card className="flex flex-col">
                  <CardHeader
                    title="Événements trimestriels"
                    titleTypographyProps={{ variant: 'h4', component: 'h4' }}
                  />

                  <CardContent className="grow flex justify-center">
                    <EventsCardList
                      events={eventsQuery.data.filter(
                        (d) => d.type === 'quarterly',
                      )}
                    />
                  </CardContent>
                </Card>

                <Card className="flex flex-col">
                  <CardHeader
                    title="Événements annuels"
                    titleTypographyProps={{ variant: 'h4', component: 'h4' }}
                  />
                  <CardContent className="grow flex justify-center">
                    <EventsCardList
                      events={eventsQuery.data.filter(
                        (d) => d.type === 'yearly',
                      )}
                    />
                  </CardContent>
                </Card>
              </>
            ) : null}
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default City;
