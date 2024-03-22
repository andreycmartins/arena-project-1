/*
  Warnings:

  - You are about to drop the `OpeningHours` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "OpeningHours";

-- CreateTable
CREATE TABLE "SnackshopOpeningHours" (
    "id" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "opening" TEXT NOT NULL,
    "closure" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SnackshopOpeningHours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SnackshopMenu" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "SnackshopMenu_pkey" PRIMARY KEY ("id")
);
