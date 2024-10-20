import Image from 'next/image';
import Link from 'next/link';
import Calculadora from '../Images/calculadora.png';
import MulherMotor from '../Images/mulher-motor.png';
import PortoCarCare from '../Images/portocare.png';

export default function Home() {
    return (
        <div>
            <div className="cabecalho">
                <h1>
                    Conte com um seguro de carro, conheça a <br /> Seguro  Auto da Porto Seguro!
                </h1>
                <a className='saiba-mais' href="https://www.portoseguro.com.br/seguro-auto?utm_source=google&utm_medium=cpa&utm_campaign=automovel_na_marca_se
                arch_aon_performance_hq_growth_auto&utm_content=key_transacao_automatico_cross_marca_pesquisa_saiba-mais_nu_teste-nao_24uzq00
                229he&ref=24uzq00229he&gad_source=1&gclid=CjwKCAjw59q2BhBOEiwAKc0ije0oTEJb6IhSgK-USQHB-55pAB6qF13TNSn_obiCI7hn7Xv5KRYsKxoCiVQQAvD_
                BwE"><strong>Saiba mais</strong></a>
            </div>
            <div className="inicio">
                <Image src={PortoCarCare} width={500} height={300} alt="logo da PortoCarCare" />
                <h1 className="texto-inicio">Clareza no<br />diagnóstico,<br />solução eficiente.</h1>
            </div>

            {/* <div className="imagens-inicio">
                <Image src="" width={500} height={300} alt="" />
                <Image src="" width={500} height={300} alt="" />
                <Image src="" width={500} height={300} alt="" />
            </div> */}

            <div className="cards">
                <div className="assistente-virtual">
                    <Image src={Calculadora} width={500} height={300} alt="calculadora" />
                    <p>Saiba mais sobre os nossos <br /> serviços</p>
                    <Link href="/saiba">Clique aqui</Link>
                </div>

                <div className="medidas-preventivas">
                    <Image src={MulherMotor} width={500} height={300} alt="mulher mexendo no motor" />
                    <p>Medidas preventivas</p>
                    <Link href="/medidas">Clique aqui</Link>
                </div>
            </div>

            <div className="participantes">
                <button><Link href="/participantes">Participantes</Link></button>
            </div>
        </div>
    )
}
