import { Typography } from '@mui/material';
import type { AppEvent } from '@/types/app-event';
import { slugifyEventLink } from '@/utils/slugify-event-link';
import Event from './event';

function Events({ events }: { events: AppEvent[] }) {
  return (
    <div className="flex justify-center items-center flex-wrap gap-4">
      {events.length === 0 && (
        <Typography className="text-center my-8" variant="h5">
          Aucun événement
        </Typography>
      )}

      {events.map((doc) => {
        const { title, address, date } = doc;

        return (
          <Event
            address={address}
            date={date}
            key={doc.id}
            linkDetails={slugifyEventLink(doc)}
            title={title}
          />
        );
      })}
    </div>
  );
}

export default Events;
