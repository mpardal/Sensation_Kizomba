import {
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Grow,
  Typography,
} from '@mui/material';
import React from 'react';
import { useEvents } from '@/hooks/use-events';
import { cityKeyToCityName } from '@/utils/city-key-to-city-name';
import Events from '../events';

function City({ city }: { city: string }) {
  const eventsSnapshot = useEvents(city);

  return (
    <div>
      {/*Appel le composant Events*/}
      <div className="m-3 lg:m-5">
        <Typography gutterBottom variant="h2">
          {cityKeyToCityName(city)}
        </Typography>

        {eventsSnapshot.isLoading ? (
          <div className="flex justify-center">
            <CircularProgress variant="indeterminate" />
          </div>
        ) : null}

        <Grow in={eventsSnapshot.isSuccess}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 sm:gap-y-12">
            {eventsSnapshot.data ? (
              <>
                <Card className="flex flex-col">
                  <CardHeader
                    title="Événements hebdomadaires"
                    titleTypographyProps={{ variant: 'h4', component: 'h4' }}
                  />

                  <CardContent className="grow flex justify-center">
                    <Events
                      events={eventsSnapshot.data.docs.filter(
                        (d) => d.data().type === 'weekly',
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
                    <Events
                      events={eventsSnapshot.data.docs.filter(
                        (d) => d.data().type === 'monthly',
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
                    <Events
                      events={eventsSnapshot.data.docs.filter(
                        (d) => d.data().type === 'quarterly',
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
                    <Events
                      events={eventsSnapshot.data.docs.filter(
                        (d) => d.data().type === 'yearly',
                      )}
                    />
                  </CardContent>
                </Card>
              </>
            ) : null}
          </div>
        </Grow>
      </div>
    </div>
  );
}

export default City;
