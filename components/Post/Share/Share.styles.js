import styled from 'styled-components'

import { getGlobalTransition } from '@/components/GlobalStyle'

export const Container = styled.div`
  position: fixed;
  background: #5e9073;
  bottom: 0;
  width: 100%;
  max-width: inherit;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.UIText};
  ${getGlobalTransition()}

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    filter: ${({ theme }) =>
      theme.UIText === '#ededee' ? 'invert()' : 'none'};
    ${getGlobalTransition()}
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    left: 0;
    bottom: calc(100vh / 3);
    width: 4rem;
    flex-direction: column;

    a {
      margin: 1rem 0;
    }
  }
`

export const Text = styled.span`
  font-size: 20px;
  font-weight: 900;
  display: inline-block;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`
