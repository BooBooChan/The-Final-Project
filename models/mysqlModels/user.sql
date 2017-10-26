#Creating database for entire app.
DROP DATABASE `SecondFirstAid` IF EXISTS;
CREATE DATABASE `SecondFirstAid`;
USE DATABASE `SecondFirstAid`;
#Creating tables for database
DROP TABLE `Contacts` IF EXISTS;
CREATE TABLE `Contacts`(
	`id` INT NOT NULL AUTO_INCREMENT, 
	`name` VARCHAR(20) NULL,
	`address_1` VARCHAR(50) NULL, #LocationSubject to change. Do we want address or just general location?
	`address_2` VARCHAR(10) NULL,
	`city` VARCHAR(20) NULL,
	`state` VARCHAR(20) NULL,
	#country is assumed to be same as country in user's address
	`zip` VARCHAR(20) NULL,
	`country_code` INT NULL,#Phone number
	`area_code` INT NULL,
	`main_number` INT NULL,
	`username` VARCHAR(20) NULL,
	`email_host` VARCHAR(20) NULL,
	`domain` VARCHAR(4) NULL,
	`country_code` INT NULL,#Fax number
	`area_code` INT NULL,
	`main_number` INT NULL,

);
INSERT INTO `Contacts`()
DROP TABLE `Demo` IF EXISTS;
CREATE TABLE `Demo`;
DROP TABLE `Login` IF EXISTS;
CREATE TABLE `Login`(
	`id` INT NOT NULL AUTO_INCREMENT,
	`first_name` VARCHAR(20) NULL,
	`last_name` VARCHAR(20) NULL,
	`username` VARCHAR(20) NULL,
	`email` VARCHAR(20) NULL,
	`password` VARCHAR(20) NULL,
	`password_hint` VARCHAR(50) NULL 
);

DROP TABLE `Meal_Plans` IF EXISTS;
CREATE TABLE `Meal_Plans`(
	`day_of_week` VARCHAR(8) NULL,
	`meal`
	`measurement_unit`#ingredient quantities
	`unit_quantity`#ingredient quantities
	`servings_per_meal`
	`min_hours` #estimated prep time
	`min_minutes` #estimated prep time
	`max_hours` #estimated prep time
	`max_minutes` #estimated prep time
);
DROP TABLE `Shopping_List` IF EXISTS;
CREATE TABLE `Shopping_List`(
	`id` INT NOT NULL AUTO_INCREMENT,
	`item`#each_item
	`quantity`#each_item
	`price` #each_item
	`total` #each_item
	`net_total`

);
DROP TABLE `Supply_Quantity` IF EXISTS;
CREATE TABLE `Supply_Quantity`(
	`id` INT NOT NULL AUTO_INCREMENT,
	`item` VARCHAR(50) NULL,#each item
	`quantity` INT NULL,#each item 
	`dosage` #each item. Consider ratio of quantity per time unit
	`total` #each item
	`net_total` INT NULL
);
DROP TABLE `Weekly_Schedule` IF EXISTS;
CREATE TABLE `Weekly_Schedule`(
	`day_of_week` VARCHAR(8) #not null!
	`appointment` VARCHAR(300),
	`start_time_hour` INT NULL,
	`start_time_minute` INT NULL,
	`end_time_hour` INT NULL,
	`end_time_minute` INT NULL
);
DROP TABLE `Login` IF EXISTS;
CREATE TABLE `Login`(
	`id` INT NOT NULL AUTO_INCREMENT,
	`first_name` VARCHAR(20) NULL,
	`last_name` VARCHAR(20) NULL,
	`username` VARCHAR(20) NULL,
	`email` VARCHAR(20) NULL,
	`password` VARCHAR(20) NULL,
	`password_hint` VARCHAR(300) NULL
);
#Inserting Demo Data into database. Any other data must be inserted/deleted via the JS sheet.
INSERT INTO `Login`(`first_name`,`last_name`,`username`,`email`,`password`,`password_hint`);
VALUES (`Demo N.`,`Stration`,`DemoTheDemon`,`demo@demonstration.de`,`password`,`the easiest password to guess`);
INSERT INTO `Contacts` (`name`, `address_1`, `address_2`, `city`, `state`, `zip`, `country_code`, `area_code`, `main_number`, `country_code`, `area_code`, `main_number`, `username`, `email_host`, `domain`)
VALUES(`Demo N. Stration`, `1776 Demonstration St`, `1-776`, `Demon`, `Stration`, `00704-1776`), 1, 666, 1000000, 1, 666, 1000001, `DemoTheDemon` `demonstration`, `de`);
INSERT INTO `Meal_Plans`(`day_of_week`, `meal`, `measurement_unit`, `unit_quantity`, `servings_per_meal`, `min_hours`, `min_minutes`, `max_hours`, `max_minutes`)
VALUES(`Sunday`, `breakfast`, `cup`, 2, 4, 0, 30, 1, 0);
INSERT INTO `Shopping_List`(`item`, `quantity`, `price`, `total`)
VALUES(`demo_cd`, 1000000, 1, 1000000);
INSERT INTO `Supply_Quantity`()
VALUES(`item`, `quantity`, `dosage`, `total`);
INSERT INTO `Weekly_Schedule`(`day_of_week`, `appointment`, `start_time_hour`, `start_time_minute`, `end_time_hour`, `end_time_minute`)
VALUES(`Saturday`, `Hand out demo cds to passersby`, 8, 00, 11, 30);