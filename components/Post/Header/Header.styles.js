import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 1.875rem;
  line-height: 1.375;
  margin-bottom: 0.8rem;
`

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

export const Date = styled.span`
  font-size: 12px;
`
