"use client";
import { TipoCarro } from '@/types/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Carro = () => {
    const [mensagemFeedback, setMensagemFeedback] = useState('');
    const navigate = useRouter();
    const [carros, setCarros] = useState<TipoCarro[]>([]);
    const [carro, setCarro] = useState<TipoCarro>({
        id_veiculo: 0,
        placa: "",
        modelo: "",
        ano: 0,
        quilometragem: 0,
        tipo:"",
        marca:"",
    });

    useEffect(() => {
        chamadaApi();
    }, []);

    const chamadaApi = async () => {
        try {
            const response = await fetch('http://localhost:8080/veiculo');
            const data = await response.json();
            console.log(data);
            setCarros(data);
        } catch (error) {
            console.error("Falha na listagem", error);
        }
    };

    const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evento.target;
        setCarro({ ...carro, [name]: value });
    };

    const handleSubmit = async (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/veiculo', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    placa: carro.placa,
                    modelo: carro.modelo,
                    ano: Number(carro.ano),
                    marca: carro.marca,
                    quilometragem: carro.quilometragem,
                    tipo: carro.tipo,
                })
            });

            if (response.ok) {
                alert("Carro cadastrado com sucesso!");
                setCarro({
                    id_veiculo: 0,
                    placa: "",
                    modelo: "",
                    ano: 0,
                    quilometragem: 0,
                    tipo:"",
                    marca:"",
                });

                await chamadaApi();
                navigate.push("/carro");
            } else {
                const errorText = await response.json(); // Tenta ler como JSON
                setMensagemFeedback(`Erro ao cadastrar carro: ${errorText.message || 'Erro desconhecido.'}`);
            }
        } catch (error) {
            setMensagemFeedback(`Falha no cadastro: ${error.message}`);
            console.error("Erro na requisição POST:", error);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:8080/veiculo/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                alert("Carro removido com sucesso!");
                await chamadaApi();
                navigate.push("/carro");
            }
        } catch (error) {
            console.error("Falha ao remover carro.", error);
        }
    };

    return (
        <div>
            <div className="paginas">
                <Link href="/">Home / Cadastre seu carro</Link>
            </div>

            <div className="carro">
                <div className="titulo_introducao">
                    <h1>Cadastre seus Veículos</h1>
                </div>

                <div className="introducao_car">
                    <p>
                        Nosso sistema permite que você cadastre facilmente seu veículo, consulte informações e mantenha os dados atualizados.
                        Com apenas alguns cliques, você pode registrar informações como placa e modelo do carro.
                    </p>
                </div>

                <div className="titulo_instrucao">
                    <h1>Instruções</h1>
                </div>

                <div className="instrucao">
                    <ul>
                        <li>Preencha a placa do carro no formato AAA-1234 ou ABC1D23 (Mercosul).</li>
                        <li>Especifique o modelo do carro para ajudar na identificação.</li>
                        <li>Informe o ano do carro (ex: 2022).</li>
                    </ul>
                </div>

                <section className="scarro">
                    <form className="fcarro" onSubmit={handleSubmit}>
                        <div className="center">
                            <h1 className="titulo">CADASTRE SEU CARRO:</h1>
                        </div>
                        <fieldset>
                            <div>
                                <label htmlFor="idPlaca">Placa:</label>
                                <input
                                    type="text"
                                    id="idPlaca"
                                    name="placa"
                                    value={carro.placa}
                                    onChange={handleChange}
                                    placeholder="Digite sua placa"
                                    required
                                    autoComplete="off"
                                    pattern="^[A-Z]{3}-\d{4}$|^[A-Z]{3}\d[A-Z]\d{2}$"
                                />
                            </div>

                            <div>
                                <label htmlFor="idAno">Ano:</label>
                                <input
                                    type="number"
                                    id="idAno"
                                    name="ano"
                                    value={carro.ano}
                                    onChange={handleChange}
                                    placeholder="Digite o ano do carro"
                                    required
                                    autoComplete="off"
                                    min="1886"
                                    max={new Date().getFullYear()}
                                />
                            </div>

                            <div>
                                <label htmlFor="idModelo">Modelo carro:</label>
                                <input
                                    type="text"
                                    id="idModelo"
                                    name="modelo"
                                    value={carro.modelo}
                                    onChange={handleChange}
                                    placeholder="Digite modelo do carro"
                                    required
                                    autoComplete="off"
                                />
                            </div>

                            <div>
                                <label htmlFor="idMarca">Marca:</label>
                                <input
                                    type="text"
                                    id="idMarca"
                                    name="marca"
                                    value={carro.marca}
                                    onChange={handleChange}
                                    placeholder="Digite a marca do carro"
                                    required
                                    autoComplete="off"
                                />
                            </div>

                            <div>
                                <label htmlFor="idAno">Quilometragem:</label>
                                <input
                                    type="number"
                                    id="idKm"
                                    name="quilometragem"
                                    value={carro.quilometragem}
                                    onChange={handleChange}
                                    placeholder="Digite a quilometragem do carro"
                                    required
                                    autoComplete="off"
                                    min="0"
                                />
                            </div>

                            <div>
                                <label htmlFor="idMarca">Tipo:</label>
                                <input
                                    type="text"
                                    id="idTipo"
                                    name="tipo"
                                    value={carro.tipo}
                                    onChange={handleChange}
                                    placeholder="Digite o tipo de veículo"
                                    required
                                    autoComplete="off"
                                />
                            </div>

                            

                            <div className="center">
                                <input className="b_enviar" type="submit" value="Enviar" />
                                <p id="mensagem" className={mensagemFeedback.includes('sucesso') ? 'sucesso' : 'erro'}>
                                    {mensagemFeedback}
                                </p>
                            </div>
                        </fieldset>
                    </form>
                </section>
            </div>

            <h2 className='titulo_listagem'>LISTAGEM DOS DADOS</h2>

            <div className='tabela-carros'>
                <table>
                    <thead>
                        <tr>
                            <th>PLACA</th>
                            <th>ANO</th>
                            <th>MODELO</th>
                            <th>MARCA</th>
                            <th>KM</th>
                            <th>TIPO</th>
                            <th>EXCLUIR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carros.map(c => (
                            <tr key={c.id_veiculo}>
                                <td>{c.placa}</td>
                                <td>{c.ano}</td>
                                <td>{c.modelo}</td>
                                <td>{c.marca}</td>
                                <td>{c.quilometragem}</td>
                                <td>{c.tipo}</td>
                                <td>
                                    <Link href="#" onClick={() => handleDelete(c.id_veiculo)}>EXCLUIR</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={7}>Total de carros: {carros.length}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default Carro;
