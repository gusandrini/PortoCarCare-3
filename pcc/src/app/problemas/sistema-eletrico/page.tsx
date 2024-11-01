"use client";
import { TipoSistema } from '@/types/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Sistema = () => {
    const [mensagemFeedback, setMensagemFeedback] = useState('');
    const navigate = useRouter();
    const [sistema, setSistema] = useState<TipoSistema[]>([]);

    useEffect(() => {
        chamadaApi();
    }, []);

    const chamadaApi = async () => {
        try {
            const response = await fetch('http://localhost:8080/problema-sistema');
            const data = await response.json();
            setSistema(data);
        } catch (error) {
            console.error("Falha na listagem", error);
        }
    };

    return (
        <div>
            <div className="paginas">
                <Link href="/">Home / Problemas no Sistema condicionado</Link>
            </div>

            <div className="cSistemaro">
                <div className="titulo_introducao">
                    <h1>Listagem dos problemas</h1>
                </div>
            </div>

            <div className='tabela-cSistemaros'>
                <table>
                    <thead>
                        <tr>
                            <th>PROBLEMAS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sistema.map(s => (
                            <tr key={s.problema}>
                                <td>{s.problema}</td>
                                <td>{s.problema}</td>
                                <td>{s.problema}</td>
                                <td>{s.problema}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sistema;
