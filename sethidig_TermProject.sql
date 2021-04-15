-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 15, 2021 at 02:26 AM
-- Server version: 10.3.28-MariaDB-log
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sethidig_TermProject`
--

-- --------------------------------------------------------

--
-- Table structure for table `Admin`
--

CREATE TABLE `Admin` (
  `usernameAdmin` varchar(10) NOT NULL,
  `passwordAdmin` varchar(20) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Admin`
--

INSERT INTO `Admin` (`usernameAdmin`, `passwordAdmin`, `id`) VALUES
('shubhi', 'qwerty123qw', 1),
('simran', 'qwerty123qw', 2);

-- --------------------------------------------------------

--
-- Table structure for table `Locations`
--

CREATE TABLE `Locations` (
  `street_address` varchar(40) NOT NULL,
  `city` varchar(40) NOT NULL,
  `province` varchar(2) NOT NULL,
  `country` varchar(40) NOT NULL,
  `postal_code` varchar(7) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Locations`
--

INSERT INTO `Locations` (`street_address`, `city`, `province`, `country`, `postal_code`, `id`) VALUES
('443 Granville Street', 'Vancouver', 'BC', 'Canada', 'V1R 0A2', 4),
('331 Main Street', 'Vancouver', 'BC', 'Canada', 'V2W 4B2', 5),
('555 Kerr Street', 'Vancouver', 'BC', 'Canada', 'V6R 3C7', 6),
('9900 Willingdon Avenue', 'Burnaby', 'BC', 'Canada', 'V5R 6T3', 7),
('353 E Broadway', 'Vancouver', 'BC', 'Canada', 'W0R 5G5', 8);

-- --------------------------------------------------------

--
-- Table structure for table `Stats`
--

CREATE TABLE `Stats` (
  `Endpoint` varchar(100) NOT NULL,
  `GET_statistics` int(100) NOT NULL,
  `POST_statistics` int(100) NOT NULL,
  `PUT_statistics` int(100) NOT NULL,
  `DELETE_statistics` int(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Swag`
--

CREATE TABLE `Swag` (
  `brand` varchar(30) NOT NULL,
  `item` varchar(30) NOT NULL,
  `description` varchar(50) NOT NULL,
  `price` int(6) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Swag`
--

INSERT INTO `Swag` (`brand`, `item`, `description`, `price`, `id`) VALUES
('Gucci', 'Scarf', 'Soft', 5, 1),
('LV', 'Toolbox', 'Radical', 30, 2),
('Prada', 'Scarf', 'Soft', 10, 8),
('Rolls Royce', 'Phantom VIII', 'Luxury', 3000, 9),
('Gucci', 'T-Shirt', 'Checkered', 16, 10);

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `usernameLogin` varchar(10) NOT NULL,
  `passwordLogin` varchar(20) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`usernameLogin`, `passwordLogin`, `id`) VALUES
('testUser', '123456', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Admin`
--
ALTER TABLE `Admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Locations`
--
ALTER TABLE `Locations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Swag`
--
ALTER TABLE `Swag`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Admin`
--
ALTER TABLE `Admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Locations`
--
ALTER TABLE `Locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `Swag`
--
ALTER TABLE `Swag`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
