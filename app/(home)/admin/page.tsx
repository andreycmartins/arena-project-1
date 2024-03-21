import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function Admin() {
  const users = await prisma.arena.findMany()
  console.log(users)
  return (
    <h1>
      {users.map((user) => {
        return user.name
      })}
    </h1>
  )
}
