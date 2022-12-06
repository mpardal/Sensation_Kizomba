import { getDoc, doc } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from 'react';
import type { DocumentSnapshot } from 'firebase/firestore';
import type { NextOrObserver, User } from 'firebase/auth';
import type { PropsWithChildren } from 'react';
import invariant from 'tiny-invariant';
import { auth, database } from '../../config/firebase-config';
import { logger } from '../../utils/logger';
import { useGlobalSnackbar } from '../use-global-snackbar';
import type { AppUser } from '../../types/app-user';

const AuthContext = createContext(
  {} as {
    authUser: AppUser | undefined;
    loading: boolean;
    logged: boolean;
  },
);

function FirebaseAuthProvider({ children }: PropsWithChildren) {
  const [authUser, setAuthUser] = useState<AppUser | undefined>();
  const [loading, setLoading] = useState(true);
  const { setMessage } = useGlobalSnackbar();

  useEffect(() => {
    // On s'abonne à l'authentification de firebase, exécutée quand l'utilisateur se connecte ou se déconnecte, et aussi au chargement initial de la page
    const onChanged: NextOrObserver<User> = async (user) => {
      if (user) {
        // par la suite, on supprimera le console.log
        logger.debug(user);

        const userInfo = (await getDoc(
          doc(database, 'users', user.uid),
        )) as DocumentSnapshot<{ firstname: string; lastname: string }>;

        invariant(user.email, 'logged user must have an email');

        // permet d'enregistrer l'utilisateur qui vient de se connecter
        setAuthUser({
          uid: user.uid,
          email: user.email,
          user,
          information: userInfo,
        });

        setMessage(
          `Bienvenue ${userInfo.data()?.firstname ?? 'unknown'} ${
            userInfo.data()?.lastname ?? 'unknown'
          }`,
          'success',
        );
      } else {
        setAuthUser(undefined);
      }

      // on verra si c'est vraiment nécessaire d'indiquer que le chargement est terminé
      setLoading(false);
    };

    const unsub = auth.onAuthStateChanged(onChanged);

    return () => {
      unsub();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logged = Boolean(authUser);

  return (
    <AuthContext.Provider
      value={{
        authUser,
        loading,
        logged,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

export default FirebaseAuthProvider;
