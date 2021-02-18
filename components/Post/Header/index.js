import Image from 'next/image'
import dayjs from 'dayjs'

import Tag from '@/components/Tag'

import { Title, SubHeader, TagContainer, Date } from './Header.styles'

const PostBody = ({ title, date, coverImage, tags }) => {
  return (
    <>
      <Title>{title}</Title>
      <SubHeader>
        <TagContainer>
          {tags.map(tag => (
            <Tag key={tag} text={tag} />
          ))}
        </TagContainer>
        <Date>{dayjs(date).format('DD MMMM YYYY')}</Date>
      </SubHeader>
      <Image
        src={coverImage}
        alt={`${title} cover image`}
        layout="responsive"
        width={400}
        height={160}
      />
    </>
  )
}

export default PostBody
