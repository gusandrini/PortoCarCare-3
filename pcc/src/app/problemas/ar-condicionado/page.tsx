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
                <Link href="/">Home / Problemas no ar condicionado</Link>
            </div>

            <div className="carro">
                <div className="titulo_introducao">
                    <h1>Listagem dos problemas</h1>
                </div>
            </div>

            <div className='tabela-carros'>
                <table>
                    <thead>
                        <tr>
                            <th>PROBLEMAS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ar.map(a => (
                            <tr key={a.problema}>
                                <td>{a.problema}</td>
                                <td>{a.problema}</td>
                                <td>{a.problema}</td>
                                <td>{a.problema}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Ar;
