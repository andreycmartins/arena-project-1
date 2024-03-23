'use client'
import { EditOpeningHours } from '@/components/OpeningHours/EditOpeningHourrs'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function Config() {
  const [modalEditOpeningHoursStatus, setModalEditOpeningHourStatus] =
    useState(false)
  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Configurações
        </h1>
        <Button onClick={() => setModalEditOpeningHourStatus(true)}>
          abrir modal com state
        </Button>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Dia</TableHead>
              <TableHead>Abertura</TableHead>
              <TableHead>Fechamento</TableHead>
              <TableHead>{''}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* {snackshopOpeningHours.map((snackshopOpeningHour) => (
              <TableRow key={snackshopOpeningHour.day}>
                <TableCell className="font-medium">
                  {snackshopOpeningHour.day}
                </TableCell>
                <TableCell>{snackshopOpeningHour.opening}</TableCell>
                <TableCell>{snackshopOpeningHour.closure}</TableCell>
                <TableCell>
                  <EditIcon
                    onClick={() => {
                      handleEditOpeningHour(snackshopOpeningHour.id)
                    }}
                  />
                </TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>

        {modalEditOpeningHoursStatus && (
          <EditOpeningHours
            // openingHourId={openingHourId}
            modalStatus={modalEditOpeningHoursStatus}
            setModalStatus={setModalEditOpeningHourStatus}
          />
        )}
      </div>
    </>
  )
}

export default Config
