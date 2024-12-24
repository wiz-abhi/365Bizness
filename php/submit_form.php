<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Check if the honeypot field is filled (it shouldn't be)
    if (!empty($_POST['bot-field'])) {
        die("Bot detected!");
    }

    // Basic email validation
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    // Recipient email address
    $to = "yogeshsharma88943@gmail.com";  // Replace with your email
    $subject = "New Message from " . $name;
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        // Success message (optional, can redirect)
        echo "<p>Thank you for your message!</p>";
    } else {
        echo "<p>There was an issue sending your message. Please try again later.</p>";
    }
}
?>
