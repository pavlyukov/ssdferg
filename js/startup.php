<?php
$tokennot = "6084427283:AAEXCWI65AeJRm6k3gF-fBYK6Vzh895a9XE";
$message = urldecode($_POST['message']);
$chatId = '-1001810287454';

$telegramUrl = "https://api.telegram.org/bot$tokennot/sendMessage";
$data = array('chat_id' => $chatId, 'text' => $message);

$options = array(
    'http' => array(
        'header' => "Content-type: application/x-www-form-urlencoded\r\n",
        'method' => 'POST',
        'content' => http_build_query($data),
    ),
);

$context = stream_context_create($options);
$result = file_get_contents($telegramUrl, false, $context);

echo 'Message sent successfully';
?>



