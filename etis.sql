-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: etis
-- ------------------------------------------------------
-- Server version	5.5.5-10.9.4-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `stan`
--

DROP TABLE IF EXISTS `stan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stan` (
  `id_stan` int(11) NOT NULL,
  `nama_stan` varchar(50) DEFAULT NULL,
  `path_logo` varchar(255) DEFAULT NULL,
  `path_menu` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stan`
--

LOCK TABLES `stan` WRITE;
/*!40000 ALTER TABLE `stan` DISABLE KEYS */;
INSERT INTO `stan` VALUES (1,'Chatime','https://marketsquaregeelong.com.au/wp-content/uploads/2021/08/Logo.png','https://www.malang-guidance.com/wp-content/uploads/2018/06/harga-menu-chatime-malang-guidance.jpg'),(2,'KFC','https://seeklogo.com/images/K/kfc-logo-81CF66A86D-seeklogo.com.png','https://b.zmtcdn.com/data/menus/132/7400132/9fd6b45a614d6c6ba623ce8d9ea45ca7.jpg'),(3,'MCD','https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-png-original-logo-hd-0.png','https://gopos.id/wp-content/uploads/2020/02/20200224_002807.jpeg'),(4,'Starbucks Coffee','https://www.freepnglogos.com/uploads/starbucks-logo-png-transparent-0.png','https://i.postimg.cc/Jnv5TMJW/starbucks-menu-FINAL-tcm146-44320.jpg'),(5,'Geprek Bensu','https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/LOGO_GEPREK_BENSU.png/2048px-LOGO_GEPREK_BENSU.png','https://b.zmtcdn.com/data/menus/185/18495185/522ac5b2318610dad1d83b848d37f4a4.jpg');
/*!40000 ALTER TABLE `stan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket` (
  `id_ticket` int(11) NOT NULL AUTO_INCREMENT,
  `nomor_telepon` varchar(255) DEFAULT NULL,
  `tanggal` varchar(255) DEFAULT NULL,
  `harga` varchar(255) DEFAULT NULL,
  `fast_pass` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id_ticket`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
INSERT INTO `ticket` VALUES (1,'08990821878','22 November 2022','10000',0),(2,'11','2022-11-22 17:16:46','10000',1),(16,'123123','2022-11-22 19:04:33','10000',0),(17,'123123','2022-11-22 19:04:33','10000',1),(18,'123123','2022-11-22 19:04:33','10000',1),(19,'231235','2022-11-22 19:06:39','10000',0),(20,'231235','2022-11-22 19:06:39','10000',1),(21,'231235','2022-11-22 19:06:39','10000',1),(22,'816932598298','2022-11-22 19:10:20','10000',1),(23,'816932598298','2022-11-22 19:10:20','10000',0),(24,'816932598298','2022-11-22 19:10:20','10000',0),(25,'816932598298','2022-11-22 19:10:20','10000',1),(26,'816932598298','2022-11-22 19:10:20','10000',1),(27,'123123132','2022-11-22 19:11:33','10000',1),(28,'0','2022-11-23 14:46:45','10000',1);
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transportation`
--

DROP TABLE IF EXISTS `transportation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transportation` (
  `id_kendaraan` int(11) NOT NULL AUTO_INCREMENT,
  `nama_kendaraan` varchar(255) NOT NULL,
  `destination` varchar(255) DEFAULT NULL,
  `time_arrival` varchar(255) DEFAULT NULL,
  `Hari_Operasi` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_kendaraan`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transportation`
--

LOCK TABLES `transportation` WRITE;
/*!40000 ALTER TABLE `transportation` DISABLE KEYS */;
INSERT INTO `transportation` VALUES (7,'Transjakarta','Mangga Dua','20:00','Senin'),(8,'Transjakarta','Mangga Dua','20:00','Selasa'),(9,'Transjakarta','Mangga Dua','20:00','Rabu'),(10,'Transjakarta','Mangga Dua','20:00','Kamis'),(11,'Transjakarta','Mangga Dua','20:00','Jumat'),(12,'Transjakarta','Mangga Dua','20:00','Sabtu'),(13,'Transjakarta','Mangga Dua','20:00','Minggu'),(14,'Metro Mini','Mangga Dua','19:00','Senin'),(15,'Metro Mini','Mangga Dua','19:00','Selasa'),(16,'Metro Mini','Mangga Dua','19:00','Rabu'),(17,'Metro Mini','Mangga Dua','19:00','Kamis'),(18,'Metro Mini','Mangga Dua','19:00','Juamt'),(19,'Metro Mini','Mangga Dua','19:00','Sabtu'),(20,'Metro Mini','Mangga Dua','19:00','Minggu'),(21,'Jak Linkgo','Mangga Dua','21:00','Senin'),(22,'Jak Linkgo','Mangga Dua','21:00','Selasa'),(23,'Jak Linkgo','Mangga Dua','21:00','Rabu'),(24,'Jak Linkgo','Mangga Dua','21:00','Kamis'),(25,'Jak Linkgo','Mangga Dua','21:00','Jumat'),(26,'Jak Linkgo','Mangga Dua','21:00','Sabtu'),(27,'Jak Linkgo','Mangga Dua','21:00','Minggu'),(28,'Transjakarta','Stasiun Kota','21:00','Senin'),(29,'Transjakarta','Stasiun Kota','21:00','Selasa'),(30,'Transjakarta','Stasiun Kota','21:00','Rabu'),(31,'Transjakarta','Stasiun Kota','21:00','Kamis'),(32,'Transjakarta','Stasiun Kota','21:00','Jumat'),(33,'Transjakarta','Stasiun Kota','21:00','Sabtu'),(34,'Transjakarta','Stasiun Kota','21:00','Minggu'),(35,'Metro Mini','Stasiun Kota','18:00','Senin'),(36,'Metro Mini','Stasiun Kota','18:00','Selasa'),(37,'Metro Mini','Stasiun Kota','18:00','Rabu'),(38,'Metro Mini','Stasiun Kota','18:00','Kamis'),(39,'Metro Mini','Stasiun Kota','18:00','Juamt'),(40,'Metro Mini','Stasiun Kota','18:00','Sabtu'),(41,'Metro Mini','Stasiun Kota','18:00','Minggu'),(42,'Jak Linkgo','Stasiun Kota','19:00','Senin'),(43,'Jak Linkgo','Stasiun Kota','19:00','Selasa'),(44,'Jak Linkgo','Stasiun Kota','19:00','Rabu'),(45,'Jak Linkgo','Stasiun Kota','19:00','Kamis'),(46,'Jak Linkgo','Stasiun Kota','19:00','Jumat'),(47,'Jak Linkgo','Stasiun Kota','19:00','Sabtu'),(48,'Jak Linkgo','Stasiun Kota','19:00','Minggu'),(49,'Angkot KWK','Tanjong Priok','18:30','Senin'),(50,'Angkot KWK','Tanjong Priok','21:00','Kamis'),(51,'Angkot KWK','Tanjong Priok','22:00','Minggu'),(52,'Angkot KWK','Tanjong Priok','19:00','Kamis'),(53,'Angkot KWK','Tanjong Priok','18:00','Kamis'),(54,'Angkot KWK','Tanjong Priok','22:00','Rabu'),(55,'Angkot KWK','Tanjong Priok','20:00','Selasa'),(56,'Angkot KWK','Tanjong Priok','20:00','Kamis'),(57,'Angkot KWK','Tanjong Priok','19:00','Senin'),(58,'Angkot KWK','Tanjong Priok','21:30','Kamis'),(59,'Angkot KWK','Tanjong Priok','22:00','Selasa'),(60,'Angkot KWK','Tanjong Priok','23:00','Senin'),(61,'Angkot KWK','Tanjong Priok','19:00','Jumat');
/*!40000 ALTER TABLE `transportation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'etis'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-23 19:47:46
