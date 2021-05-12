import styled from 'styled-components'
import { NextSeo } from 'next-seo'
import { FaGithub, FaLinkedin, FaDev, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import {
  colorBackgroundAndTransition,
  imageDarkModeSupport,
} from '@/components/GlobalStyle'
import { URLs } from '@/lib/constants'

const About = () => {
  return (
    <Container>
      <NextSeo
        title="About | dastasoft"
        description="Hi, I'm a Full Stack Developer and I love learning, teaching, Japanese culture, rhythm games and talking about tech."
      />
      <Title>About</Title>
      <Text>
        <p>
          Hi, I'm Daniel and I live in Barcelona, I've been making websites,
          applications, games and learning the ins and outs of technology since
          I can remember. I love learning, teaching what I have learned and
          approaching projects from an agile vision and from the user's point of
          view maintaining the quality of the code following the best practices.
        </p>

        <p>
          Currently, both professionally and personally, I keep myself busy with{' '}
          <a
            href="https://reactjs.org/"
            target="blank"
            rel="noopener noreferrer"
          >
            React.js
          </a>
          ,{' '}
          <a
            href="https://nodejs.org/"
            target="blank"
            rel="noopener noreferrer"
          >
            Node.js
          </a>
          ,{' '}
          <a
            href="http://reactnative.dev/"
            target="blank"
            rel="noopener noreferrer"
          >
            React Native
          </a>{' '}
          and cloud technology to offer high performance, scalable and
          innovative solutions.
        </p>

        <p>
          I have been working as a programmer and analyst for 9 years in
          different positions in the public and private sector, I have worked
          providing technology solutions for universities, banking and the
          notary sector, performing the roles of Java programmer, analyst and
          currently full stack where I cover the spectrum of technology needed
          to develop a complete project by myself. I have led small teams of 2-3
          people in short and long term projects.
        </p>

        <p>
          Intellectually curious and eager to take on new challenges, interested
          in working in B2B and B2C by leveraging my own development experience,
          not afraid to take on challenges by paying special attention to
          details.
        </p>

        <p>
          I am comfortable working both in a team and also working independently
          to ensure goals are achieved. I adapt quickly to changes and promote a
          discourse of constructive criticism that helps team members to
          continue improving.
        </p>

        <p>
          I am keen on creating high-quality user experience by working closely
          with project managers, designers and other engineers.
        </p>
      </Text>
      <SubTitle>I love to talk about tech, contact me on</SubTitle>
      <IconHolder>
        <a
          href={`maitlo:${URLs.MAIL}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdEmail fontSize="40px" />
        </a>
        <a href={URLs.GITHUB} target="_blank" rel="noopener noreferrer">
          <FaGithub fontSize="40px" />
        </a>
        <a href={URLs.DEV} target="_blank" rel="noopener noreferrer">
          <FaDev fontSize="40px" />
        </a>
        <a href={URLs.LINKEDIN} target="_blank" rel="noopener noreferrer">
          <FaLinkedin fontSize="40px" />
        </a>
        <a href={URLs.TWITTER} target="_blank" rel="noopener noreferrer">
          <FaTwitter fontSize="40px" />
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
