import styled from 'styled-components'

import { TAG_TYPES } from '@/lib/constants'

const Tag = ({ text }) => {
  return <StyledTag tagType={text}>#{text}</StyledTag>
}

const StyledTag = styled.div`
  border-radius: 3px;
  padding: 0.4rem;
  max-width: max-content;
  font-size: 12px;
  transition: all 0.5s linear;

  color: ${({ tagType, theme }) =>
    TAG_TYPES[tagType] ? TAG_TYPES[tagType].color : theme.contentText};
  background-color: ${({ tagType, theme }) =>
    TAG_TYPES[tagType] ? TAG_TYPES[tagType].background : theme.primary};
`

export default Tag
