import styled from 'styled-components'

import { getGlobalTransition } from '@/components/GlobalStyle'

export const Article = styled.article`
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 5px;
  ${getGlobalTransition()}
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  a,
  span,
  p {
    color: ${({ theme }) => theme.contentText};
    ${getGlobalTransition()}
  }

  span {
    font-weight: 300;
    font-size: 12px;
    margin-bottom: 0.5rem;
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
`
