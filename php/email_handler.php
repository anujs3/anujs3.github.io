<?php 

$first_name = ucfirst($_POST['first_name']);
$last_name = ucfirst($_POST['last_name']);
$email_address = $_POST['email'];
$message = $_POST['message'];

$to = "anujshah26@gmail.com";
$subject = "New Message";
$headers = "From: $email_address\r\n";

$message = "A visitor to your site has sent the following information:\n\nFirst Name: $first_name\nLast Name: $last_name\n\nEmail Address: $email_address\nMessage:\n$message";

if (mail($to,$subject,$message,$headers))
{
	header('Location: AnujShah.html#Home');
}
else
{
	echo "ERROR";
}

?>