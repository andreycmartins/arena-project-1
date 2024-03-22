/*
  Warnings:

  - Made the column `order` on table `OpeningHours` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "OpeningHours" ALTER COLUMN "order" SET NOT NULL;
