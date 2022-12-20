import type { AppEvent } from '@/types/app-event';
import { slugifyEventLink } from '@/utils/slugify-event-link';

export function generateEventJsonLd(event?: AppEvent) {
  if (!event) {
    return { __html: '' };
  }

  const fromDate = new Date(event.date.from);
  const toDate = event.date.to ? new Date(event.date.to) : undefined;

  return {
    __html: `{
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "${event.title}",
      "startDate": "${fromDate.toISOString()}",
      ${toDate ? `"endDate": "${toDate.toISOString()}",` : ''}
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "Place",
        "name": "${event.address}"
      },
      "description": "${event.description}",
      "url": "https://sensation-kizomba.fr/events/${slugifyEventLink(event)}",
      "organizer": {
        "@type": "Organization",
        "name": "Sensation Kizomba",
        "url": "https://sensation-kizomba.fr"
      }
    }`,
  };
}
