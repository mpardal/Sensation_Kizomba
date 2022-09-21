import { NextOrObserver, User } from 'firebase/auth'
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react'
import { auth } from '../config/firebase-config'
import { AppUser } from '../types/app-user'

const AuthContext = createContext({
  authUser: undefined,
  loading: true,
} as {
  authUser: AppUser | undefined
  loading: boolean
})

const FirebaseAuthProvider = ({ children }: PropsWithChildren) => {
  const [authUser, setAuthUser] = useState<AppUser | undefined>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // On s'abonne à l'authentification de firebase, exécutée quand l'utilisateur se connecte ou se déconnecte, et aussi au chargement initial de la page
    const onChanged: NextOrObserver<User> = (user) => {
      if (user) {
        // par la suite, on supprimera le console.log
        console.log({ user })

        // permet d'enregistrer l'utilisateur qui vient de se connecter
        setAuthUser({
          uid: user.uid,
          email: user.email as string,
          displayName: user.displayName,
          emailVerified: user.emailVerified,
        })
      } else {
        setAuthUser(undefined)
      }

      // on verra si c'est vraiment nécessaire d'indiquer que le chargement est terminé
      setLoading(false)
    }

    const unsub = auth.onAuthStateChanged(onChanged)

    return () => {
      unsub()
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        authUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default FirebaseAuthProvider
