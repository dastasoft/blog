import { GITHUB_REPO_EDIT } from '@/lib/constants'

import { Footer, Divider, Link } from './Footer.styles'

const PostFooter = ({ slug }) => {
  return (
    <Footer>
      <hr />
      <span>
        Did you spot an error in the article? Please help me to correct it.
      </span>
      <Divider> · </Divider>
      <Link
        href={`${GITHUB_REPO_EDIT}${slug}.md`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Edit post on GitHub
      </Link>
    </Footer>
  )
}

export default PostFooter
