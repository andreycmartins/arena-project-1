'use client'

import { SideNav } from '@/components/side-nav'
import { NavItems } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from 'react'

type SetIsOpenFunction = Dispatch<SetStateAction<boolean>>

interface SidebarProps {
  className?: string
  isOpen: boolean
  setIsOpen: SetIsOpenFunction
}

export default function Sidebar({
  className,
  isOpen,
  setIsOpen,
}: SidebarProps) {
  const [status, setStatus] = useState(false)

  const handleToggle = () => {
    setStatus(true)
    setIsOpen(!isOpen)
    setTimeout(() => setStatus(false), 500)
  }
  return (
    <nav
      className={cn(
        `relative hidden h-screen border-r md:block`,
        status && 'duration-500',
        isOpen ? 'w-[285px]' : 'w-[80px]',
        className,
      )}
    >
      <ChevronLeft
        className={cn(
          'absolute -right-3 top-20 cursor-pointer rounded-full border bg-background text-3xl text-foreground',
          !isOpen && 'rotate-180',
        )}
        onClick={handleToggle}
      />
      <div className="space-y-4 py-4">
        <div className="flex justify-center">
          <Image src="/logo.png" alt="logo" width={128} height={128} />
        </div>
        <div className="px-3 py-2">
          <div className="mt-3 space-y-1">
            <SideNav
              isOpen={isOpen}
              className="text-background opacity-0 transition-all duration-300 group-hover:z-50 group-hover:ml-4 group-hover:rounded group-hover:bg-foreground group-hover:p-2 group-hover:opacity-100"
              items={NavItems}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
