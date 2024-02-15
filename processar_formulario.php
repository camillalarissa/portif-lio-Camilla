<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    $para = "camillalarissa07@gmail.com";
    $assunto = "Nova mensagem de contato";

    $corpo_email = "Nome: $nome\n";
    $corpo_email .= "Email: $email\n";
    $corpo_email .= "Mensagem:\n $mensagem";

    // Envio do email
    if (mail($para, $assunto, $corpo_email)) {
        echo "Sua mensagem foi enviada com sucesso!";
    } else {
        echo "Desculpe, houve um problema no envio da sua mensagem.";
    }
}
?>
