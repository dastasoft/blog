import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { NextSeo } from 'next-seo'

import Post from '@/components/Post/Box'
import PostSearcher from '@/components/InputSearch'
import { getAllPosts } from '@/lib/api'
import generateRssFeed from '@/lib/generateRSSFeed'
import { DESCRIPTION } from '@/lib/constants'
import Subscribe from '@/components/Subscribe'

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
      <Hero>
        <HeroMain>
          <Description>{DESCRIPTION}</Description>
          <PostSearcher filter={filter} setFilter={setFilter} />
        </HeroMain>
        <Subscribe />
      </Hero>
      <H3>Latest Articles</H3>
      <GridLayout>{posts}</GridLayout>
    </Container>
  )
}

const Container = styled.div`
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  form {
    margin: 4rem 0 2rem 0;
  }
`

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
  }
`

const HeroMain = styled.div`
  max-width: 30rem;
  padding: 1rem;
`

const Description = styled.h2`
  padding: 0.5rem 0 2rem 0;
  font-size: xx-large;
`

const H3 = styled.h3`
  font-size: x-large;
  align-self: flex-start;
  border-bottom: 3px solid ${({ theme }) => theme.primary};
`

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-auto-rows: minmax(20rem, 1fr);
  grid-gap: 4rem 3rem;
  margin: 1rem auto;
  width: 100%;
`

export default Home

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'canonicalURL',
    'canonicalPublisher',
    'excerpt',
  ])

  generateRssFeed(allPosts)

  return {
    props: { allPosts },
  }
}
