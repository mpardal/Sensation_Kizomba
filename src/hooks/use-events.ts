import { useQuery } from '@tanstack/react-query';
import { collection, getDocs, query, where } from 'firebase/firestore';
import type { UseQueryOptions } from '@tanstack/react-query';
import type { QuerySnapshot } from 'firebase/firestore';
import { database } from '@/config/firebase-config';
import type { AppEvent } from '@/types/app-event';

//Fonction permettant de récupérer plusieurs documents d'une collection Firebase
export function useEvents(
  //city est nulle ou string
  city?: string,
  //?
  options?: UseQueryOptions<QuerySnapshot<AppEvent>>,
) {
  return useQuery({
    //Mot cible de la recherche
    queryKey: ['events'],
    queryFn: async () => {
      const queryEvents = city
        ? query(collection(database, 'events'), where('city', '==', city)) //Tri la recherche par la ville
        : query(collection(database, 'events')); //Exécute la fonction même s'il n'y a pas de tri par ville

      return (await getDocs(queryEvents)) as QuerySnapshot<AppEvent>;
    },
    // ?
    ...options,
  });
}
