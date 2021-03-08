import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function EnhancedLink({ href, children, activeClassName }) {
  const router = useRouter()
  const className = router.pathname !== href ? '' : activeClassName

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}
