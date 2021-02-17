import { useEffect, useRef } from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

import { ICON_SIZES } from '@/lib/constants'

import { StyledContent } from './PostBody.styles'

const renderers = {
  image: image => {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        layout="responsive"
        {...ICON_SIZES}
      />
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
