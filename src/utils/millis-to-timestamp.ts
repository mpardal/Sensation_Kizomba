import { Timestamp } from 'firebase/firestore';

export function millisToTimestamp(millis: number) {
  return Timestamp.fromMillis(millis);
}
