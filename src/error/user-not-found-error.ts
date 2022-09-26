import { FirebaseError } from 'firebase/app';

export class UserNotFoundError extends FirebaseError {
  constructor(firebaseError: FirebaseError) {
    super(firebaseError.code, firebaseError.message, firebaseError.customData);
  }
}
