import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";
import Link from "next/link";

const Medidas = () => {
    return (
        <div>
            <div className="paginas">
                <Link href="/">Home / Medidas preventivas</Link>
            </div>

            <div className="titulo_medidas">
                <h1>O que é manutenção preventiva?</h1>
            </div>

            <div className="text_medidas">
                <p>
                    A manutenção preventiva faz parte da direção segura e é uma forma de prevenir possíveis falhas ou defeitos no seu veículo antes que eles se tornem mais graves e comprometam sua segurança e seu bolso. Ao realizar as revisões periódicas recomendadas pelo fabricante, você garante que seu veículo esteja sempre em boas condições de uso e evita surpresas desagradáveis na estrada. Além disso, essa abordagem contribui para a valorização do veículo no mercado, pois demonstra que você cuidou bem dele e que ele está em conformidade com as normas técnicas e ambientais. Isso pode fazer uma grande diferença na hora de vender ou trocar seu carro, moto ou caminhão.
                </p>
            </div>

            <div className="titulo_medidas_2">
                <h1>Benefícios da manutenção preventiva</h1>
            </div>

            <div className="text_medidas_2">
                <p>
                    Um dos principais benefícios da manutenção preventiva é a melhoria da segurança do veículo. Ao verificar regularmente os itens essenciais, como pneus, freios, luzes, cintos de segurança, airbags e outros sistemas de proteção, você reduz o risco de acidentes causados por falhas mecânicas ou elétricas. Você também evita multas e penalidades por infrações relacionadas à falta de manutenção do seu veículo. Outro benefício da manutenção preventiva é o aumento do desempenho. Ao manter os componentes do motor, da transmissão, da suspensão e da direção em bom estado, você otimiza o consumo de combustível, a potência, a estabilidade e a dirigibilidade do seu carro, moto ou caminhão.
                </p>
            </div>

            <div className="titulo_medidas_3">
                <h1>Medidas preventivas</h1>
            </div>

            <div className="lista_medidas">
                <p>
                    1° Evite deixar o carro parado por muito tempo.<br/>
                    2° Lembre-se da troca de fluidos e filtros nos períodos recomendados.<br/>
                    3° Verifique a calibragem e a vida útil dos pneus.<br/>
                    4° Observe a presença de ruídos.<br/>
                    5° Evite dirigir o carro com motor frio ou superaquecido.<br/>
                    6° Faça um seguro automotivo.<br/>
                    7° Verificação das luzes.<br/>
                    8° Manutenção do sistema de freios.<br/>
                    9° Limpeza do sistema de arrefecimento.<br/>
                    10° Condução defensiva.<br />
                </p>
            </div>
        </div>
    );
};

export default Medidas;
