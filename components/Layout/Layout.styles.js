import styled from 'styled-components'

import { getGlobalTransition } from '@/components/GlobalStyle'

export const Container = styled.div`
  background: ${({ theme }) => theme.body};
  background-image: ${({ theme }) =>
    `radial-gradient(${theme.contentText} 1px, transparent 0)`};
  background-size: 40px 40px;
  background-position: -19px -19px;
  ${getGlobalTransition()}
`

export const GridLayout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 5rem 1fr;
  border: 1px solid ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.contentText};
  ${getGlobalTransition()}

  main {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    border: none;
  }
`
