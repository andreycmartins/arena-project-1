'use client'
import { EditOpeningHours } from '@/components/Admin/OpeningHours/EditOpeningHourrs'
import { OpeningHoursTable } from '@/components/Admin/OpeningHours/OpeningHoursTable'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export default function Config() {
  const [modalEditOpeningHoursStatus, setModalEditOpeningHourStatus] =
    useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  console.log(isClient)

  return (
    <>
      {isClient ? (
        <h1>is client</h1>
      ) : (
        <div className="flex flex-col gap-3">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Configurações
          </h1>
          <Button onClick={() => setModalEditOpeningHourStatus(true)}>
            Configurar abertura de horários
          </Button>
          <OpeningHoursTable />
          <EditOpeningHours
            modalStatus={modalEditOpeningHoursStatus}
            setModalStatus={setModalEditOpeningHourStatus}
          />
        </div>
      )}
    </>
  )
}
