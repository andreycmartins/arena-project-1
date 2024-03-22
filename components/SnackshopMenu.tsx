import { Card, Inset, Strong, Text } from '@radix-ui/themes'
import Image from 'next/image'

export function SnackshopMenu() {
  return (
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
        <Strong>Typography</Strong> is the art and technique of arranging type
        to make written language legible, readable and appealing when displayed.
      </Text>
    </Card>
  )
}
