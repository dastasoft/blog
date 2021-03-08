import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    text-align: center;
    font-weight: 700;
    font-size: 36px;
    color: inherit;
    padding: 1rem;
  }

  .active {
    background-color: ${({ theme }) => theme.activeLink};
    border-radius: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;

    a {
      padding: 0.5rem 1rem;
      font-size: 24px;
    }
  }
`
