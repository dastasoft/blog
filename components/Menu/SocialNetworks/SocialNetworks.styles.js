import styled from 'styled-components'

export const IconHolder = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  max-width: 400px;

  img {
    filter: ${({ theme }) => (theme.UIText === 'white' ? 'invert()' : 'none')};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-left: 1rem;

    a {
      margin-right: 1rem;
    }

    a:last-of-type {
      margin-right: 0;
    }

    img {
      max-width: 34px !important;
    }
  }
`
