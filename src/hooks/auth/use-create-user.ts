import { useMutation } from '@tanstack/react-query';
import { createUserWithEmailAndPassword, deleteUser } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, database } from '../../config/firebase-config';
import type { User } from 'firebase/auth';
import type { UseMutationOptions } from '@tanstack/react-query';

interface Variables {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

export function useCreateUser<TContext = unknown>(
  options?: UseMutationOptions<User, unknown, Variables, TContext>,
) {
  return useMutation<User, unknown, Variables, TContext>({
    mutationKey: ['auth', 'createUser'],
    mutationFn: async ({ email, password, firstname, lastname }) => {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      try {
        await setDoc(doc(database, 'users', user.uid), {
          firstname,
          lastname,
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
