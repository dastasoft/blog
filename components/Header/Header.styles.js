import styled from 'styled-components'

import { getGlobalTransition } from '@/components/GlobalStyle'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.UIText};
  ${getGlobalTransition()}
  display: grid;
  align-items: center;
  grid-template-columns: 3rem auto 3rem auto;
  grid-gap: 1rem;
  padding: 0 1rem;
  font-size: 20px;
  font-weight: 900;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 24px;
    display: flex;
    justify-content: center;

    > * {
      margin-right: 1.5rem;
    }
  }
`

export const Avatar = styled.a`
  justify-self: flex-start;

  img {
    border-radius: 50%;
  }
`

export const Navigation = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    align-items: center;
  }
`

export const Hamburger = styled.div`
  justify-self: flex-end;

  div > span,
  div > span::after,
  div > span::before {
    ${getGlobalTransition()}
    background-color: ${({ theme }) => theme.UIText};
    z-index: 10;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`
