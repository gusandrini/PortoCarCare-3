"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Ajuda = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [mensagemFeedback, setMensagemFeedback] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        
        const success = true;

        if (success) {
            setMensagemFeedback('Mensagem enviada com sucesso!');
        } else {
            setMensagemFeedback('Ocorreu um erro ao enviar a mensagem.');
        }


        setNome('');
        setEmail('');
        setMensagem('');

        setTimeout(() => {
            setMensagemFeedback('');
        }, 1000); 
    };

    return (
        <div>
            <div className="paginas">
                <Link href="/">Home / Ajuda</Link>
            </div>

            <div className="contato">
                <section className="stato">
                    <form className="ftato" onSubmit={handleSubmit}>
                        <div className="center">
                            <label className="titulo">ÁREA DE CONTATO:</label>
                        </div>
                        <fieldset>
                            <legend>Informações de Contato</legend>

                            <div>
                                <label htmlFor="name">Nome:</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={nome} 
                                    onChange={(e) => setNome(e.target.value)} 
                                    placeholder="Digite seu nome" 
                                    required 
                                    autoComplete="name" 
                                />
                            </div>

                            <div>
                                <label htmlFor="email">Email:</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    placeholder="Digite seu email" 
                                    required 
                                    autoComplete="email" 
                                />
                            </div>

                            <div>
                                <label htmlFor="message">Mensagem:</label>
                                <textarea
                                    className="textarea" 
                                    id="message" 
                                    name="message" 
                                    rows={5} 
                                    value={mensagem} 
                                    onChange={(e) => setMensagem(e.target.value)} 
                                    placeholder="Digite sua mensagem" 
                                    required 
                                    autoComplete="off" 
                                ></textarea>
                            </div>

                            <div className="center">
                                <input className="submit-button" type="submit" value="Enviar" />
                                <p id="mensagem" className={mensagemFeedback.includes('sucesso') ? 'sucesso' : 'erro'}>
                                    {mensagemFeedback}
                                </p>
                            </div>
                        </fieldset>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Ajuda;
