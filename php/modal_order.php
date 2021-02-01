<?php
// Файлы phpmailer

/* Exception class. */
require './phpmailer/src/Exception.php';

/* The main PHPMailer class. */
require './phpmailer/src/PHPMailer.php';

/* SMTP class, needed if you want to use SMTP. */
require './phpmailer/src/SMTP.php';


// Переменные, которые отправляет пользователь
$name = $_POST['order_UserName'];
$phone = $_POST['order_UserPhone'];


$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "OK";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;

    // Настройки вашей почты
    $mail->Host       = 'ssl://smtp.inbox.ru'; // SMTP сервера MAIL
    $mail->Username   = 'himch'; // Логин на почте
    $mail->Password   = 'yczUAtPEp43&'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('himch@inbox.ru', 'MODAL'); // Адрес самой почты и имя отправителя

    // Получатель письма 
    $mail->addAddress('info@mrhimchistkin.ru'); // Ещё один, если нужен
    $mail->addAddress('allexai39@yandex.ru');

        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);
    
        $mail->Subject = 'ДИВАНЫ, МАТРАСЫ, КРЕСЛА';
        $mail->Body    = "<b>Имя:</b> $name <br>
        <b>Телефон:</b> $phone";
        


// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "$msg";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}

} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}