import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import styled from 'styled-components'

import PostHeader from '@/components/Post/Header'
import PostBody from '@/components/Post/Body'
import Share from '@/components/Post/Share'

import { getPostBySlug, getAllPosts } from '../../lib/api'

export default function Post({ post }) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <Container>
        <PostHeader {...post} />
        <PostBody {...post} />
      </Container>
      <Share title={post.title} summary={post.excerpt} />
    </>
  )
}

const Container = styled.div`
  color: ${({ theme }) => theme.contentText};
  transition: all 0.5s linear;
  padding: 1rem;
  width: 100vw;
`

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'excerpt',
    'content',
    'ogImage',
    'coverImage',
    'tags',
  ])

  return {
    props: {
      post,
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
