import { Typography } from '@mui/material';
import type { AppEvent } from '@/types/app-event';
import { slugifyEventLink } from '@/utils/slugify-event-link';
import EventCard from './event-card';

function EventsCardList({ events }: { events: AppEvent[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 w-full">
      {events.length === 0 && (
        <Typography className="text-center my-8" variant="h5">
          Aucun événement
        </Typography>
      )}

      {events.map((doc) => {
        const { title, address, date, images } = doc;

        return (
          <EventCard
            address={address}
            date={date}
            images={images}
            key={doc.id}
            linkDetails={slugifyEventLink(doc)}
            title={title}
          />
        );
      })}
    </div>
  );
}

export default EventsCardList;
