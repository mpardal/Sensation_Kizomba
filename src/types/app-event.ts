import type { Timestamp } from 'firebase/firestore';

//tri en fonction des types d'événement présent dans la page
type AppEventType = 'daily' | 'weekly' | 'monthly' | 'yearly';

//type les données provenant de firebase
export interface AppEvent {
  title: string;
  address: string;
  city: string;
  date: Timestamp;
  dj: string;
  teacher: string;
  type: AppEventType;
}
