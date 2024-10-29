"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

const Login = () => {
  const [mensagem, setMensagem] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("usuario"));
    if (user) {
      window.location.href = "/";
    }

    const handleUnload = () => {
      sessionStorage.removeItem("usuario");
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const usersKey = "users";
    const users = JSON.parse(localStorage.getItem(usersKey)) || [];

    if (users.length === 0) {
      setMensagem("Nenhum usuário registrado. Por favor, cadastre-se primeiro.");
      setTimeout(() => {
        setMensagem('');
      }, 5000);
      return;
    }

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
        <input
          type="email"
          id="idEmail"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          id="idSenha"
          name="senha"
          placeholder="Senha"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="b_login">Entrar</button>
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
