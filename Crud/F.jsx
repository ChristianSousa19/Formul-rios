import React, { useState } from 'react';

function FormularioReact() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Nome: ${nome}, Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome:</label>
      <input
        type="text"
        id="nome"
        name="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      /><br />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />

      <input type="submit" value="Enviar" />
    </form>
  );
}

export default FormularioReact;
