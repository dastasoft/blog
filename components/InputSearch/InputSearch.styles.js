import styled from 'styled-components'

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 18px;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 5px;
  color: ${({ theme }) => theme.contentText};
  transition: all 0.5s linear;
  outline: none;

  :focus {
    outline: none;
  }
`

export const Label = styled.label`
  display: none;
`
