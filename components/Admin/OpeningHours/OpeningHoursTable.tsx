import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { getSnackshopOpeningHours } from '@/lib/PrismaService'

interface SnackshopOpeningHours {
  id: string
  day: string
  opening: string
  closure: string
  order: number
  createdAt: Date
  updatedAt: Date
}

export async function OpeningHoursTable() {
  getSnackshopOpeningHours()

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
          {/* {snackshopOpeningHours?.map((snackshopOpeningHour) => (
            <TableRow key={snackshopOpeningHour.day}>
              <TableCell className="font-medium">
                {snackshopOpeningHour.day}
              </TableCell>
              <TableCell>{snackshopOpeningHour.opening}</TableCell>
              <TableCell>{snackshopOpeningHour.closure}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </div>
  )
}
