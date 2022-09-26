import { useMutation } from '@tanstack/react-query';
import { createUserWithEmailAndPassword, deleteUser } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { auth, database } from '../../config/firebase-config';
import type { User } from 'firebase/auth';
import type { UseMutationOptions } from '@tanstack/react-query';

interface Variables {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

export function useCreateUser(
  options?: UseMutationOptions<User, unknown, Variables>,
) {
  return useMutation({
    mutationKey: ['auth', 'createUser'],
    mutationFn: async ({ email, password, firstname, lastname }: Variables) => {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      try {
        await addDoc(collection(database, 'users'), {
          email,
          firstname,
          lastname,
          uid: user.uid,
        });
      } catch (err) {
        await deleteUser(user);
        throw err;
      }

      return user;
    },
    ...options,
  });
}
