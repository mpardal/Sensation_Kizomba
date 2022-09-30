import { useQuery } from '@tanstack/react-query';
import { doc, getDoc } from 'firebase/firestore';
import { database } from '../config/firebase-config';
import type { UseQueryOptions } from '@tanstack/react-query';
import type { DocumentSnapshot } from 'firebase/firestore';
import type { AppEvent } from '../types/app-event';

//Fonction permettant de récupérer un document d'une collection Firebase
export function useEvent(
  //id est un string
  id: string,
  //?
  options?: UseQueryOptions<DocumentSnapshot<AppEvent>>,
) {
  return useQuery({
    queryKey: ['events', id],
    queryFn: async () => {
      return (await getDoc(
        doc(database, 'events', id),
      )) as DocumentSnapshot<AppEvent>;
    },
    //?
    ...options,
  });
}
