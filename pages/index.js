import { useEffect, useState } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

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
      <Head>
        <title>dastasoft's Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          async
          defer
          data-website-id="2cf50fa8-4a72-43c9-803e-714ef4029d88"
          src="https://hal-umami-analytics.vercel.app/umami.js"
        ></script>
      </Head>
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
