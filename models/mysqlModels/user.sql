#Creating database for entire app.
DROP DATABASE `SecondFirstAid` IF EXISTS;
CREATE DATABASE `SecondFirstAid`;
USE DATABASE `SecondFirstAid`;
#Creating tables for database
DROP TABLE `Contacts` IF EXISTS;
CREATE DATABASE `Contacts`(
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
DROP DATABASE `Demo` IF EXISTS;
CREATE DATABASE `Demo`;
DROP DATABASE `Login` IF EXISTS;
CREATE DATABASE `Login`(
	`id` INT NOT NULL AUTO_INCREMENT,
	`first_name` VARCHAR(20) NULL,
	`last_name` VARCHAR(20) NULL,
	`username` VARCHAR(20) NULL,
	`email` VARCHAR(20) NULL,
	`password` VARCHAR(20) NULL,
	`password_hint` VARCHAR(50) NULL 
);

DROP DATABASE `MealPlans` IF EXISTS;
CREATE DATABASE `MealPlans`;
DROP DATABASE `ShoppingList` IF EXISTS;
CREATE DATABASE `ShoppingList`;
DROP DATABASE `SupplyQuantity` IF EXISTS;
CREATE DATABASE `SupplyQuantity`;
DROP DATABASE `WeeklySchedule` IF EXISTS;
CREATE DATABASE `WeeklySchedule`;
#Inserting Demo Data into database. Any other data must be inserted/deleted via the JS sheet.
INSERT INTO `Login`(`first_name`,`last_name`,`username`,`email`,`password`,`password_hint`);
VALUES (`Demo N.`,`Stration`,`DemoTheDemon`,`demo@demonstration.de`,`password`,`the easiest password to guess`);
