'use client'
import { EditOpeningHours } from '@/components/Admin/OpeningHours/EditOpeningHourrs'
import { SnackshopOpeningHours } from '@/components/SnackshopOpeningHours'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

export default function ClientConfig({
  children,
}: {
  children: React.ReactNode
}) {
  const [modalEditOpeningHoursStatus, setModalEditOpeningHourStatus] =
    useState(false)

  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Configurações
        </h1>
        <Button onClick={() => setModalEditOpeningHourStatus(true)}>
          Configurar abertura de horários
        </Button>
        {children}
        <SnackshopOpeningHours />
        <EditOpeningHours
          modalStatus={modalEditOpeningHoursStatus}
          setModalStatus={setModalEditOpeningHourStatus}
        />
      </div>
    </>
  )
}
