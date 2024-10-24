"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Login = () => {
  const [mensagem, setMensagem] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("usuario"));
    if (user) {
      window.location.href = "";
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const usersKey = "users";
    const users = JSON.parse(localStorage.getItem(usersKey)) || [{ email: "portocarcare@front.com", password: "1234" }];

    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      sessionStorage.setItem("usuario", JSON.stringify(user));
      setMensagem("Login bem-sucedido!");
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } else {
      setMensagem("Email ou senha inválidos.");
      setTimeout(() => {
        setMensagem('');
      }, 5000);
    }
  };

  return (
    <div className="wrapper">
      <h2 className='login_h2'>Bem-vindo!</h2>
      <form onSubmit={handleSubmit} id="login" className="input-area">
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          placeholder="Senha"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Link href="/"><button type="submit" className="b_login">Entrar</button></Link>
        <p>
          Não tem uma conta?
          <Link href="/cadastro" className="f_cadastro">Cadastre-se</Link>
        </p>
      </form>
      <p id="mensagem" className={mensagem.includes('sucesso') ? 'sucesso' : 'erro'}>{mensagem}</p>
    </div>
  );
};

export default Login;
