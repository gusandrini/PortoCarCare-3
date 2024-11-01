"use client";
import { TipoTransmissao } from '@/types/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Transmissao = () => {
    const [mensagemFeedback, setMensagemFeedback] = useState('');
    const navigate = useRouter();
    const [transmissao, setTransmissao] = useState<TipoTransmissao[]>([]);

    useEffect(() => {
        chamadaApi();
    }, []);

    const chamadaApi = async () => {
        try {
            const response = await fetch('http://localhost:8080/problema-transmissao');
            const data = await response.json();
            setTransmissao(data);
        } catch (error) {
            console.error("Falha na listagem", error);
        }
    };

    return (
        <div>
            <div className="paginas">
                <Link href="/">Home / Problemas no Transmissao condicionado</Link>
            </div>

            <div className="cTransmissaoro">
                <div className="titulo_introducao">
                    <h1>Listagem dos problemas</h1>
                </div>
            </div>

            <div className='tabela-cTransmissaoros'>
                <table>
                    <thead>
                        <tr>
                            <th>PROBLEMAS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transmissao.map(t => (
                            <tr key={t.problema}>
                                <td>{t.problema}</td>
                                <td>{t.problema}</td>
                                <td>{t.problema}</td>
                                <td>{t.problema}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Transmissao;
