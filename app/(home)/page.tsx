'use client'

import CardImage from '@/components/CardImage'
import { OpeningHours } from '@/components/OpeningHours'
import { Card, Inset, Strong, Text } from '@radix-ui/themes'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

export default function Home() {
  const { data } = useSession()

  console.log(data?.user?.name)

  const mdDown = useMediaQuery({ maxWidth: 750 })
  return (
    <div className="flex justify-center w-screen">
      <div className="flex justify-center flex-col p-1 m-1 max-w-6xl">
        <div
          className={`flex gap-5 items-center ${mdDown ? 'flex-col' : 'flex-row'}`}
        >
          <Image src="/logo.png" alt="Logo" width={300} height={300} />
          <CardImage
            title="Card Title"
            description="Card Description"
            image="/molusco.jpg"
            footer="Eis o footer"
          />
          <Card size="2" style={{ maxWidth: 240 }}>
            <Inset clip="padding-box" side="top" pb="current">
              <Image
                src="/3dollar.jpg"
                alt="Bold typography"
                width={900}
                height={900}
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            </Inset>
            <Text as="p" size="3">
              <Strong>Typography</Strong> is the art and technique of arranging
              type to make written language legible, readable and appealing when
              displayed.
            </Text>
          </Card>
        </div>
        <div className="max-w-[50%]">
          <OpeningHours />
        </div>
      </div>
    </div>
  )
}
