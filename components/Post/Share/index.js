import { useEffect, useState } from 'react'
import Image from 'next/image'

import { HOMEPAGE, SHARE_SNS } from '@/lib/constants'

import { Container, Text } from './Share.styles'

const Share = ({ title, summary }) => {
  const [socialNetworks, setSocialNetworks] = useState([])

  useEffect(() => {
    const params = Object.freeze({
      TITLE: encodeURIComponent(title),
      URL: encodeURIComponent(window.location.href),
      SUMMARY: encodeURIComponent(summary),
      SOURCE: HOMEPAGE,
    })

    const sns = Object.keys(SHARE_SNS).map(key => {
      const shareLink = SHARE_SNS[key].params.reduce(
        (acc, param) =>
          acc.replace(`{{${param.toUpperCase()}}}`, params[param]),
        SHARE_SNS[key].shareURL
      )

      return (
        <a href={shareLink} target="_blank" rel="noopener noreferrer">
          <Image
            key={key}
            src={SHARE_SNS[key].logo}
            alt={`${key} logo`}
            width={34}
            height={34}
          />
        </a>
      )
    })

    setSocialNetworks(sns)
  }, [])

  return (
    <Container>
      <Text>Share this article</Text>
      {socialNetworks}
    </Container>
  )
}

export default Share
