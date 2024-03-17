/*
  Warnings:

  - Added the required column `logoUrl` to the `Arena` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Arena" ADD COLUMN     "addressCEP" TEXT,
ADD COLUMN     "logoUrl" TEXT NOT NULL;
