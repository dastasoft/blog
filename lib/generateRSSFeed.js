import fs from 'fs'
import { Feed } from 'feed'

import { HOMEPAGE, AUTHOR, URLs, TITLE, DESCRIPTION } from '@/lib/constants'

export default function generateRssFeed(posts = []) {
  const date = new Date()
  const author = {
    name: AUTHOR,
    email: URLs.MAIL,
    link: URLs.PORTFOLIO,
  }
  const feed = new Feed({
    title: TITLE,
    description: DESCRIPTION,
    id: HOMEPAGE,
    link: HOMEPAGE,
    image: `${HOMEPAGE}icons/maskable_icon.png`,
    favicon: `${HOMEPAGE}favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, ${AUTHOR}`,
    updated: date,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${HOMEPAGE}rss/feed.xml`,
      json: `${HOMEPAGE}rss/feed.json`,
      atom: `${HOMEPAGE}rss/atom.xml`,
    },
    author,
  })

  posts.forEach(({ slug, title, excerpt, date }) => {
    const url = `${HOMEPAGE}posts/${slug}`

    feed.addItem({
      title,
      id: url,
      link: url,
      description: excerpt,
      author: [author],
      contributor: [author],
      date: new Date(date),
    })
  })

  fs.mkdirSync('./public/rss', { recursive: true })
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2())
  fs.writeFileSync('./public/rss/atom.xml', feed.atom1())
  fs.writeFileSync('./public/rss/feed.json', feed.json1())
}
