<?php
/*
* Establish database connection
*/
	$ip = "localhost";
	$username = "username";
	$password = "password";
/*
* Open and check if the connection works
*/
	$connect = new mysql($ip, $username, $password);
	if (! $conn) {
		die("The MySQL database connection could not be established. Error: " . mysql_error());
	}
	mysql.close($connect); // I think this closes the most recent connection...?