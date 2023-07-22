import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  position: fixed;
  border-radius: 0.35rem;
  padding: 30px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.secondary};
`

export const Heading = styled.h1`
  text-align: center;
  margin: 0;
  font-size: 25px;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-top: 1px solid ${({ theme }) => theme.complementarySecondary};
  border-bottom: 1px solid ${({ theme }) => theme.complementarySecondary};
  padding: 20px 0;
`

export const Input = styled.input`
  width: 100%;
`

export const Error = styled.div`
  color: ${({ theme }) => theme.error};
  font-weight: bold;
  font-size: 14px;
`

export const Submit = styled.button`
  width: 100%;
`
