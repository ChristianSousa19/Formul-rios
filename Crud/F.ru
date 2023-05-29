require 'sinatra'

get '/' do
  erb :formulario
end

post '/enviar' do
  nome = params[:nome]
  email = params[:email]
  "Nome: #{nome}, Email: #{email}"
end

__END__

@@formulario
<!DOCTYPE html>
<html>
<head>
    <title>Formulário Ruby Sinatra</title>
</head>
<body>
    <form method="POST" action="/enviar">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome"><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br>

        <input type="submit" value="Enviar">
    </form>
</body>
</html>
