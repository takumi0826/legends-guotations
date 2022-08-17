-- CreateTable

SET CHARSET UTF8;

CREATE DATABASE IF NOT EXISTS legends DEFAULT CHARACTER SET utf8;

CREATE TABLE
    `legend` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `meigen` VARCHAR(255) NOT NULL,
        `name` VARCHAR(255) NOT NULL,
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable

CREATE TABLE
    `category` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(255) NOT NULL,
        `delFlag` TINYINT NOT NULL DEFAULT 0,
        `parentId` INTEGER NULL,
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable

CREATE TABLE
    `parent_category` (
        `name` VARCHAR(255) NOT NULL,
        `delFlag` TINYINT NOT NULL DEFAULT 0,
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable

CREATE TABLE
    `legend_category` (
        `legendId` INTEGER NOT NULL,
        `categoryId` INTEGER NOT NULL,
        PRIMARY KEY (`legendId`, `categoryId`)
    ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey

ALTER TABLE `category`
ADD
    CONSTRAINT `category_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `parent_category`(`id`) ON DELETE
SET NULL ON UPDATE CASCADE;

-- AddForeignKey

ALTER TABLE `legend_category`
ADD
    CONSTRAINT `legend_category_legendId_fkey` FOREIGN KEY (`legendId`) REFERENCES `legend`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey

ALTER TABLE `legend_category`
ADD
    CONSTRAINT `legend_category_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;