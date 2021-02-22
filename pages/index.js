import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { NextSeo } from 'next-seo'

import Post from '@/components/Post/Box'
import PostSearcher from '@/components/InputSearch'
import { getAllPosts } from '@/lib/api'

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

    setPosts(displayPosts.map(post => <Post key={post.slug} {...post} />))
  }, [filter])

  return (
    <Container>
      <NextSeo
        title="dastasoft's Blog"
        description="Hi, I'm Daniel and I live in Sant Cugat del Vallès (Barcelona), I've
          been making websites, applications, games and learning the ins and
          outs of technology since I can remember."
      />
      <PostSearcher filter={filter} setFilter={setFilter} />
      <GridLayout>{posts}</GridLayout>
    </Container>
  )
}

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.8rem;
  margin: 1rem 0;
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

  return {
    props: { allPosts },
  }
}
