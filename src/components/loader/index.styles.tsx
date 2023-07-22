import styled, { keyframes } from "styled-components"

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
`

export const StyledLoader = styled.div`
  border: 8px dashed ${({ theme }) => theme.complementarySecondary};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${rotate} 2s linear infinite;
`
