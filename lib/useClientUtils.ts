'use client'

import { usePathname } from 'next/navigation'

export function getPathname() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname()
  return pathname
}
