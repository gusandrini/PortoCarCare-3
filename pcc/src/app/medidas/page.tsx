import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";
import Link from "next/link";

const Medidas = () => {
    return (
        <div>
           
            <div className="paginas">
                <Link href="/"> Home / Medidas preventivas</Link>
            </div>

            <div className="lista-m">
                <h1>Medidas peventivas</h1>
                <ul>
                    <p>1° Evite deixar o carro parado por muito tempo.</p>
                    <p>2° Lembre-se da troca de fluidos e filtros nos períodos recomendados.</p>
                    <p>3° Verifique a calibragem e a vida útil dos pneus.</p>
                    <p>4° Observe a presença de ruídos.</p>
                    <p>5° Evite dirigir o carro com motor frio ou superaquecido.</p>
                    <p>6° Faça um seguro automotivo.</p>
                    <p>7° Verificação das luzes.</p>
                    <p>8° Manutenção do sistema de freios.</p>
                    <p>9° Limpeza do sistema de arrefecimento.</p>
                    <p>10° Condução defensiva</p>
                </ul>
            </div>
        </div>
    );
};

export default Medidas