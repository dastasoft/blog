import styled from 'styled-components'

export const Footer = styled.div`
  font-size: 1.25rem;

  hr {
    margin: 1.55rem 0 1rem 0;
  }
`

export const Divider = styled.span`
  font-size: 1.5rem;
`

export const Link = styled.a`
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
`
