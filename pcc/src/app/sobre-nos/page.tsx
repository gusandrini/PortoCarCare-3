import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";
import Link from "next/link";


const Sobre = () => {
    return (
        <div>
            
            <div className="paginas">
                <Link href="/"> Home / Sobre nós</Link>
            </div>

            <div>
                <p className="text_sobre" ><br />O aplicativo PortoCarCare oferece uma solução inovadora para motoristas,
                    com ou sem conhecimento prévio sobre a mecânica de um carro,
                    preocupados com o diagnóstico do problema e a manutenção de seus veículos.
                    O objetivo do aplicativo é usar da tecnologia para proporcionar aos motoristas
                    uma experiência simplificada e confiável ao lidar com problemas mecânicos e de manutenção,
                    sem ter que ir fisicamente a uma oficina mecânica para saber qual é o problema do seu automóvel,
                    poupando tempo e mão de obra. Nosso serviço oferece uma assistente virtual, programada para auxiliar
                    o
                    cliente,
                    para fazer a análise do caso do cliente e fazer perguntas para chegar a um diagnóstico mais exato
                    possível.
                    Além disso, o aplicativo com uma certa frequência envia notificações aos usuários,
                    buscando fornecer a eles dicas e lembretes úteis sobre a manutenção preventiva,
                    e com isso, ajudar a prolongar a vida útil dos veículos e evitar acidentes ou problemas futuros.<br /><br />
                </p>
            </div>

            <div className="participantes">
                <Link href="/participantes">
                    <button><b>Participantes</b></button>
                </Link>
            </div>
        </div>
    );
};

export default Sobre