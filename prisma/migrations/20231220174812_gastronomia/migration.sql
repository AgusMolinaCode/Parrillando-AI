/*
  Warnings:

  - Added the required column `direction` to the `Gastronomia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whatsapp` to the `Gastronomia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Gastronomia" ADD COLUMN     "direction" TEXT NOT NULL,
ADD COLUMN     "whatsapp" TEXT NOT NULL;
