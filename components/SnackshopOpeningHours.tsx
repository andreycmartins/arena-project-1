import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { db } from '@/lib/prisma'
import { SnackshopOpeningHours } from '@prisma/client'

export async function SnackshopOpeningHours() {
  const snackshopOpeningHours = await db.snackshopOpeningHours.findMany({
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
          {snackshopOpeningHours?.map((snackshopOpeningHour) => (
            <TableRow key={snackshopOpeningHour.day}>
              <TableCell className="font-medium">
                {snackshopOpeningHour.day}
              </TableCell>
              <TableCell>{snackshopOpeningHour.opening}</TableCell>
              <TableCell>{snackshopOpeningHour.closure}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
