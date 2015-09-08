<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = strip_tags(trim($_POST["contactpagefirstname"]));
    $firstname = str_replace(array("\r","\n"),array(" "," "),$firstname);
    $lastname = strip_tags(trim($_POST["contactpagelastname"]));
    $lastname = str_replace(array("\r","\n"),array(" "," "),$lastname);
    $email = filter_var(trim($_POST["contactpageemail"]), FILTER_SANITIZE_EMAIL);
    $subject = trim($_POST["contactpagesubject"]);
    $message = trim($_POST["contactpagemessage"]);

    if ( empty($firstname) OR empty($lastname) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
      http_response_code(400);
      echo "Please complete the form and try again.";
      exit;
    }

    $recipient = "lukezgabrieli@gmail.com";
    $subject = "$subject";

    $email_content = "Name: $firstname $lastname\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message: $message\n";

    $email_headers = "From: $firstname $lastname <$email>";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
      http_response_code(200);
      echo "Thanks! Your message has been sent.";
    } else {
      http_response_code(500);
      echo "Something went wrong and we couldn't send your message.";
    }

  } else {
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
  }
?>
