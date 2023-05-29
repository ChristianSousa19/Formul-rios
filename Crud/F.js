<!DOCTYPE html>
<html>
<head>
    <title>Formulário JavaScript</title>
</head>
<body>
    <form>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome"><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br>

        <input type="submit" value="Enviar" onclick="submitForm(event)">
    </form>

    <script>
        function submitForm(event) {
            event.preventDefault(); // Impede o envio padrão do formulário
            var nome = document.getElementById("nome").value;
            var email = document.getElementById("email").value;
            console.log("Nome: " + nome + ", Email: " + email);
        }
    </script>
</body>
</html>
