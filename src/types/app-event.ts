import type { AppEventDate } from './app-event-date';
import type { AppEventType } from './app-event-type';

//type les données provenant de firebase
export interface AppEvent {
  address: string;
  city: string;
  date: AppEventDate;
  dj: string;
  teacher: string;
  title: string;
  type: AppEventType;
}
