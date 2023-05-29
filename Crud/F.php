<!DOCTYPE html>
<html>
<head>
    <title>Formulário PHP</title>
</head>
<body>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nome = $_POST["nome"];
        $email = $_POST["email"];
        echo "Nome: " . $nome . ", Email: " . $email;
    }
    ?>

    <form method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome"><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br>

        <input type="submit" value="Enviar">
    </form>
</body>
</html>
