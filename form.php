<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nome = $_POST["name"];
        $email = $_POST["email"];
        $mensagem = $_POST["mensagem"];
        
        $destinatario = "pedroyoshidadev@gmail.com"; // Insira aqui o e-mail de destino
        $assunto = "Contato pelo website"; // Insira aqui o assunto do e-mail
        $corpo = "Nome: $nome\nE-mail: $email\nMensagem: $mensagem";
        
        mail($destinatario, $assunto, $corpo);
        echo "Mensagem enviada com sucesso!";
      }
?>