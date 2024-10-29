"use client";
import { TipoCarro } from '@/types/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Carro = () => {
    const [nome, setNome] = useState('');
    const [placa, setPlaca] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [mensagemFeedback, setMensagemFeedback] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const success = true;

    //     if (success) {
    //         setMensagemFeedback('Mensagem enviada com sucesso!');
    //     } else {
    //         setMensagemFeedback('Ocorreu um erro ao enviar a mensagem.');
    //     }

    //     setNome('');
    //     setPlaca('');
    //     setMensagem('');

    //     setTimeout(() => setMensagemFeedback(''), 1000);
    // };

    //SERVER COMPONENT É RENDERIZADO NO SERVIDOR E GERA O RESULTADO FINAL QUE É EM HTML
    //CLIENT COMPONENT EMPACOTA TUDO, GERA JSCRIPT E ENVIA PARA MAQUINA DO CLIENTE QUE É RENDERIZADA PELA NAVEGADOR
    const navigate = useRouter();

    const [carros, setCarros] = useState<TipoCarro[]>([])

    const chamdaApi = async () => {
        try {
            const response = await fetch("adicionar caminho java");
            const data = await response.json();
            setCarros(data)
        } catch (error) {
            console.error("Falha na listagem");
        }
    }

    useEffect(() => {
        chamdaApi();
    }, [])

    const [carro, setCarro] = useState<TipoCarro>({
        id_veiculo: 0,
        nome: "",
        placa: "",
        modelo: "",
        mensagem: "",
    });

    const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
        //realizando um destructuring nos campos através do target do evento
        const { name, value } = evento.target;
        setCarro({ ...carro, [name]: value })

    }

    const handleSbumit = async (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        try {
            const response = await fetch("adicionar caminho java", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(carro)
            });

            if (response.ok) {
                alert("Carro cadastrado com sucesso!")
                setCarro({
                    id_veiculo: 0,
                    nome: "",
                    placa: "",
                    modelo: "",
                    mensagem: "",
                });

                navigate.push("/");
            }
        } catch (error) {
            console.error("Falha no cadastro!", error);
        }
    }

    // const handleChange = (evento: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     //realizando um destructuring nos campos através do target do evento
    //     const { name, value } = evento.target;
    //     setCarro({ ...carro, [mensagem]: value })

    // }



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
                        Com apenas alguns cliques, você pode registrar informações como nome do proprietário, placa e modelo do carro.
                    </p>
                </div>

                <div className="titulo_instrucao">
                    <h1>Instruções</h1>
                </div>

                <div className="instrucao">
                    <ul>
                        <li>Preencha o nome completo do proprietário no campo "Nome".</li>
                        <li>Informe a placa do carro no formato AAA-1234.</li>
                        <li>Especifique o modelo do carro para ajudar na identificação.</li>
                    </ul>
                </div>

                <section className="scarro">
                    <form className="fcarro" onSubmit={handleSbumit}>
                        <div className="center">
                            <h1 className="titulo">CADASTRE SEU CARRO:</h1>
                        </div>
                        <fieldset>
                            <div>
                                <label htmlFor="idNm">Nome:</label>
                                <input
                                    type="text"
                                    id="idNm"
                                    name="nome"
                                    value={carro.nome}
                                    onChange={(evento) => handleChange(evento)}
                                    placeholder="Digite seu nome"
                                    required
                                    autoComplete="name"
                                />
                            </div>

                            <div>
                                <label htmlFor="idPlaca">Placa:</label>
                                <input
                                    type="text"
                                    id="idPlaca"
                                    name="placa"
                                    value={carro.placa}
                                    onChange={(evento) => handleChange(evento)}
                                    placeholder="Digite sua placa"
                                    required
                                    autoComplete="off"
                                />
                            </div>

                            <div>
                                <label htmlFor="idModelo">Modelo carro:</label>
                                <input
                                    type="text"
                                    id="idModelo"
                                    name="modelo"
                                    value={carro.modelo}
                                    onChange={(evento) => handleChange(evento)}
                                    placeholder="Digite modelo do carro"
                                    required
                                    autoComplete="off"
                                />
                            </div>

                            {/* <div>
                                <label htmlFor="idMes">Mais dados sobre o veículo:</label>
                                <textarea
                                    className="textarea"
                                    id="idMes"
                                    name="mensagem"
                                    rows={5}
                                    value={carro.mensagem}
                                    onChange={(evento) => handleChange(evento)}
                                    placeholder="Digite sua mensagem"
                                    required
                                    autoComplete="off"
                                ></textarea>
                            </div> */}

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
                            <th>NOME</th>
                            <th>PLACA</th>
                            <th>MODELO</th>
                            {/* <th>EDITAR | EXCLUIR</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {carros.map(c => (
                            <tr key={c.id_veiculo}>
                                <td>{c.nome}</td>
                                <td>{c.placa}</td>
                                <td>{c.modelo}</td>
                                {/* <td>
                                    <Link href="/">Editar</Link> | <Link href="/">Excluir</Link>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={4}>Total de carros: {carros.length}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>


        </div>
    );
};
export default Carro;