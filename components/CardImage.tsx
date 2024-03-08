import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

interface CardImageProps {
  title: string
  image: string
  description: string
  footer: string
}

export default function CardImage({
  image,
  title,
  description,
  footer,
}: CardImageProps) {
  return (
    <Card className="lg:max-w-md w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={image}
          alt="Card Image"
          className="w-full"
          width={300}
          height={300}
        />
      </CardContent>
      <CardFooter>
        <p>{footer}</p>
      </CardFooter>
    </Card>
  )
}
