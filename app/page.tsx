'use client'

import { Card, Inset, Strong, Text } from '@radix-ui/themes'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
export default function Home() {
  const smDown = useMediaQuery({ maxWidth: 600 })
  return (
    <div className="flex justify-center w-screen">
      <div className="flex justify-center flex-col p-1 m-1 max-w-6xl">
        <div className={`flex ${smDown ? 'flex-col' : 'flex-row'}`}>
          <Image
            className=""
            src="/logo.png"
            alt="Logo"
            width={300}
            height={300}
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
      </div>
    </div>
  )
}
