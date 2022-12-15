import dayjs from 'dayjs';
import type { Timestamp } from 'firebase/firestore';

export function appEventFormatDate(date: Timestamp, format?: string) {
  return dayjs(date.toDate())
    .locale('fr')
    .format(format ?? 'DD/MM/YYYY');
}
