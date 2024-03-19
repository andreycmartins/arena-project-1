'use client'

import { useSession } from 'next-auth/react'
import React from 'react'

export default function Admin() {
  const { data } = useSession()
  console.log(data)
  return <h1>Admin</h1>
}
