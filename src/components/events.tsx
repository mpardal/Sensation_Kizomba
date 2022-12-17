import { Typography } from '@mui/material';
import type { QueryDocumentSnapshot } from 'firebase/firestore';
import type { AppEvent } from '@/types/app-event';
import { slugifyEventLink } from '@/utils/slugify-event-link';
import Event from './event';

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
        const { title, address, date } = doc.data();

        return (
          <Event
            address={address}
            date={date}
            key={doc.id}
            linkDetails={slugifyEventLink(doc.data(), doc)}
            title={title}
          />
        );
      })}
    </div>
  );
}

export default Events;
