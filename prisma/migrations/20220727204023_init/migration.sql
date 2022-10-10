-- CreateTable
CREATE TABLE "Chip" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Birth" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "edd" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "chipId" INTEGER NOT NULL,
    CONSTRAINT "Birth_chipId_fkey" FOREIGN KEY ("chipId") REFERENCES "Chip" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Chip_email_key" ON "Chip"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Chip_phone_key" ON "Chip"("phone");
