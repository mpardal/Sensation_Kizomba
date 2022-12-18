import type { DocumentSnapshot, QuerySnapshot } from 'firebase/firestore';
import { Timestamp } from 'firebase/firestore';

function transformTimestamp(obj: object): object {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (value instanceof Timestamp) {
      return {
        ...acc,
        [key]: value.toMillis(),
      };
    } else if (typeof value === 'object') {
      return {
        ...acc,
        [key]: transformTimestamp(value as object),
      };
    }
    return {
      ...acc,
      [key]: value as unknown,
    };
  }, {});
}

type ExtractSnapshotData<T> = T extends DocumentSnapshot<infer U>
  ? U
  : T extends QuerySnapshot<infer U>
  ? U
  : never;

export function serializeSnapshot<
  T extends DocumentSnapshot,
  D extends ExtractSnapshotData<T>,
>(snapshot: T): D & { id: string } {
  return {
    id: snapshot.id,
    ...transformTimestamp(snapshot.data() as D),
  } as D & { id: string };
}

export function serializeQuerySnapshot<
  T extends QuerySnapshot,
  D extends ExtractSnapshotData<T>,
>(snapshot: T): (D & { id: string })[] {
  return snapshot.docs.map((doc) => serializeSnapshot(doc));
}
