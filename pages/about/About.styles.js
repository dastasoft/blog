import styled from 'styled-components'

import {
  colorBackgroundAndTransition,
  imageDarkModeSupport,
} from '@/components/GlobalStyle'

export const Container = styled.div`
  padding: 1rem;
  font-size: 18px;
  ${({ theme }) => colorBackgroundAndTransition(theme)}
`

export const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 1rem;
`

export const Text = styled.div`
  p {
    margin: 1rem 0 2rem 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }
`

export const SubTitle = styled.div`
  text-align: center;
  font-weight: 500;
  margin-bottom: 1rem;
`

export const IconHolder = styled.div`
  ${({ theme }) => imageDarkModeSupport(theme.contentText)}

  display: flex;
  justify-content: space-between;
  align-items: center;
`
