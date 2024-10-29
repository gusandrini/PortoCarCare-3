"use client";
import Link from 'next/link';
import React, { useState } from 'react';

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

            <div className="titulo_perg_freq">
                <h1>Duvidas</h1>
            </div>

            <div className="introducao_ajuda">
                <p>Se você tiver dúvidas, sugestões ou precisar de assistência,
                    estamos aqui para ajudar. Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
                </p>
            </div>

            <div className="titulo_perg_freq">
                <h1>Perguntas Frequentes</h1>
            </div>

            <div className="perg_freq">
                <p>Confira abaixo as respostas para algumas das perguntas mais comuns:</p>
            </div>

            <div className="perg_freq_2">
                <ul>
                    <li><strong>Quanto tempo leva para receber uma resposta?</strong> Normalmente, respondemos em até 2 dias úteis.</li>
                    <li><strong>Posso acompanhar o status do meu pedido?</strong> Sim, nosso sistema permite que você acompanhe o progresso do seu pedido via email.</li>
                </ul>
            </div>

            <div className="contato">
                <section className="stato">
                    <form className="ftato" onSubmit={handleSubmit}>
                        <div className="center">
                            <h1 className="titulo">ÁREA DE CONTATO:</h1>
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
