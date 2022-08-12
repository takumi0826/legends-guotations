-- MySQL dump 10.13  Distrib 5.7.35, for osx10.16 (x86_64)

--

-- Host: localhost    Database: legends

-- ------------------------------------------------------

-- Server version	5.7.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */

;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */

;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */

;

/*!40101 SET NAMES utf8 */

;

/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */

;

/*!40103 SET TIME_ZONE='+00:00' */

;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */

;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */

;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */

;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */

;

--

-- Table structure for table `_prisma_migrations`

--

DROP TABLE IF EXISTS `_prisma_migrations`;

/*!40101 SET @saved_cs_client     = @@character_set_client */

;

/*!40101 SET character_set_client = utf8 */

;

CREATE TABLE
    `_prisma_migrations` (
        `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
        `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
        `finished_at` datetime(3) DEFAULT NULL,
        `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
        `logs` text COLLATE utf8mb4_unicode_ci,
        `rolled_back_at` datetime(3) DEFAULT NULL,
        `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
        `applied_steps_count` int(10) unsigned NOT NULL DEFAULT '0',
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

/*!40101 SET character_set_client = @saved_cs_client */

;

--

-- Dumping data for table `_prisma_migrations`

--

LOCK TABLES `_prisma_migrations` WRITE;

/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */

;

INSERT INTO
    `_prisma_migrations`
VALUES (
        'b88acac8-8f23-43da-b79d-7ec890abce35',
        '80bb72333a92ea92f83f3982b3f12c55fd5932daa0c7c414a65962ad95e758db',
        '2022-08-06 02:20:00.882',
        '20220806022000_init',
        NULL,
        NULL,
        '2022-08-06 02:20:00.592',
        1
    );

/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */

;

UNLOCK TABLES;

--

-- Table structure for table `category`

--

DROP TABLE IF EXISTS `category`;

/*!40101 SET @saved_cs_client     = @@character_set_client */

;

/*!40101 SET character_set_client = utf8 */

;

CREATE TABLE
    `category` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
        `delFlag` tinyint(4) NOT NULL DEFAULT '0',
        `parentId` int(11) DEFAULT NULL,
        PRIMARY KEY (`id`),
        KEY `category_parentId_fkey` (`parentId`),
        CONSTRAINT `category_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `parent_category` (`id`) ON DELETE
        SET
            NULL ON UPDATE CASCADE
    ) ENGINE = InnoDB AUTO_INCREMENT = 11 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

/*!40101 SET character_set_client = @saved_cs_client */

;

--

-- Dumping data for table `category`

--

LOCK TABLES `category` WRITE;

/*!40000 ALTER TABLE `category` DISABLE KEYS */

;

INSERT INTO `category`
VALUES (1, '芸能人', 0, 1), (2, 'プロ野球選手', 0, 2), (3, '歌手', 0, 1), (4, 'サッカー選手', 0, 2), (5, '芸人・タレント', 0, 3), (6, '作詞家', 0, 4), (7, '作家', 0, 4), (8, '漫画家', 0, 4), (9, '匿名', 0, 99), (10, 'テニス選手', 0, 2);

/*!40000 ALTER TABLE `category` ENABLE KEYS */

;

UNLOCK TABLES;

--

-- Table structure for table `legend`

--

DROP TABLE IF EXISTS `legend`;

/*!40101 SET @saved_cs_client     = @@character_set_client */

;

/*!40101 SET character_set_client = utf8 */

;

CREATE TABLE
    `legend` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `meigen` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
        `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 33 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

/*!40101 SET character_set_client = @saved_cs_client */

;

--

-- Dumping data for table `legend`

--

LOCK TABLES `legend` WRITE;

/*!40000 ALTER TABLE `legend` DISABLE KEYS */

;

INSERT INTO `legend`
VALUES (1, '生きてるだけで丸儲け', '明石家さんま'), (
        2,
        '結果が出ないとき、どういう自分でいられるか。決してあきらめない姿勢が何かを生み出すきっかけをつくる',
        'イチロー'
    ), (9, '嫌がるのはもう撮れてるからw', '木梨憲武'), (
        16,
        '濱家体毛薄そうなのに足の毛バリ濃くて草',
        '匿名'
    ), (
        17,
        '人はそれぞれ事情をかかえ、平然と生きている',
        '伊集院静'
    ), (
        18,
        'いつか、必ず、チャンスの順番が来ると信じなさい',
        '秋元康'
    ), (
        19,
        '人を信じよ、しかし、その百倍も自らを信じよ',
        '手塚治虫'
    ), (
        20,
        'しないではいられないことを、 し続けなさい',
        '水木しげる'
    ), (
        21,
        '努力は必ず報われる。もし報われない努力があるのならば、それはまだ努力と呼べない',
        '王貞治'
    ), (
        22,
        '結果にこだわるな、成功にこだわるな、成長にこだわれ',
        '本田圭佑'
    ), (
        23,
        '勝ち負けなんかちっぽけなこと。大事なことは本気だったかどうかだ',
        '松岡修造'
    ), (
        24,
        '自己犠牲を厭わない人には、信頼が集まる',
        '野村克也'
    ), (25, '俺は寝ている時は、真面目だよ', '高田純次'), (
        26,
        '自分を少し抑えて、肩の力を抜けば、仕事は長続きする',
        '関根勤'
    ), (
        27,
        '努力ってのは宝くじみたいなものだよ。買っても当たるかどうかはわからないけど、買わなきゃ当たらない',
        'ビートたけし'
    ), (
        28,
        '下積みはつらくなかった。だって好きなことだから',
        '石橋貴明'
    ), (29, '明日死ぬとしても笑うわ', '松本人志'), (
        30,
        '俺はこの先お笑い一本で考えていない。相方が偉大すぎて',
        '浜田雅功'
    ), (
        31,
        '人生というのは、失うものを増やしていくゲームなんだ',
        '矢沢永吉'
    ), (
        32,
        'あんまり若いうちからしっかりしすぎちゃダメよ。嫌なときは仕事バックれちゃったりとかしていいのよ',
        'マツコ・デラックス'
    );

/*!40000 ALTER TABLE `legend` ENABLE KEYS */

;

UNLOCK TABLES;

--

-- Table structure for table `legend_category`

--

DROP TABLE IF EXISTS `legend_category`;

/*!40101 SET @saved_cs_client     = @@character_set_client */

;

/*!40101 SET character_set_client = utf8 */

;

CREATE TABLE
    `legend_category` (
        `legendId` int(11) NOT NULL,
        `categoryId` int(11) NOT NULL,
        PRIMARY KEY (`legendId`, `categoryId`),
        KEY `legend_category_categoryId_fkey` (`categoryId`),
        CONSTRAINT `legend_category_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON UPDATE CASCADE,
        CONSTRAINT `legend_category_legendId_fkey` FOREIGN KEY (`legendId`) REFERENCES `legend` (`id`) ON UPDATE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

/*!40101 SET character_set_client = @saved_cs_client */

;

--

-- Dumping data for table `legend_category`

--

LOCK TABLES `legend_category` WRITE;

/*!40000 ALTER TABLE `legend_category` DISABLE KEYS */

;

INSERT INTO `legend_category`
VALUES (32, 1), (2, 2), (21, 2), (24, 2), (31, 3), (22, 4), (1, 5), (9, 5), (25, 5), (26, 5), (27, 5), (28, 5), (29, 5), (30, 5), (17, 6), (17, 7), (18, 7), (19, 8), (20, 8), (16, 9), (23, 10);

/*!40000 ALTER TABLE `legend_category` ENABLE KEYS */

;

UNLOCK TABLES;

--

-- Table structure for table `parent_category`

--

DROP TABLE IF EXISTS `parent_category`;

/*!40101 SET @saved_cs_client     = @@character_set_client */

;

/*!40101 SET character_set_client = utf8 */

;

CREATE TABLE
    `parent_category` (
        `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
        `delFlag` tinyint(4) NOT NULL DEFAULT '0',
        `id` int(11) NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 102 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

/*!40101 SET character_set_client = @saved_cs_client */

;

--

-- Dumping data for table `parent_category`

--

LOCK TABLES `parent_category` WRITE;

/*!40000 ALTER TABLE `parent_category` DISABLE KEYS */

;

INSERT INTO `parent_category`
VALUES ('芸能人', 0, 1), ('アスリート', 0, 2), ('芸人・タレント', 0, 3), ('クリエイター', 0, 4), ('匿名', 0, 99);

/*!40000 ALTER TABLE `parent_category` ENABLE KEYS */

;

UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */

;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */

;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */

;

/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */

;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */

;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */

;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */

;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */

;

-- Dump completed on 2022-08-11 12:21:09