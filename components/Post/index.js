import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

const Post = ({ title, date, slug, coverImage, excerpt }) => {
  return (
    <Link href="/posts/[slug]" as={`/posts/${slug}`}>
      <a>
        <Article>
          <h2>{title}</h2>
          <span>{date}</span>
          <Image
            src={coverImage}
            alt={`${title} cover image`}
            width={400}
            height={200}
          />
          <p>{excerpt}</p>
        </Article>
      </a>
    </Link>
  )
}

const Article = styled.article`
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.contentText};
  transition: all 0.50s linear;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  span {
    font-weight: 300;
    font-size: 12px;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    margin-top: 0.5rem;
  }

  > * {
    padding: 0.2rem 0;
  }
`

export default Post
