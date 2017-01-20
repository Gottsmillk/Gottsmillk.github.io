<?php
/*
* Grabs the db file to open the connection
*/
	include 'important/db.php';
	$connect = new mysql($ip, $username, $password);
	
	$firstName = mysql_real_escape_string($_POST['firstName']);
	$lastName = mysql_real_escape_string($_POST['lastName']);
	$username = mysql_real_escape_string($_POST['username']);
	$password = md5(mysql_real_escape_string($_POST['password']));
	$email = mysql_real_escape_string($_POST['email']);
	
	/* 
	* Encrypt the given password
	*/
	
		// insert code
		 
	if(mysql_query("INSERT INTO accounts(firstName,lastName,username,email) VALUES('$firstName','$lastName','$username','$email')"))
	{
		echo "Successfully created account";
	}
	else
	{
		echo "An error occured while attempting to create the account.";
	}