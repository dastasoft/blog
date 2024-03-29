import { Container, Input, Label } from './InputSearch.styles'

const PostSearcher = ({ filter, setFilter }) => {
  const onFilterHandler = event => setFilter(event.target.value)

  return (
    <Container>
      <Input
        type="text"
        placeholder="Search articles"
        aria-labelledby="search-post"
        value={filter}
        onChange={onFilterHandler}
        maxLength={40}
      />
      <Label id="search-post">Search for articles</Label>
    </Container>
  )
}

export default PostSearcher
