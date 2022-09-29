import type { User } from 'firebase/auth';
import type { DocumentSnapshot } from 'firebase/firestore';
import type { AppUserInformation } from './app-user-information';

export interface AppUser {
  email: string;
  uid: string;
  user: User;
  information: DocumentSnapshot<AppUserInformation>;
}
