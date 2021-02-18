import { Input } from './InputSearch.styles'

const PostSearcher = ({ filter, setFilter }) => {
  const onFilterHandler = event => setFilter(event.target.value)

  return (
    <Input
      type="text"
      placeholder="Search Posts"
      value={filter}
      onChange={onFilterHandler}
    />
  )
}

export default PostSearcher
