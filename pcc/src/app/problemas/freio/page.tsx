"use client";
import { TipoFreio } from '@/types/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Freio = () => {
    const [mensagemFeedback, setMensagemFeedback] = useState('');
    const [loading, setLoading] = useState(true);
    const [freio, setFreio] = useState<TipoFreio[]>([]);
    const router = useRouter();

    useEffect(() => {
        chamadaApi();
    }, []);

    const chamadaApi = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8080/problema_freio');
            if (!response.ok) {
                throw new Error('Erro na resposta da API');
            }
            const data = await response.json();
            setFreio(data);
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
                <Link href="/diagnostico"> Diagnóstico / Problemas nos freios</Link>
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
                <div className='tabela-freio'>
                    <table>
                        <thead>
                            <tr>
                                <th>PROBLEMAS</th>
                                <th>DIAGNÓSTICO</th>
                                <th>ORÇAMENTO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {freio.length > 0 ? (
                                freio.map((f, index) => (
                                    <tr key={index}>
                                        <td>{f.problema_freio}</td>
                                        <td>{f.diagnostico}</td>
                                        <td>{f.orcamento}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={3}>Nenhum dado encontrado</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Freio;
