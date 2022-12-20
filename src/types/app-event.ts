import type { AppEventDate } from './app-event-date';
import type { AppEventType } from './app-event-type';

//type les données provenant de firebase
export interface AppEvent {
  id: string;
  address: string;
  city: string;
  date: AppEventDate;
  title: string;
  type: AppEventType;
  description: string;
  weezeventUrl: string;
  images: string[];
}
