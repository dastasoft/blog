import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.UIText};
  transition: all 0.5s linear;
  display: grid;
  align-items: center;
  grid-template-columns: 3rem auto 3rem auto;
  grid-gap: 1rem;
  padding: 0 1rem;
  font-size: 18px;
  font-weight: 500;

  img {
    border-radius: 50%;
    justify-self: flex-start;
  }

  button:last-child {
    justify-self: flex-end;

    div > span,
    div > span::after,
    div > span::before {
      transition: all 0.5s linear;
      background-color: ${({ theme }) => theme.UIText};
      z-index: 10;
    }
  }
`
