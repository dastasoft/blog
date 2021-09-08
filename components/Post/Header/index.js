import Image from 'next/image'
import dayjs from 'dayjs'

import Tag from '@/components/Tag'
import { DEFAULT_IMAGE_SIZES } from '@/lib/constants'

import { Title, SubHeader, TagContainer, Date } from './Header.styles'

const PostBody = ({ title, date, coverImage, tags }) => {
  return (
    <>
      <Image
        src={coverImage}
        alt={`${title} cover image`}
        layout="responsive"
        {...DEFAULT_IMAGE_SIZES}
        loading="eager"
        priority
      />
      <SubHeader>
        <TagContainer>
          {tags.map(tag => (
            <Tag key={tag} text={tag} />
          ))}
        </TagContainer>
        <Date>{dayjs(date).format('DD MMMM YYYY')}</Date>
      </SubHeader>
      <Title>{title}</Title>
    </>
  )
}

export default PostBody
