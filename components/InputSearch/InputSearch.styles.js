import styled from 'styled-components'

import { Input as RawInput } from '@/components/GlobalStyle'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const Input = styled(RawInput)`
  margin: 0 auto;
`

export const Label = styled.label`
  display: none;
`
