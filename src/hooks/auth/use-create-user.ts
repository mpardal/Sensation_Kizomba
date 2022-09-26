import { useMutation } from '@tanstack/react-query';
import { createUserWithEmailAndPassword, deleteUser } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { auth, database } from '../../config/firebase-config';

export function useCreateUser() {
  return useMutation(
    ['user', 'createUser'],
    async ({
      email,
      password,
      firstname,
      lastname,
    }: {
      email: string;
      password: string;
      firstname: string;
      lastname: string;
    }) => {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await addDoc(collection(database, 'users'), {
        email,
        firstname,
        lastname,
        uid: user.uid,
      });

      return user;
    },
  );
}
