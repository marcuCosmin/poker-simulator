import { auth } from "./config"

import { signInWithEmailAndPassword, type User } from "firebase/auth"

type SignInResult = {
  error: string
  user: User | null
}

export const signIn = async (email: string, password: string) => {
  const signInResult: SignInResult = {
    error: "",
    user: null,
  }

  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)

    signInResult.user = user
  } catch (error: any) {
    signInResult.error = error.message
  }

  return signInResult
}
