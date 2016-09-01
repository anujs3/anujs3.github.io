<?php 

$first_name = ucfirst($_POST['first_name']);
$last_name = ucfirst($_POST['last_name']);
$email_address = $_POST['email'];
$number_attendees = $_POST['num_attendees'];
$names = $_POST['names'];
$message = $_POST['message'];

$to = "aashiparth@gmail.com";
$subject = "New RSVP";
$headers = "From: $email_address\r\n";

$choice = "No";
if ($_POST['choice'] == "yes")
{
	$choice = "Yes";
}

$team = "No Team";
if ($_POST['team'] == "Aashita")
{
	$team = "Team Aashita";
}
else if ($_POST['team'] == "Parth")
{
	$team = "Team Parth";
}

$message = "A visitor to your site has sent the following RSVP information:\n\nFirst Name: $first_name\nLast Name: $last_name\n\nEmail Address: $email_address\nAttending? $choice\n\nNumber of Attendees: $number_attendees\nAttendee Names: $names\n\n$team\n\nMessage:\n$message";

if (mail($to,$subject,$message,$headers))
{
	header('Location: AashitaParth.html#RSVP');
	
	/*
	echo "
            <script type=\"text/javascript\">
            document.getElementById(\"formSubmitted\").innerHTML = \"RSVP Successfully Submitted!\";
            </script>
         ";
	*/
	// echo "SUCCESS";
}
else
{
	echo "ERROR";
}

?>