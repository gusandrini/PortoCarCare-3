"use client";
import { TipoOficina } from '@/types/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';

const Oficina = () => {
    const [mensagemFeedback, setMensagemFeedback] = useState('');
    const [loading, setLoading] = useState(true);
    const [oficina, setOficina] = useState<TipoOficina[]>([]);
    const router = useRouter();

    const chamadaApi = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8080/oficina'); // URL relativa para produção
            if (!response.ok) {
                throw new Error('Erro na resposta da API');
            }
            const data = await response.json();
            setOficina(data);
        } catch (error) {
            console.error("Falha na listagem", error);
            setMensagemFeedback('Erro ao carregar os dados.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        chamadaApi();
    }, [chamadaApi]);

    return (
        <div>
            <div className="carro">
                <div className="titulo_introducao">
                    <h1>Oficinas</h1>
                </div>
            </div>

            {mensagemFeedback && <div className="alert">{mensagemFeedback}</div>}
            {loading ? (
                <div>Carregando...</div>
            ) : (
                <div className='tabela-oficina'>
                    <table>
                        <thead>
                            <tr>
                                <th>NOME</th>
                                <th>CNPJ</th>
                                <th>STATUS</th>
                                <th>CEP</th>
                            </tr>
                        </thead>
                        <tbody>
                            {oficina.length > 0 ? (
                                oficina.map((o) => (
                                    <tr key={o.id_oficina}>
                                        <td>{o.nome_oficina}</td>
                                        <td>{o.cnpj}</td>
                                        <td>{o.status}</td>
                                        <td>{o.cep}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4}>Nenhum dado encontrado</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Oficina;
