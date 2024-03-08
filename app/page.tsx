'use client'

import CardImage from '@/components/CardImage'
import { NavigationMenuDemo } from '@/components/Navbar'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

export default function Home() {
  const smDown = useMediaQuery({ maxWidth: 600 })
  return (
    <div className="flex justify-center w-screen">
      <div className="flex justify-center flex-col p-1 m-1 max-w-6xl">
        <NavigationMenuDemo />
        <div className={`flex ${smDown ? 'flex-col' : 'flex-row'}`}>
          <Image
            className=""
            src="/logo.png"
            alt="Logo"
            width={300}
            height={300}
          />
          <CardImage
            title="Card Title"
            description="Card Description"
            image="/3dollar.jpg"
            footer="Eis o footer"
          />
        </div>
      </div>
    </div>
  )
}
