import type { Timestamp } from 'firebase/firestore';

export interface AppEventDate {
  from: Timestamp;
  to?: Timestamp;
}
