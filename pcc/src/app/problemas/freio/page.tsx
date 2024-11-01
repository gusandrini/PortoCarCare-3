"use client";
import { TipoFreio } from '@/types/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Freio = () => {
    const [mensagemFeedback, setMensagemFeedback] = useState('');
    const navigate = useRouter();
    const [freio, setFreio] = useState<TipoFreio[]>([]);

    useEffect(() => {
        chamadaApi();
    }, []);

    const chamadaApi = async () => {
        try {
            const response = await fetch('http://localhost:8080/problema-freio');
            const data = await response.json();
            setFreio(data);
        } catch (error) {
            console.error("Falha na listagem", error);
        }
    };

    return (
        <div>
            <div className="paginas">
                <Link href="/">Home / Problemas no Freio</Link>
            </div>

            <div className="cFreioro">
                <div className="titulo_introducao">
                    <h1>Listagem dos problemas</h1>
                </div>
            </div>

            <div className='tabela-cFreioros'>
                <table>
                    <thead>
                        <tr>
                            <th>PROBLEMAS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {freio.map(f => (
                            <tr key={f.problema}>
                                <td>{f.problema}</td>
                                <td>{f.problema}</td>
                                <td>{f.problema}</td>
                                <td>{f.problema}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Freio;
