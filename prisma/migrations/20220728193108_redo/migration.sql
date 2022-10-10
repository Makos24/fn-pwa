/*
  Warnings:

  - You are about to drop the column `chipId` on the `Birth` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Birth` table. All the data in the column will be lost.
  - Made the column `name` on table `Chip` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Birth" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "edd" TEXT NOT NULL
);
INSERT INTO "new_Birth" ("edd", "id", "name", "phone") SELECT "edd", "id", "name", "phone" FROM "Birth";
DROP TABLE "Birth";
ALTER TABLE "new_Birth" RENAME TO "Birth";
CREATE TABLE "new_Chip" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Chip" ("email", "id", "name", "phone") SELECT "email", "id", "name", "phone" FROM "Chip";
DROP TABLE "Chip";
ALTER TABLE "new_Chip" RENAME TO "Chip";
CREATE UNIQUE INDEX "Chip_email_key" ON "Chip"("email");
CREATE UNIQUE INDEX "Chip_phone_key" ON "Chip"("phone");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
