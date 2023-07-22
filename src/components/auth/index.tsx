import { type FormEvent } from "react"

import { signIn } from "../../firebase/utilities"

import { Loader } from ".."

import { useAuthState } from "../../hooks"

import {
  Error,
  Form,
  Heading,
  Input,
  InputsContainer,
  Submit,
} from "./index.styles"

const Auth = () => {
  const {
    email,
    password,
    error,
    loading,
    handleEmailChange,
    handlePasswordChange,
    setError,
    setLoading,
  } = useAuthState()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)

    const signInResult = await signIn(email, password)

    if (signInResult.error) {
      setError(signInResult.error)
    }

    setLoading(false)
  }

  return (
    <Form onSubmit={handleSubmit}>
      {loading && <Loader />}
      <Heading>Sign in</Heading>
      <InputsContainer>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </InputsContainer>
      {error && <Error>{error}</Error>}
      <Submit>Sign in</Submit>
    </Form>
  )
}

export default Auth
