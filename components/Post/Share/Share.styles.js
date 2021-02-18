import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  background: #5e9073;
  bottom: 0;
  width: 100%;
  max-width: inherit;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.UIText};
  transition: all 0.5s linear;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    filter: ${({ theme }) => (theme.UIText === 'white' ? 'invert()' : '')};
    transition: all 0.5s linear;
  }
`

export const Text = styled.span`
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
`
