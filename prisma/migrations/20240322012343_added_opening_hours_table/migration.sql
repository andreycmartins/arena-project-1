-- CreateTable
CREATE TABLE "OpeningHours" (
    "id" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "opening" TEXT NOT NULL,
    "closure" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OpeningHours_pkey" PRIMARY KEY ("id")
);
