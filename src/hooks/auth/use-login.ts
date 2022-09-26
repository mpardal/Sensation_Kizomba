import { useMutation } from '@tanstack/react-query';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase-config';
import type { UseMutationOptions } from '@tanstack/react-query';

interface Variables {
  email: string;
  password: string;
}

export function useLogin<TContext = unknown>(
  options?: UseMutationOptions<unknown, unknown, Variables, TContext>,
) {
  return useMutation({
    mutationKey: ['auth', 'login'],
    mutationFn: async ({ email, password }: Variables) => {
      await signInWithEmailAndPassword(auth, email, password);
    },
    ...options,
  });
}
