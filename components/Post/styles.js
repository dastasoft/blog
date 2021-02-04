import styled from 'styled-components'

export const Article = styled.article`
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 5px;
  color: ${({ theme }) => theme.contentText};
  transition: all 0.5s linear;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  display: flex;
  flex-direction: column;

  span {
    font-weight: 300;
    font-size: 12px;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    margin-top: 0.5rem;
  }

  > * {
    padding: 0.2rem 0;
  }
`
