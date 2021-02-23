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
    filter: ${({ theme }) => (theme.UIText === 'white' ? 'invert()' : 'none')};
    ${getGlobalTransition()}
  }
`

export const Text = styled.span`
  font-size: 20px;
  font-weight: 800;
  display: inline-block;
`
