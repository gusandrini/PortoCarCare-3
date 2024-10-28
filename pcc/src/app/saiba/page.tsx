import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";
import Link from "next/link";

const Saiba = () => {
    return (
        <div>
            <div className="paginas">
                <Link href="/">Home / Saiba mais</Link>
            </div>

            <div className="titulo_saiba_1">
                <h1>Nossos Serviços</h1>
            </div>

            <div>
                <p className="text_saiba_1">
                    Para utilizar nosso serviço de chatbot, não é necessário ter uma conta na IBM Cloud. Basta clicar na aba "Assistente Virtual", onde a Beta, a assistente desenvolvida pela PortoCarCare, estará pronta para te ajudar. Ela foi projetada para guiá-lo(a) na identificação do diagnóstico mais preciso e fornecer orientações claras para que você tome a melhor decisão na resolução de problemas do seu veículo. Este serviço foi especialmente criado para pessoas que não possuem conhecimento técnico sobre veículos, garantindo que você se sinta seguro(a) e bem informado(a) ao enfrentar qualquer situação relacionada ao seu veículo.
                </p>
            </div>

            <div className="titulo_saiba_2">
                <h2>Benefícios do Nosso Chatbot</h2>
            </div>
            <div className="text_saiba_2">
                <ul>
                    <li>Acesso imediato a informações sobre problemas de veículos.</li>
                    <li>Disponibilidade 24/7 para assistência a qualquer hora.</li>
                    <li>Assistência personalizada para atender às suas necessidades.</li>
                </ul>
            </div>

            <div className="titulo_saiba_3">
                <h2>Como Funciona</h2>
            </div>
            <div className="text_saiba_3">
                <p>
                    1° Interaja com nosso chatbot seguindo estes passos simples:<br />
                    2° Clique na aba "Assistente Virtual".<br />
                    3° Faça sua pergunta sobre o seu veículo.<br />
                    Receba recomendações e orientações em tempo real.
                </p>
            </div>

            <div className="titulo_saiba_4">
                <h2>Depoimentos de Usuários</h2>
            </div>
            <div className="text_saiba_4">
                <p>"O chatbot foi incrível! Consegui entender o que estava acontecendo com meu carro sem precisar de um mecânico." - João S.</p>
            </div>

            <div className="titulo_saiba_5">
                <h2>Perguntas Frequentes</h2>
            </div>
            <div className="text_saiba_5">
                <ul>
                    <li><strong>O chatbot pode resolver todos os problemas do meu veículo?</strong><br /> Não, mas ele pode ajudar a identificar o problema e oferecer recomendações.</li>
                    <li><strong>É seguro compartilhar informações com o chatbot?</strong><br /> Sim, sua privacidade é nossa prioridade. Todos os dados são protegidos.</li>
                </ul>
            </div>
        </div>
    );
};

export default Saiba;
