<?php

if(isset($_POST["submit"])) {
$to = "lukezgabrieli@gmail.com";
$contactpagesubject = $_POST["contactpagesubject"];
$contactfirstname = $_POST["contactpagefirstname"];
$contactlastname = $_POST["contactpagelastname"];
$contactpageemail = $_POST["contactpageemail"];
$contactpagemessage = 'First Name: '.$_POST["contactpagefirstname"]."\n"
.'Last Name: '.$_POST["contactpagelastname"]."\n"
.'Email: '.$_POST["contactpageemail"]."\n"
.'Message: '.$_POST["contactpagemessage"];
$headers = 'From: Luke Gabrieli Website';

}
mail ($to, $contactpagesubject, $contactpagemessage, $headers);
header('location: index.html');
?>
