import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import styled from 'styled-components'
import { NextSeo } from 'next-seo'

import PostHeader from '@/components/Post/Header'
import PostBody from '@/components/Post/Body'
import Share from '@/components/Post/Share'

import { getPostBySlug, getAllPosts } from '@/lib/api'
import { HOMEPAGE, URLs } from '@/lib/constants'

export default function Post({ post }) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  console.log(`${HOMEPAGE}${post.slug}`)

  return (
    <>
      <Container>
        <NextSeo
          title={post.title}
          description={post.excerpt}
          openGraph={{
            article: {
              publishedTime: post.date,
              authors: [URLs.PORTFOLIO],
              section: post.section,
              tags: post.tags,
            },
            url: `${HOMEPAGE}${post.slug}`,
            title: post.title,
            description: post.excerpt,
            images: [
              {
                url: post.ogImage,
                alt: `${post.title} image cover`,
              },
            ],
            site_name: post.title,
          }}
        />
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
  max-width: 100vw;
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
    'section',
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
