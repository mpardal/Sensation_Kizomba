import slugify from 'slugify';
import type { QueryDocumentSnapshot } from 'firebase/firestore';
import type { AppEvent } from '@/types/app-event';

export function slugifyEventLink(
  data: AppEvent,
  event: QueryDocumentSnapshot<AppEvent>,
) {
  return `/events/${slugify(data.title)}/${event.id}`;
}
