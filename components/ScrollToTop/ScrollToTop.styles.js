import styled from 'styled-components'

export const Container = styled.div`
  display: none;
  bottom: 20px;
  pointer-events: none;
  position: absolute;
  right: 0.25rem;
  top: 100vh;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }
`

export const Anchor = styled.a`
  display: none;
  padding: 0.25rem;
  pointer-events: all;
  position: fixed;
  position: sticky;
  text-decoration: none;
  transition: transform 80ms ease-in;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: inline-block;
    height: 3rem;
    top: calc(100vh - 4rem);
    width: 3rem;
  }
`
