import { useMutation } from '@tanstack/react-query';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../config/firebase-config';
import type { UseMutationOptions } from '@tanstack/react-query';

interface Variables {
  email: string;
}

export function useAskPassword<TContext = unknown>(
  options?: UseMutationOptions<unknown, unknown, Variables, TContext>,
) {
  return useMutation<unknown, unknown, Variables, TContext>({
    mutationKey: ['auth', 'askPassword'],
    mutationFn: async ({ email }) => {
      await sendPasswordResetEmail(auth, email, {
        url: `${window.location.origin}/login?email=${email}`,
      });
    },
    ...options,
  });
}
