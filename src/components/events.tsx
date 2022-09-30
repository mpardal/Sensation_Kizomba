import { Typography } from '@mui/material';
import Event from './event';
import type { QueryDocumentSnapshot } from 'firebase/firestore';
import type { AppEvent } from '../types/app-event';

function Events({
  events: eventsSnapshot,
}: {
  events: QueryDocumentSnapshot<AppEvent>[];
}) {
  return (
    <div className="flex justify-center items-center flex-wrap gap-4">
      {eventsSnapshot.length === 0 && (
        <Typography className="text-center my-8" variant="h5">
          Aucun événement
        </Typography>
      )}

      {eventsSnapshot.map((doc) => {
        const { title, city, address, date, teacher, dj } = doc.data();

        return (
          <Event
            address={address}
            city={city}
            date={date}
            dj={dj}
            key={doc.id}
            linkDetails={`/events/${doc.id}`}
            teacher={teacher}
            title={title}
          />
        );
      })}
    </div>
  );
}

export default Events;
