import Link from 'next/link'
import Image from 'next/image'
import dayjs from 'dayjs'

import { Article } from './PostBox.styles'

const Post = ({ title, date, slug, coverImage, excerpt }) => {
  return (
    <Link href="/posts/[slug]" as={`/posts/${slug}`}>
      <a>
        <Article>
          <h2>{title}</h2>
          <span>{dayjs(date).format('DD MMMM YYYY')}</span>
          <Image
            src={coverImage}
            alt={`${title} cover image`}
            width={400}
            height={160}
          />
          <p>{excerpt}</p>
        </Article>
      </a>
    </Link>
  )
}

export default Post
