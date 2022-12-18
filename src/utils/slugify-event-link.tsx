import slugify from 'slugify';
import type { AppEvent } from '@/types/app-event';

export function slugifyEventLink(data: AppEvent) {
  return `/events/${slugify(data.title)}/${data.id}`;
}
