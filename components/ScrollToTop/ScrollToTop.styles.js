import styled from 'styled-components'

export const Container = styled.div`
  display: none;
  opacity: 0;
  bottom: 20px;
  pointer-events: none;
  position: absolute;
  right: 0.5rem;
  top: 100vh;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
    opacity: 1;
  }
`

export const Anchor = styled.a`
  display: none;
  opacity: 0;
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
    opacity: 1;
    height: 64px;
    width: 64px;
    top: calc(100vh - 12.5rem);
  }
`
