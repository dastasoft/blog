import styled from 'styled-components'

import { getAllPosts } from '@/lib/api'
import Post from '@/components/Post'

const Home = ({ allPosts }) => {
  return (
    <GridLayout>
      {allPosts.map(post => (
        <Post key={post.slug} {...post} />
      ))}
    </GridLayout>
  )
}

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.8rem;
  padding: 1rem;
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
