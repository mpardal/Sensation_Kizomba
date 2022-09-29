import { useMutation } from '@tanstack/react-query';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase-config';
import type { UserCredential } from 'firebase/auth';
import type { UseMutationOptions } from '@tanstack/react-query';

interface Variables {
  email: string;
  password: string;
}

export function useLogin<TContext = unknown>(
  options?: UseMutationOptions<UserCredential, unknown, Variables, TContext>,
) {
  return useMutation({
    mutationKey: ['auth', 'login'],
    mutationFn: ({ email, password }: Variables) => {
      return signInWithEmailAndPassword(auth, email, password);
    },
    ...options,
  });
}
