/*
  Warnings:

  - Added the required column `zipCode` to the `Gastronomia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Gastronomia" ADD COLUMN     "zipCode" TEXT NOT NULL;
