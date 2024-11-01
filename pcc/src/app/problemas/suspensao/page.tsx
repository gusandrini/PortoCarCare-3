"use client";
import { TipoSuspensao } from '@/types/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Suspensao = () => {
    const [mensagemFeedback, setMensagemFeedback] = useState('');
    const navigate = useRouter();
    const [suspensao, setSuspensao] = useState<TipoSuspensao[]>([]);

    useEffect(() => {
        chamadaApi();
    }, []);

    const chamadaApi = async () => {
        try {
            const response = await fetch('http://localhost:8080/problema-suspensao');
            const data = await response.json();
            setSuspensao(data);
        } catch (error) {
            console.error("Falha na listagem", error);
        }
    };

    return (
        <div>
            <div className="paginas">
                <Link href="/diagnostico"> Diagnóstico / Problemas na Suspensao</Link>
            </div>

            <div className="carro">
                <div className="titulo_introducao">
                    <h1>Listagem dos problemas</h1>
                </div>
            </div>

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
                        {suspensao.map(s => (
                            <tr key={s.problema}>
                                <td>{s.problemas}</td>
                                <td>{s.diagnostico}</td>
                                <td>{s.orçamento}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Suspensao;
