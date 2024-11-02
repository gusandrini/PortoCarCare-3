"use client";
import { TipoMotor } from '@/types/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Motor = () => {
    const [mensagemFeedback, setMensagemFeedback] = useState('');
    const [loading, setLoading] = useState(true);
    const [motor, setMotor] = useState<TipoMotor[]>([]);

    useEffect(() => {
        chamadaApi();
    }, []);

    const chamadaApi = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8080/problema_motor');
            if (!response.ok) {
                throw new Error('Erro na resposta da API');
            }
            const data = await response.json();
            setMotor(data);
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
                <Link href="/diagnostico"> Diagnóstico / Problemas no motor</Link>
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
                <div className='tabela-motor'>
                    <table>
                        <thead>
                            <tr>
                                <th>PROBLEMAS</th>
                                <th>DIAGNÓSTICO</th>
                                <th>ORÇAMENTO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {motor.length > 0 ? (
                                motor.map((m, index) => (
                                    <tr key={index}>
                                        <td>{m.problema_motor}</td>
                                        <td>{m.diagnostico}</td>
                                        <td>{m.orcamento}</td>
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

export default Motor;
