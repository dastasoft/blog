import styled from 'styled-components'

import { getGlobalTransition } from '@/components/GlobalStyle'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const Input = styled.input`
  ${getGlobalTransition()}
  background-color: ${({ theme }) => theme.background};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.contentText};
  font-size: 18px;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxWidth};
  outline: none;
  padding: 0.5rem;
  width: inherit;

  :focus {
    outline: none;
  }
`

export const Label = styled.label`
  display: none;
`
