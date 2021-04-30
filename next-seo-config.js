import { HOMEPAGE, AUTHOR, TITLE, DESCRIPTION } from '@/lib/constants'

export default {
  title: TITLE,
  description: DESCRIPTION,
  canonical: HOMEPAGE,
  languageAlternates: [
    {
      hrefLang: 'en',
      href: HOMEPAGE,
    },
  ],
  openGraph: {
    profile: {
      username: AUTHOR,
    },
    type: 'blog',
    locale: 'en',
    url: HOMEPAGE,
    site_name: 'dastasoftBlog',
    images: [
      {
        url:
          'https://avatars.githubusercontent.com/u/45243062?s=460&u=782b5806e64048acdb08d2a6ac74ab184c256bb5&v=4',
        width: 200,
        height: 200,
        alt: "dastasoft's Blog",
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
}
