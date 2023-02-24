import styled from 'styled-components'
import { NextSeo } from 'next-seo'
import { FaGithub, FaLinkedin, FaTwitter, FaRssSquare } from 'react-icons/fa'
import { SiBuymeacoffee } from 'react-icons/si'

import {
  colorBackgroundAndTransition,
  imageDarkModeSupport,
} from '@/components/GlobalStyle'
import { PERSONAL_DESCRIPTION, URLs } from '@/lib/constants'

const ICON_FONT_SIZE = 40

const About = () => {
  return (
    <Container>
      <NextSeo title="About | dastasoft" description={PERSONAL_DESCRIPTION} />
      <Title>About</Title>
      <H2>About the author</H2>
      <Text>
        <p>
          Hi there, I'm a full stack developer with a passion for writing
          technical articles about JavaScript, TypeScript, React, and other
          backend technologies. I love to dive deep into complex concepts and
          explain them using simple language, providing examples and
          step-by-step guides to help readers understand the concepts easily.
        </p>
        <p>
          I believe that sharing knowledge is the best way to learn, and that's
          why I write articles that not only explain the concepts but also show
          how to apply them in real-world scenarios. To make things even easier
          for my readers, I always include an example open-source project that
          demonstrates all the concepts explained in the article.
        </p>
        <p>
          Whether you're a beginner or an experienced developer, my articles
          will provide you with valuable insights and practical knowledge that
          you can use to improve your skills and become a better web developer.
        </p>
      </Text>
      <SubTitle>
        If you find my content helpful and would like to support me, please
        consider buying me a coffee. It would mean a lot to me and will help me
        continue creating useful content for the web development community.
        Thank you!
      </SubTitle>
      <IconHolder>
        <a href={URLs.GITHUB} target="_blank" rel="noopener noreferrer">
          <FaGithub fontSize={ICON_FONT_SIZE} />
        </a>
        <a href={URLs.LINKEDIN} target="_blank" rel="noopener noreferrer">
          <FaLinkedin fontSize={ICON_FONT_SIZE} />
        </a>
        <a href={URLs.TWITTER} target="_blank" rel="noopener noreferrer">
          <FaTwitter fontSize={ICON_FONT_SIZE} />
        </a>
        <a href={URLs.RSS} target="_blank" rel="noopener noreferrer">
          <FaRssSquare fontSize={ICON_FONT_SIZE} />
        </a>
        <a
          href={URLs.BUY_ME_A_COFFEE}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiBuymeacoffee fontSize={ICON_FONT_SIZE} />
        </a>
      </IconHolder>
    </Container>
  )
}

export const Container = styled.div`
  padding: 1rem;
  font-size: 1.25rem;
  line-height: 1.55;
  ${({ theme }) => colorBackgroundAndTransition(theme)}
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: ${({ theme }) => theme.breakpoints.sm};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: ${({ theme }) => theme.breakpoints.md};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: ${({ theme }) => theme.breakpoints.rg};
  }
`

export const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

const H2 = styled.h2`
  font-size: x-large;
  border-bottom: 3px solid ${({ theme }) => theme.primary};
`

export const Text = styled.div`
  p {
    margin: 1rem 0 1.55rem 0;
  }
`

export const SubTitle = styled.div`
  text-align: center;
  font-weight: 700;
  margin-bottom: 1rem;
`

export const IconHolder = styled.div`
  ${({ theme }) => imageDarkModeSupport(theme.contentText)}

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    ${({ theme }) => colorBackgroundAndTransition(theme)}
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;

    a {
      margin-right: 1rem;
    }
  }
`

export default About
