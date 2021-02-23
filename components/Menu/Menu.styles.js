import styled from 'styled-components'

import { getGlobalTransition } from '@/components/GlobalStyle'

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: ${({ isOpen }) => (isOpen ? 9 : -1)};
  background: linear-gradient(
      180deg,
      rgba(143, 188, 148, 0) 0%,
      rgba(84, 134, 135, 0.67) 100%
    ),
    ${({ theme }) => theme.primary};

  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  color: ${({ theme }) => theme.UIText};
  ${getGlobalTransition()}

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > * {
    padding: 1rem 0;
    width: inherit;
  }

  a {
    text-decoration: none;
    text-align: center;
    font-weight: 500;
    font-size: 36px;
    color: inherit;
  }

  hr {
    border: 1px solid ${({ theme }) => theme.UIText};
    height: 0px;
    width: 85%;
    max-width: 400px;
    padding: 0;
    margin: 1rem 0 0.5rem 0;
  }
`

export const IconHolder = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  max-width: 400px;

  img {
    filter: ${({ theme }) => (theme.UIText === 'white' ? 'invert()' : 'none')};
  }
`
