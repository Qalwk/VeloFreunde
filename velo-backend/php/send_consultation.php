<?php

// Удалены дублирующиеся заголовки CORS, которые теперь управляются Nginx
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

$vorname = $data['vorname'] ?? '';
$nachname = $data['nachname'] ?? '';
$mail = $data['mail'] ?? '';
$bikeName = $data['bikeName'] ?? '';

$botToken = '6435730384:AAGWB_7wo2mwd2SGu51V_Lifua5oatm1tqM'; // ЗАМЕНИТЕ НА ВАШ БОТ ТОКЕН
$chatId = '860951239';   // ЗАМЕНИТЕ НА ID ВАШЕГО ЧАТА ИЛИ КАНАЛА

$message = "Новая заявка на консультацию:
";
$message .= "Имя: " . $vorname . "
";
$message .= "Фамилия: " . $nachname . "
";
$message .= "Email: " . $mail . "
";
$message .= "Выбранный велосипед: " . $bikeName . "
";

$telegramApiUrl = "https://api.telegram.org/bot" . $botToken . "/sendMessage";

$params = [
    'chat_id' => $chatId,
    'text' => $message,
    'parse_mode' => 'HTML', // Можно использовать 'MarkdownV2' или 'HTML'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $telegramApiUrl);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$telegramResponse = json_decode($response, true);

if ($httpCode == 200 && $telegramResponse['ok']) {
    echo json_encode(['status' => 'success', 'message' => 'Ваша заявка успешно отправлена в Telegram!']);
} else {
    // В случае ошибки Telegram API или HTTP
    $errorMessage = 'Ошибка отправки в Telegram.';
    if ($telegramResponse && isset($telegramResponse['description'])) {
        $errorMessage .= ' Описание: ' . $telegramResponse['description'];
    } elseif ($httpCode != 200) {
        $errorMessage .= ' HTTP код: ' . $httpCode;
    }
    echo json_encode(['status' => 'error', 'message' => $errorMessage]);
}
?> 