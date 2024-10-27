import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";
import Link from "next/link";

const Medidas = () => {
    return (
        <div>
           
            <div className="paginas">
                <Link href="/"> Home / Medidas preventivas</Link>
            </div>

            <div>
                <h1 className="titulo_medidas">Medidas peventivas</h1>
                <ul className="lista_medidas">
                    <p><br />
                        1° Evite deixar o carro parado por muito tempo.<br/>
                        2° Lembre-se da troca de fluidos e filtros nos períodos<br/>recomendados.<br/>
                        3° Verifique a calibragem e a vida útil dos pneus.<br/>
                        4° Observe a presença de ruídos.<br/>
                        5° Evite dirigir o carro com motor frio ou superaquecido.<br/>
                        6° Faça um seguro automotivo.<br/>
                        7° Verificação das luzes.<br/>
                        8° Manutenção do sistema de freios.<br/>
                        9° Limpeza do sistema de arrefecimento.<br/>
                        10° Condução defensiva.<br /><br />
                    </p>
                </ul>
            </div>
        </div>
    );
};

export default Medidas