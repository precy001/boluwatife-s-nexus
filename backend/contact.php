<?php

    header("Access-Control-Allow-Origin: *");

// Allow cookies / authorization headers if needed later
    header("Access-Control-Allow-Credentials: true");

    // Allowed HTTP methods
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

    // Allowed headers from frontend
    header("Access-Control-Allow-Headers: Content-Type, Authorization");

    // Response format
    header("Content-Type: application/json");
    //database connection

    $host = "localhost";
    $user = "root";
    $password = "";
    $database = "ultimatedev";

    $conn = mysqli_connect($host, $user, $password, $database);

    $sender_name = $_POST["name"];
    $sender_email = $_POST["email"];
    $sender_message = $_POST["message"];

    if($sender_name && $sender_email && $sender_message){
        $sql = "INSERT INTO contact_messages (name, email, message) VALUES('$sender_name','$sender_email', '$sender_message')";
        echo "success";
    }else{
        echo "All fields required";
    }
?>