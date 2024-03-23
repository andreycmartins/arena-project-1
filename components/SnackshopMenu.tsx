import { getSnackshopMenus } from '@/lib/PrismaService'
import { currencyFormatter } from '@/lib/utils'
import { Card, Inset, Strong, Text } from '@radix-ui/themes'
import Image from 'next/image'

export async function SnackshopMenu() {
  const snacks = await getSnackshopMenus()

  return (
    <>
      <div className="flex flex-row gap-3 items-baseline">
        {snacks.map((snack) => (
          <Card key={snack.id} style={{ maxWidth: 250 }}>
            {snack.image && (
              <Inset clip="padding-box" side="top" pb="current">
                <Image
                  src={snack?.image}
                  alt="Bold typography"
                  width={200}
                  height={200}
                  style={{
                    display: 'block',
                    objectFit: 'cover',
                    backgroundColor: 'var(--gray-5)',
                  }}
                />
              </Inset>
            )}
            <Text as="p" size="3" className="flex flex-col">
              <Strong style={{ flex: '1' }}>{snack.name}</Strong>
              <span>{currencyFormatter.format(Number(snack.price))}</span>
            </Text>
          </Card>
        ))}
      </div>
    </>
  )
}
