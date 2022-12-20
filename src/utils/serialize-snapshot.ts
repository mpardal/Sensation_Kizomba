import type { DocumentSnapshot, QuerySnapshot } from 'firebase/firestore';
import { Timestamp } from 'firebase/firestore';

function transformTimestamp<T extends string | unknown[] | object>(obj: T): T {
  if (typeof obj === 'string') return obj;

  if (Array.isArray(obj)) {
    return obj.map((item: T) => transformTimestamp(item)) as T;
  }

  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (value instanceof Timestamp) {
      return {
        ...acc,
        [key]: value.toMillis(),
      };
    } else if (Array.isArray(value)) {
      return {
        ...acc,
        [key]: value.map((v) => transformTimestamp(v) as T),
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
  }, {}) as T;
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
