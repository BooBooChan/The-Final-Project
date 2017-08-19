#Creating database for entire app.
DROP DATABASE `SecondFirstAid` IF EXISTS;
CREATE DATABASE `SecondFirstAid`;
USE DATBASE `SecondFirstAid`;
#Creating tables for database
DROP TABLE `Contacts` IF EXISTS;
CREATE DATABASE `Contacts`(
	id INT NOT NULL AUTO_INCREMENT

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
