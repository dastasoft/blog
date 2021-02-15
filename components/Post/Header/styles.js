import styled from 'styled-components'

export const Container = styled.div``

export const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

export const TagContainer = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin: 0 0.2rem;
  }

  div:first-of-type {
    margin-left: 0;
  }

  div:last-of-type {
    margin-right: 0;
  }
`
