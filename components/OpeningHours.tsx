import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { OpeningHours, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function OpeningHours() {
  const openingHours: OpeningHours[] = await prisma.openingHours.findMany({
    orderBy: {
      order: 'asc',
    },
  })

  return (
    <div className="flex flex-col items-center">
      <h1>Horário de funcionamento</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Dia</TableHead>
            <TableHead>Abertura</TableHead>
            <TableHead>Fechamento</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {openingHours.map((openingHour) => (
            <TableRow key={openingHour.day}>
              <TableCell className="font-medium">{openingHour.day}</TableCell>
              <TableCell>{openingHour.opening}</TableCell>
              <TableCell>{openingHour.closure}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
