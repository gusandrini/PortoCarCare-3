import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";
import Link from "next/link";


const Saiba = () => {
    return (
        <div>
           
            <div className="paginas">
                <Link href="/"> Home / Saiba mais</Link>
            </div>

            <div className="lista-s">
                <h1>Conheça um pouco mais dos nossos serviços!</h1>
                <ul>
                    <p>Para utilizar nosso serviço de chatbot, não é necessário ter uma conta na IBM Cloud. Basta clicar na aba "Assistente Virtual",
                        onde a Beta, a assistente desenvolvida pela PortoCarCare, estará pronta para te ajudar. <br />
                        Ela foi projetada para guiá-lo(a) na identificação do diagnóstico mais preciso e fornecer orientações claras para que você tome a
                        melhor decisão na resolução de problemas do seu veículo. <br /> Este serviço foi especialmente criado para pessoas que não possuem
                        conhecimento técnico sobre veículos, garantindo que você se sinta seguro(a) e bem informado(a) ao enfrentar qualquer situação
                        relacionada ao seu veículo.</p>
                </ul>
            </div>


            <Rodape />
        </div>
    );
};

export default Saiba