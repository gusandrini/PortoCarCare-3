"use client";

import Link from 'next/link';
import { useState } from 'react';

const Cadastro = () => {
  const [mensagemCadastro, setMensagemCadastro] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const usersKey = "users";
    const users = JSON.parse(localStorage.getItem(usersKey) || '[]');

    const userExists = users.some((user: { email: string }) => user.email === email);
    if (userExists) {
      setMensagemCadastro("Email já cadastrado.");
      setTimeout(() => setMensagemCadastro(''), 5000);
    } else {
      const newUser = { name, email, telefone, password };
      users.push(newUser);
      localStorage.setItem(usersKey, JSON.stringify(users));
      setMensagemCadastro("Cadastro bem-sucedido!");
      setTimeout(() => (window.location.href = "/login"), 2000);
    }
  };

  return (
    <div className="cadastro-page">
      <h2 className='cadastro_h2'>Cadastro</h2>
      <form onSubmit={handleSubmit} className="input-area">
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          placeholder="Nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="cadastroEmail"></label>
        <input
          type="email"
          id="cadastroEmail"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="telefone"></label>
        <input
          type="tel"
          id="telefone"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />

        <label htmlFor="cadastroSenha"></label>
        <input
          type="password"
          id="cadastroSenha"
          placeholder="Senha"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="b_cadastro">Cadastrar</button>
        <p className='login'>
          Já tem uma conta? <Link href="/login" className="f_login">Faça login</Link>
        </p>
      </form>
      <p id="mensagemCadastro" className={mensagemCadastro.includes('sucesso') ? 'sucesso' : 'erro'}>{mensagemCadastro}</p>
    </div>
  );
};

export default Cadastro;
