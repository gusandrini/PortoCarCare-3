"use client";
import { TipoAr } from '@/types/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Ar = () => {
    const [mensagemFeedback, setMensagemFeedback] = useState('');
    const [loading, setLoading] = useState(true);
    const [ar, setAr] = useState<TipoAr[]>([]);
    const router = useRouter();

    useEffect(() => {
        chamadaApi();
    }, []);

    const chamadaApi = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8080/problema_ar');
            if (!response.ok) {
                throw new Error('Erro na resposta da API');
            }
            const data = await response.json();
            setAr(data);
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
                <Link href="/diagnostico"> Diagnóstico / Problemas ar condicionado</Link>
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
                <div className='tabela-ar'>
                    <table>
                        <thead>
                            <tr>
                                <th>PROBLEMAS</th>
                                <th>DIAGNÓSTICO</th>
                                <th>ORÇAMENTO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ar.length > 0 ? (
                                ar.map((a, index) => (
                                    <tr key={index}>
                                        <td>{a.problema_ar}</td>
                                        <td>{a.diagnostico}</td>
                                        <td>{a.orcamento}</td>
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

export default Ar;
