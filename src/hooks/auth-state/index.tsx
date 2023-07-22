import { useState, type ChangeEvent, useEffect } from "react"

const useAuthState = () => {
  const [error, setError] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setError("")
  }, [email, password])

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value)
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value)

  return {
    error,
    setError,
    email,
    handleEmailChange,
    password,
    handlePasswordChange,
    loading,
    setLoading,
  }
}

export default useAuthState
