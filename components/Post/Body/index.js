import { useEffect, useRef } from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

import ImageWrapper from '@/components/ImageWrapper'

import { StyledContent } from './PostBody.styles'

const renderers = {
  image: image => {
    return (
      <ImageWrapper>
        <Image
          src={image.src}
          alt={image.alt}
          layout="fill"
          objectFit="contain"
        />
      </ImageWrapper>
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
      <ReactMarkdown children={content} renderers={renderers} />
    </StyledContent>
  )
}

export default PostBody
