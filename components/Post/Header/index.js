import Image from 'next/image'
import dayjs from 'dayjs'

import Tag from '@/components/Tag'

import { Container, SubHeader, TagContainer } from './styles'

const PostBody = ({ title, date, coverImage, tags }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <SubHeader>
        <TagContainer>
          {tags.map(tag => (
            <Tag key={tag} text={tag} />
          ))}
        </TagContainer>
        <span>{dayjs(date).format('DD MMMM YYYY')}</span>
      </SubHeader>
      <Image
        src={coverImage}
        alt={`${title} cover image`}
        width={400}
        height={160}
      />
    </Container>
  )
}

export default PostBody
