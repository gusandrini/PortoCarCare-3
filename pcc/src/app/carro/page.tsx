"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Carro = () => {
    const [nome, setNome] = useState('');
    const [placa, setPlaca] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [mensagemFeedback, setMensagemFeedback] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const success = true;

        if (success) {
            setMensagemFeedback('Mensagem enviada com sucesso!');
        } else {
            setMensagemFeedback('Ocorreu um erro ao enviar a mensagem.');
        }

        setNome('');
        setPlaca('');
        setMensagem('');

        setTimeout(() => {
            setMensagemFeedback('');
        }, 1000);
    };

    return (
        <div>
            <div className="paginas">
                <Link href="/">Home / Cadastre seu carro</Link>
            </div>

            <div className="carro">
                <section className="scarro">
                    <form className="fcarro" onSubmit={handleSubmit}>
                        <div className="center">
                            <label className="titulo">CADASTRE SEU CARRO:</label>
                        </div>
                        <fieldset>

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
                                <label htmlFor="placa">Placa:</label>
                                <input 
                                    type="text" 
                                    id="placa" 
                                    name="placa" 
                                    value={placa} 
                                    onChange={(e) => setPlaca(e.target.value)} 
                                    placeholder="Digite sua placa" 
                                    required 
                                    autoComplete="off" 
                                />
                            </div>

                            <div>
                                <label htmlFor="message">Mais dados sobre o veículo:</label>
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
                                <input className="b_cadastro" type="submit" value="Enviar" />
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

export default Carro;
