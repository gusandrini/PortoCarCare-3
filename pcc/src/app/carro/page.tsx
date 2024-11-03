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
        tipo: "",
        marca: "",
    });
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        chamadaApi();
    }, []);

    const chamadaApi = async () => {
        try {
            const response = await fetch('http://localhost:8080/veiculo');
            const data = await response.json();
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
            const method = isEditMode ? "PUT" : "POST";
            const url = isEditMode 
                ? `http://localhost:8080/veiculo/${carro.id_veiculo}`
                : 'http://localhost:8080/veiculo';

            const response = await fetch(url, {
                method,
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
                alert(isEditMode ? "Carro editado com sucesso!" : "Carro cadastrado com sucesso!");
                setCarro({
                    id_veiculo: 0,
                    placa: "",
                    modelo: "",
                    ano: 0,
                    quilometragem: 0,
                    tipo: "",
                    marca: "",
                });
                setIsEditMode(false);
                await chamadaApi();
                navigate.push("/carro");
            } else {
                const errorText = await response.json();
                setMensagemFeedback(`Erro: ${errorText.message || 'Erro desconhecido.'}`);
            }
        } catch (error) {
            if (error instanceof Error) {
                setMensagemFeedback(`Falha no processo: ${error.message}`);
            } else {
                setMensagemFeedback(`Falha no processo: Um erro desconhecido ocorreu.`);
            }
            console.error("Erro na requisição:", error);
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

    const handleEdit = (carroSelecionado: TipoCarro) => {
        setCarro(carroSelecionado);
        setIsEditMode(true);
    };

    return (
        <div>
            <div className="paginas">
                <Link href="/">Home / Cadastre seu carro</Link>
            </div>

            <div className="carro">
                <div className="titulo_introducao">
                    <h1>{isEditMode ? "Edite seu Veículo" : "Cadastre seus Veículos"}</h1>
                </div>

                <section className="scarro">
                    <form className="fcarro" onSubmit={handleSubmit}>
                        <div className="center">
                            <h1 className="titulo">{isEditMode ? "EDITAR CARRO" : "CADASTRE SEU CARRO"}</h1>
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
                                    placeholder="Digite sua placa (AAA-1234 ou ABC1D23)"
                                    required
                                    autoComplete="off"
                                    pattern="^[A-Z]{3}-\d{4}$|^[A-Z]{3}\d[A-Z]\d{2}$"
                                    title="Formato esperado: AAA-1234 ou ABC1D23"
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
                                <label htmlFor="idModelo">Modelo:</label>
                                <input
                                    type="text"
                                    id="idModelo"
                                    name="modelo"
                                    value={carro.modelo}
                                    onChange={handleChange}
                                    placeholder="Digite o modelo do carro"
                                    required
                                    autoComplete="off"
                                    title="Informe o modelo do carro"
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
                                    title="Informe a marca do carro"
                                />
                            </div>

                            <div>
                                <label htmlFor="idKm">Quilometragem:</label>
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
                                <label htmlFor="idTipo">Tipo:</label>
                                <input
                                    type="text"
                                    id="idTipo"
                                    name="tipo"
                                    value={carro.tipo}
                                    onChange={handleChange}
                                    placeholder="Digite o tipo de veículo (ex.: Carro, moto)"
                                    required
                                    autoComplete="off"
                                />
                            </div>

                            <div className="center">
                                <input className="b_enviar" type="submit" value={isEditMode ? "Atualizar" : "Enviar"} />
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
                            <th>AÇÕES</th>
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
                                    <Link href="#" onClick={() => handleEdit(c)}>EDITAR</Link> | 
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
