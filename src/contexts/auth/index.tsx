import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react"

import { auth } from "../../firebase/config"
import { onIdTokenChanged, type User } from "firebase/auth"

type AuthUser = User | null

type AuthContextValues = {
  user: AuthUser
  loading: boolean
}

const AuthContext = createContext<AuthContextValues | undefined>(undefined)

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<AuthUser>(null)

  useEffect(() => {
    const removeTokenListener = onIdTokenChanged(auth, user => {
      setUser(user)
      setLoading(false)
    })

    return removeTokenListener
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("Can not call 'useAuthContext' outside an AuthProvider")
  }

  return context
}

export { AuthProvider, useAuthContext }
