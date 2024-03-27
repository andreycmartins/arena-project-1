import { SnackshopMenu, SnackshopOpeningHours } from '@prisma/client'
import { db } from './prisma'

// export const getServerSideProps: GetServerSideProps = async () => {
//   const snacks = await db.snackshopMenu.findMany

//   const snackshopOpeningHours = await db.snackshopOpeningHours.findMany({
//     orderBy: {
//       order: 'asc',
//     },
//   })
//   return {
//     props: {
//       snacks,
//       snackshopOpeningHours,
//     },
//   }
// }

export async function getSnackshopMenu() {
  try {
    const snacks: SnackshopMenu[] = await db.snackshopMenu.findMany()
    return snacks
  } catch (error) {
    return error
  }
}

export async function getSnackshopOpeningHours() {
  try {
    const snackshopOpeningHours: SnackshopOpeningHours[] =
      await db.snackshopOpeningHours.findMany({
        orderBy: {
          order: 'asc',
        },
      })
    console.log(snackshopOpeningHours)
    return snackshopOpeningHours
  } catch (error) {
    return error
  }
}
