<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "portfolio_db");

if ($conn->connect_error) {
    echo json_encode([
        "success" => false,
        "message" => "Database connection failed"
    ]);
    exit();
    }

    $sql = "SELECT * FROM profile_info LIMIT 1";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
    echo json_encode([
        "success" => true,
        "data" => $result->fetch_assoc()
    ]);
    } else {
    echo json_encode([
        "success" => false,
        "message" => "No profile found"
    ]);
}

$conn->close();
?>