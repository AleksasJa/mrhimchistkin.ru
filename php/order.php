<?php
// Файлы phpmailer

/* Exception class. */
require './phpmailer/src/Exception.php';

/* The main PHPMailer class. */
require './phpmailer/src/PHPMailer.php';

/* SMTP class, needed if you want to use SMTP. */
require './phpmailer/src/SMTP.php';


// Переменные, которые отправляет пользователь
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$select = $_POST['user_select'];

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;

    // Настройки вашей почты
    $mail->Host       = 'ssl://smtp.list.ru'; // SMTP сервера MAIL
    $mail->Username   = 'himch'; // Логин на почте
    $mail->Password   = 'yczUAtPEp43&'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('himch@inbox.ru', 'Заказ'); // Адрес самой почты и имя отправителя

    // Получатель письма 
    $mail->addAddress('info@mrhimchistkin.ru'); // Ещё один, если нужен

    // Прикрипление файлов к письму
if (!empty($_FILES['userfile']['name'][0])) {
    for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
        $filename = $_FILES['userfile']['name'][$ct];
        if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
        } else {
            $msg = "no";
        }
    }   
}

        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);
    
        $mail->Subject = 'Заголовок письма';
        $mail->Body    = "<b>Имя:</b> $name <br>
        <b>Телефон:</b> $phone <br>
        <b>Подарок:</b> $select";
       


// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "$msg";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}

} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}