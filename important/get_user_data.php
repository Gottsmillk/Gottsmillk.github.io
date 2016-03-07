<?php 
	include 'db.php';
	$connect = new mysqli($ip, $username, $password); // opens the connection to the database
	
	$result = mysql_query("SELECT accoundID,firstName,lastName,username,email,isBanned,regDate,lastLogin FROM accounts WHERE username = '<?php echo $_GET["username"]; ?>'");
	if (!$result) {
		echo 'An issue has occured. Error: ' . mysql_error();
		exit;
	}
	$conn->close();
	$row = mysql_fetch_row($result);
	
//begin displaying info
	
	echo 'Username: ' + $row[3];
	echo 'User ID: ' + $row[0];
	echo 'Name: ' + $row[1] + ' ' + $row[2];
	echo 'Email: ' + $row[4];
	echo 'Banned: (0 means no, 1 means yes) ' + $row[5];
	echo 'Registration Date: ' + $row[6];
	echo 'Last Login (timestamp): ' + $row[7];