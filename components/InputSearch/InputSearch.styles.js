import styled from 'styled-components'

import { getGlobalTransition } from '@/components/GlobalStyle'

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 18px;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 5px;
  color: ${({ theme }) => theme.contentText};
  ${getGlobalTransition()}
  outline: none;

  :focus {
    outline: none;
  }
`

export const Label = styled.label`
  display: none;
`
