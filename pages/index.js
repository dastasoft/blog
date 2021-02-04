import { useEffect, useState } from 'react'
import styled from 'styled-components'

import Post from '@/components/Post'
import PostSearcher from '@/components/PostSearcher'
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
