'use client'

import { SideNav } from '@/components/side-nav'
import { useSidebar } from '@/hooks/useSidebar'
import { NavItem } from '@/types'
import { ChevronDown } from 'lucide-react'
import { useSession } from 'next-auth/react'
import React from 'react'

export default function Admin() {
  const { data } = useSession()
  const { isOpen } = useSidebar()
  const item: NavItem[] = [
    {
      title: 'abrir google',
      href: '/google.com',
      icon: ChevronDown,
    },
  ]
  console.log(data)
  return (
    <div>
      <SideNav setOpen={isOpen} items={item} className="mt-5" />
    </div>
  )
}
