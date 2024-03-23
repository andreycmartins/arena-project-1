import {
  PrismaClient,
  SnackshopMenu,
  SnackshopOpeningHours,
} from '@prisma/client'

const prisma = new PrismaClient()

export async function getOpeningHours() {
  const snackshopOpeningHours: SnackshopOpeningHours[] =
    await prisma.snackshopOpeningHours.findMany({
      orderBy: {
        order: 'asc',
      },
    })

  return snackshopOpeningHours
}

export async function getSnackshopMenus() {
  const snacks: SnackshopMenu[] = await prisma.snackshopMenu.findMany()
  return snacks
}
