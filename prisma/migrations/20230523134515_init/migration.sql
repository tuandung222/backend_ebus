/*
  Warnings:

  - You are about to drop the column `listStationId` on the `BusLine` table. All the data in the column will be lost.
  - You are about to drop the `Place` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `busLineId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lattitude` to the `BusStation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `BusStation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthDate` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Booking` ADD COLUMN `busLineId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `BusLine` DROP COLUMN `listStationId`;

-- AlterTable
ALTER TABLE `BusStation` ADD COLUMN `lattitude` DOUBLE NOT NULL,
    ADD COLUMN `longitude` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `birthDate` DATETIME(3) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `Place`;

-- CreateTable
CREATE TABLE `LocationSearching` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_BusLineToBusStation` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_BusLineToBusStation_AB_unique`(`A`, `B`),
    INDEX `_BusLineToBusStation_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `LocationSearching` ADD CONSTRAINT `LocationSearching_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_busStartStationId_fkey` FOREIGN KEY (`busStartStationId`) REFERENCES `BusStation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_busEndStationId_fkey` FOREIGN KEY (`busEndStationId`) REFERENCES `BusStation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_busLineId_fkey` FOREIGN KEY (`busLineId`) REFERENCES `BusLine`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BusLineToBusStation` ADD CONSTRAINT `_BusLineToBusStation_A_fkey` FOREIGN KEY (`A`) REFERENCES `BusLine`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BusLineToBusStation` ADD CONSTRAINT `_BusLineToBusStation_B_fkey` FOREIGN KEY (`B`) REFERENCES `BusStation`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
