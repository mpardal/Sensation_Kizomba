import type { Timestamp } from 'firebase/firestore';

type AppEventType = 'daily' | 'weekly' | 'monthly';

export interface AppEvent {
  title: string;
  address: string;
  city: string;
  date: Timestamp;
  dj: string;
  teacher: string;
  type: AppEventType;
}
