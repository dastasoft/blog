export const HOMEPAGE = 'https://blog.dastasoft.com/'
export const AUTHOR = 'dastasoft'

export const URLs = Object.freeze({
  DEV: 'https://dev.to/dastasoft',
  DISCORD: '',
  LINKEDIN: 'https://www.linkedin.com/in/dastasoft/',
  MAIL: 'dastasoft@protonmail.com',
  PORTFOLIO: 'https://dastasoft.netlify.app/',
  GITHUB: 'https://github.com/dastasoft',
})

export const ICON_SIZES = Object.freeze({
  width: 50,
  height: 50,
})

export const DEFAULT_IMAGE_SIZES = Object.freeze({
  width: 1920,
  height: 1080,
})

export const TAG_TYPES = Object.freeze({
  react: {
    color: '#61DAFB',
    background: '#333333',
  },
  javascript: {
    color: 'black',
    background: '#E5CB3B',
  },
  beginners: {
    color: 'white',
    background: '#008335',
  },
  tutorial: {
    color: '#b30047',
    background: '#FEFFA5',
  },
})

export const SHARE_SNS = Object.freeze({
  twitter: {
    logo: '/assets/twitter-brands.svg',
    shareURL: 'https://twitter.com/intent/tweet?text={{TITLE}}{{URL}}',
    params: ['TITLE', 'URL'],
  },
  linkedin: {
    logo: '/assets/linkedin-brands.svg',
    shareURL:
      'https://www.linkedin.com/shareArticle?mini=true&url={{URL}}&title={{TITLE}}&summary={{SUMMARY}}&source={{SOURCE}}',
    params: ['URL', 'TITLE', 'SUMMARY', 'SOURCE'],
  },
  reddit: {
    logo: '/assets/reddit-brands.svg',
    shareURL: 'https://www.reddit.com/submit?url={{URL}}&title={{TITLE}}',
    params: ['URL', 'TITLE'],
  },
})
