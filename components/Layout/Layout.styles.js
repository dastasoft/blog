import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.body};
  background-image: ${({ theme }) =>
    `radial-gradient(${theme.contentText} 1px, transparent 0)`};
  background-size: 40px 40px;
  background-position: -19px -19px;
  transition: all 0.5s linear;
`

export const GridLayout = styled.div`
  display: grid;
  grid-template-rows: 5rem 1fr;
  border: 1px solid ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.contentText};
  transition: all 0.5s linear;
`
