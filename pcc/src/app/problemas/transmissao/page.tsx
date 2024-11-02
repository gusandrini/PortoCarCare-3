"use client";
import { TipoTransmissao } from '@/types/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Transmissao = () => {
    const [mensagemFeedback, setMensagemFeedback] = useState('');
    const [loading, setLoading] = useState(true);
    const [transmissao, setTransmissao] = useState<TipoTransmissao[]>([]);

    useEffect(() => {
        chamadaApi();
    }, []);

    const chamadaApi = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8080/problema_transmissao');
            if (!response.ok) {
                throw new Error('Erro na resposta da API');
            }
            const data = await response.json();
            setTransmissao(data);
        } catch (error) {
            console.error("Falha na listagem", error);
            setMensagemFeedback('Erro ao carregar os dados.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="paginas">
                <Link href="/diagnostico"> Diagnóstico / Problemas na Transmissão</Link>
            </div>

            <div className="carro">
                <div className="titulo_introducao">
                    <h1>Listagem dos problemas</h1>
                </div>
            </div>

            {mensagemFeedback && <div className="alert">{mensagemFeedback}</div>}
            {loading ? (
                <div>Carregando...</div>
            ) : (
                <div className='tabela-transmissao'>
                    <table>
                        <thead>
                            <tr>
                                <th>PROBLEMAS</th>
                                <th>DIAGNÓSTICO</th>
                                <th>ORÇAMENTO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transmissao.length > 0 ? (
                                transmissao.map((t, index) => (
                                    <tr key={index}>
                                        <td>{t.problema_transmissao}</td>
                                        <td>{t.diagnostico}</td>
                                        <td>{t.orcamento}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={3}>Nenhum dado encontrado.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Transmissao;
