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

        setTimeout(() => setMensagemFeedback(''), 1000);
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
                            <h1 className="titulo">CADASTRE SEU CARRO:</h1>
                        </div>
                        <fieldset>
                            <div>
                                <label htmlFor="idNm">Nome:</label>
                                <input 
                                    type="text" 
                                    id="idNm" 
                                    name="NM_CLIENTE" 
                                    value={nome} 
                                    onChange={(e) => setNome(e.target.value)} 
                                    placeholder="Digite seu nome" 
                                    required 
                                    autoComplete="name" 
                                />
                            </div>

                            <div>
                                <label htmlFor="idPlaca">Placa:</label>
                                <input 
                                    type="text" 
                                    id="idPlaca" 
                                    name="NR_PLACA" 
                                    value={placa} 
                                    onChange={(e) => setPlaca(e.target.value)} 
                                    placeholder="Digite sua placa" 
                                    required 
                                    autoComplete="off" 
                                />
                            </div>

                            <div>
                                <label htmlFor="idModelo">Modelo carro:</label>
                                <input 
                                    type="text" 
                                    id="idModelo" 
                                    name="NM_MODELO" 
                                    value={placa} 
                                    onChange={(e) => setPlaca(e.target.value)} 
                                    placeholder="Digite modelo do carro" 
                                    required 
                                    autoComplete="off" 
                                />
                            </div>

                            <div>
                                <label htmlFor="idMes">Mais dados sobre o veículo:</label>
                                <textarea
                                    className="textarea" 
                                    id="idMes" 
                                    name="DS_MENSAGEM"
                                    rows={5} 
                                    value={mensagem} 
                                    onChange={(e) => setMensagem(e.target.value)} 
                                    placeholder="Digite sua mensagem" 
                                    required 
                                    autoComplete="off" 
                                ></textarea>
                            </div>

                            <div className="center">
                                <input className="b_enviar" type="submit" value="Enviar" />
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