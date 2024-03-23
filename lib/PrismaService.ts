import { SnackshopMenu } from '@prisma/client'
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

export const getSnackshopMenu = async () => {
  const snacks: SnackshopMenu[] = await db.snackshopMenu.findMany()
  return snacks
}
