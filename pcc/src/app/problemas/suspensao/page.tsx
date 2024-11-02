"use client";
import { TipoSuspensao } from '@/types/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Suspensao = () => {
    const [mensagemFeedback, setMensagemFeedback] = useState('');
    const [loading, setLoading] = useState(true);
    const [suspensao, setSuspensao] = useState<TipoSuspensao[]>([]);
    const router = useRouter();

    useEffect(() => {
        chamadaApi();
    }, []);

    const chamadaApi = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8080/problema_suspensao');
            if (!response.ok) {
                throw new Error('Erro na resposta da API');
            }
            const data = await response.json();
            setSuspensao(data);
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
                <Link href="/diagnostico"> Diagnóstico / Problemas na Suspensão</Link>
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
                <div className='tabela-suspensao'>
                    <table>
                        <thead>
                            <tr>
                                <th>PROBLEMAS</th>
                                <th>DIAGNÓSTICO</th>
                                <th>ORÇAMENTO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {suspensao.length > 0 ? (
                                suspensao.map((s, index) => (
                                    <tr key={index}>
                                        <td>{s.problema_suspensao}</td>
                                        <td>{s.diagnostico}</td>
                                        <td>{s.orcamento}</td>
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

export default Suspensao;
