<?php
header("Content-Type: application/json; charset=UTF-8");

$host = 'db';
$db   = 'velo';
$user = 'velo';
$pass = 'velo';

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "DB connection failed"]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $result = $conn->query("SELECT * FROM products");
    $products = [];
    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
    echo json_encode($products, JSON_UNESCAPED_UNICODE);
    exit;
}

// Для добавления товара (POST-запрос)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    if (!$data) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid JSON"]);
        exit;
    }
    $stmt = $conn->prepare("INSERT INTO products (name, description, price, image, image2, image3, image4) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $data['name'], $data['description'], $data['price'], $data['image'], $data['image2'], $data['image3'], $data['image4']);
    $stmt->execute();
    echo json_encode(["success" => true, "id" => $conn->insert_id]);
    exit;
}

http_response_code(405);
echo json_encode(["error" => "Method not allowed"]); 