import { Markdown } from './style'

const PostBody = ({ content }) => {
  return <Markdown dangerouslySetInnerHTML={{ __html: content }} />
}

export default PostBody
