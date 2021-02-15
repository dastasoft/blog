import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import styled from 'styled-components'

import PostHeader from '@/components/Post/Header'
import PostBody from '@/components/Post/Body'

import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post }) {
  console.log(post)
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Container>
      <PostHeader {...post} />
      <PostBody {...post} />
    </Container>
  )
}

const Container = styled.div`
  color: ${({ theme }) => theme.contentText};
  transition: all 0.5s linear;
  padding: 1rem;
  width: 100vw;

  h1 {
    font-size: 1.875rem;
    line-height: 1.375;
    margin-bottom: 1rem;
  }
`

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'tags',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
