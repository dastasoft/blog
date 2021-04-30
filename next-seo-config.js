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
        url: 'https://blog.dastasoft.com/icons/maskable_icon_x512.png',
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
