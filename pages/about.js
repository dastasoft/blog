import Image from 'next/image'

import { ICON_SIZES, URLs } from '@/lib/constants'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div>
        <p>
          Hi, I'm Daniel and I live in Sant Cugat del Vallès (Barcelona), I've
          been making websites, applications, games and learning the ins and
          outs of technology since I can remember. I love learning, teaching
          what I have learned and approaching projects from an agile vision and
          from the user's point of view maintaining the quality of the code
          following the best practices.
        </p>

        <p>
          Currently, both professionally and personally, I keep myself busy with
          React.js, Node.js, React Native and cloud technology to offer high
          performance, scalable and innovative solutions.
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
      </div>
      <div>I love to talk about tech, contact me on</div>
      <div>
        <a
          href={`maitlo:${URLs.MAIL}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/envelope-solid.svg"
            alt="Mail logo"
            {...ICON_SIZES}
          />
        </a>
        <a href={URLs.GITHUB} target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/github-brands.svg"
            alt="Github logo"
            {...ICON_SIZES}
          />
        </a>
        <a href={URLs.DEV} target="_blank" rel="noopener noreferrer">
          <Image src="/assets/dev-brands.svg" alt="Dev logo" {...ICON_SIZES} />
        </a>
        <a href={URLs.LINKEDIN} target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/linkedin-brands.svg"
            alt="LinkedIn logo"
            {...ICON_SIZES}
          />
        </a>
      </div>
    </div>
  )
}

export default About
