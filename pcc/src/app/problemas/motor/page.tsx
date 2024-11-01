"use client";
import { TipoMotor } from '@/types/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Motor = () => {
    const [mensagemFeedback, setMensagemFeedback] = useState('');
    const navigate = useRouter();
    const [motor, setMotor] = useState<TipoMotor[]>([]);

    useEffect(() => {
        chamadaApi();
    }, []);

    const chamadaApi = async () => {
        try {
            const response = await fetch('http://localhost:8080/problema-motor');
            const data = await response.json();
            setMotor(data);
        } catch (error) {
            console.error("Falha na listagem", error);
        }
    };

    return (
        <div>
            <div className="paginas">
                <Link href="/">Home / Problemas no Motor</Link>
            </div>

            <div className="cMotorro">
                <div className="titulo_introducao">
                    <h1>Listagem dos problemas</h1>
                </div>
            </div>

            <div className='tabela-cMotorros'>
                <table>
                    <thead>
                        <tr>
                            <th>PROBLEMAS</th>
                            <th>DIAGNÓSTICO</th>
                            <th>ORÇAMENTO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {motor.map(m => (
                            <tr key={m.problema}>
                                <td>{m.problemas}</td>
                                <td>{m.diagnostico}</td>
                                <td>{m.orçamento}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Motor;
