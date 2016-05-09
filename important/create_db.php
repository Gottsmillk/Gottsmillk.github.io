<?php
/*
* Creates the new database if it does not already exist
*/

	include 'db.php';
	$connect = new mysqli($ip, $username, $password); // opens the connection to the database
	
	CREATE DATABASE IF NOT EXISTS projectHype;
	
	CREATE TABLE accounts(
	$sql = "CREATE TABLE accounts (
		accountID INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
		firstName VARCHAR(30) NOT NULL,
		lastName VARCHAR(30) NOT NULL,
		username VARCHAR(30) NOT NULL,
		password VARCHAR(99) NOT NULL,
		email VARCHAR(90),
		regDate TIMESTAMP
		lastLogin TIMESTAMP)";
		
	// add a dummy account for testing purposes. Remove once we actually launch.
	$sql = "INSERT INTO accounts (firstname, lastname, username, password, email)
		VALUES ('Test', 'User', 'TestAdmin', 'pass', 'admin@wallou.net')";
	// end remove code
	
	if ($conn->query($sql) === TRUE) {
		echo "Database has been created successfully.";
	} else {
		echo "The database coult not be created. Error: " . $conn->error;
	}
	mysql.close($connect);