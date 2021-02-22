import Image from 'next/image'
import dayjs from 'dayjs'

import Tag from '@/components/Tag'
import ImageWrapper from '@/components/ImageWrapper'

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
      <ImageWrapper>
        <Image
          src={coverImage}
          alt={`${title} cover image`}
          layout="fill"
          objectFit="contain"
        />
      </ImageWrapper>
    </>
  )
}

export default PostBody
