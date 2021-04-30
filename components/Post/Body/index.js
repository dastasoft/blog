import { useEffect, useRef } from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import hljs from 'highlight.js'

import { StyledContent, Figure } from './PostBody.styles'

const components = {
  img: image => {
    return (
      <Figure>
        <Image
          src={image.src}
          alt={image.alt}
          width={1920}
          height={1080}
          objectFit="contain"
        />
        {image.title && <figcaption>{image.title}</figcaption>}
      </Figure>
    )
  },
}

const PostBody = ({ content }) => {
  const rootRef = useRef()

  useEffect(() => {
    rootRef.current.querySelectorAll('pre code').forEach(block => {
      hljs.highlightBlock(block)
    })
  }, [content])

  return (
    <StyledContent ref={rootRef}>
      <ReactMarkdown children={content} components={components} />
    </StyledContent>
  )
}

export default PostBody
