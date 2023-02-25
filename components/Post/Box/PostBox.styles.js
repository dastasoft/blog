import styled from 'styled-components'

import { getGlobalTransition } from '@/components/GlobalStyle'

export const Article = styled.article`
  background-color: ${({ theme }) => theme.background};
  border-radius: 0.5rem;
  ${getGlobalTransition()}

  display: flex;
  flex-direction: column;
  cursor: pointer;
  height: 100%;

  a,
  span,
  p {
    color: ${({ theme }) => theme.contentText};
    ${getGlobalTransition()}
  }

  span {
    font-weight: 300;
    font-size: medium;
    margin: 0.5rem 0;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    margin-top: 0.5rem;
    line-height: 1.625;
  }

  > * {
    padding: 0.1rem 0;
  }

  h2 {
    font-size: x-large;
  }
`
