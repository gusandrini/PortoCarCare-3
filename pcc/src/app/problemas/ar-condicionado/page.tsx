"use client";
import { TipoAr } from '@/types/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Ar = () => {
    const [mensagemFeedback, setMensagemFeedback] = useState('');
    const navigate = useRouter();
    const [ar, setAr] = useState<TipoAr[]>([]);

    useEffect(() => {
        chamadaApi();
    }, []);

    const chamadaApi = async () => {
        try {
            const response = await fetch('http://localhost:8080/problema-ar');
            const data = await response.json();
            setAr(data);
        } catch (error) {
            console.error("Falha na listagem", error);
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
                        {ar.map(a => (
                            <tr key={a.problema}>
                                <td>{a.problemas}</td>
                                <td>{a.diagnostico}</td>
                                <td>{a.orçamento}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Ar;
