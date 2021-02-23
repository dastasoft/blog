import Link from 'next/link'
import Image from 'next/image'
import dayjs from 'dayjs'

import { DEFAULT_IMAGE_SIZES } from '@/lib/constants'

import { Article } from './PostBox.styles'

const Post = ({ title, date, slug, coverImage, excerpt, isFirst }) => {
  const firstPostProperties = {
    loading: 'eager',
    priority: true,
  }

  let imageProperties = {
    src: coverImage,
    alt: `${title} cover image`,
    layout: 'responsive',
    ...DEFAULT_IMAGE_SIZES,
  }

  if (isFirst) {
    imageProperties = {
      ...imageProperties,
      ...firstPostProperties,
    }
  }

  return (
    <Link href="/posts/[slug]" as={`/posts/${slug}`}>
      <Article>
        <a href={`/posts/${slug}`}>
          <h2>{title}</h2>
        </a>
        <span>{dayjs(date).format('DD MMMM YYYY')}</span>
        <Image {...imageProperties} />
        <p>{excerpt}</p>
      </Article>
    </Link>
  )
}

export default Post
