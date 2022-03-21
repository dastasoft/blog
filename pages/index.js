import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { NextSeo } from 'next-seo'

import Post from '@/components/Post/Box'
import PostSearcher from '@/components/InputSearch'
import { getAllPosts } from '@/lib/api'
import generateRssFeed from '@/lib/generateRSSFeed'

const Home = ({ allPosts }) => {
  const [filter, setFilter] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    let displayPosts = [...allPosts]

    if (filter) {
      displayPosts = allPosts.filter(post =>
        post.title.toLowerCase().includes(filter.toLowerCase())
      )
    }

    setPosts(
      displayPosts.map((post, index) => (
        <Post key={post.slug} {...post} isFirst={index === 0} />
      ))
    )
  }, [filter])

  return (
    <Container>
      <NextSeo />
      <PostSearcher filter={filter} setFilter={setFilter} />
      <GridLayout>{posts}</GridLayout>
    </Container>
  )
}

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  form {
    margin: 4rem 0 2rem 0;
  }
`

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.8rem;
  margin: 1rem auto;
  max-width: ${({ theme }) => theme.breakpoints.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    max-width: ${({ theme }) => theme.breakpoints.lg};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: repeat(3, 1fr);
    max-width: ${({ theme }) => theme.breakpoints.xl};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints['2xl']}) {
    grid-template-columns: repeat(4, 1fr);
    max-width: ${({ theme }) => theme.breakpoints['2xl']};
  }
`

export default Home

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  generateRssFeed(allPosts)

  return {
    props: { allPosts },
  }
}
