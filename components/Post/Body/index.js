import Image from 'next/image'
import Markdown from 'markdown-to-jsx'

import { StyledContent } from './PostBody.styles'

const PostBody = ({ content }) => {
  return (
    <StyledContent>
      <Markdown
        options={{
          overrides: {
            img: {
              component: Image,
              props: {
                layout: 'responsive',
                width: '50',
                height: '42',
              },
            },
          },
        }}
      >
        {content}
      </Markdown>
    </StyledContent>
  )
}

export default PostBody
