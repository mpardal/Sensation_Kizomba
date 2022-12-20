import { ref, getDownloadURL } from 'firebase/storage';
import type { AppEvent } from '@/types/app-event';
import { storage } from '@/config/firebase-config';

export async function getDownloadUrlsForEvent(
  event: AppEvent,
): Promise<string[]> {
  const urls = (
    await Promise.allSettled(
      event.images.map((image) => {
        if (image.startsWith('https')) {
          return image;
        }

        return getDownloadURL(ref(storage, image));
      }),
    )
  ).filter((u) => u.status === 'fulfilled') as PromiseFulfilledResult<string>[];

  return urls.map((url) => url.value);
}
