import { Input, Label } from './InputSearch.styles'

const PostSearcher = ({ filter, setFilter }) => {
  const onFilterHandler = event => setFilter(event.target.value)

  return (
    <>
      <Input
        type="text"
        placeholder="Search Posts"
        aria-labelledBy="search-post"
        value={filter}
        onChange={onFilterHandler}
      />
      <Label id="search-post">Search for posts</Label>
    </>
  )
}

export default PostSearcher
