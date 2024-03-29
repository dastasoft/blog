import styled from 'styled-components'

import {
  getGlobalTransition,
  Input as RawInput,
  Button as RawButton,
} from '@/components/GlobalStyle'

export const Container = styled.form`
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 0.5rem;
  background: linear-gradient(
      180deg,
      rgba(143, 188, 148, 0) 0%,
      rgba(84, 134, 135, 0.67) 100%
    ),
    ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.UIText};
  ${getGlobalTransition()}
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

export const Label = styled.label`
  margin-bottom: 0.5rem;
`

export const Message = styled.div`
  margin: 1rem 0;
`
export const Input = styled(RawInput)`
  max-width: 10rem;
`

export const Button = styled(RawButton)`
  max-width: fit-content;
  margin: 1rem 0;
`
