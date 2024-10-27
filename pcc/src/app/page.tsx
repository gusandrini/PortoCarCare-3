import Image from 'next/image';
import Link from 'next/link';
import Calculadora from '../Images/calculadora.png';
import MulherMotor from '../Images/mulher-motor.png';

export default function Home() {
    return (
        <div>
            <header className="cabecalho">
                <h1>
                    Conte com um seguro de carro, conheça a Seguro Auto da Porto Seguro!
                </h1>
                <Link 
                    className='saiba-mais' 
                    href="https://www.portoseguro.com.br/seguro-auto?utm_source=google&utm_medium=cpa&utm_campaign=automovel_na_marca_search_aon_performance_hq_growth_auto&utm_content=key_transacao_automatico_cross_marca_pesquisa_saiba-mais_nu_teste-nao_24uzq00229he&ref=24uzq00229he&gad_source=1&gclid=CjwKCAjw59q2BhBOEiwAKc0ije0oTEJb6IhSgK-USQHB-55pAB6qF13TNSn_obiCI7hn7Xv5KRYsKxoCiVQQAvD_BwE" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <strong>Saiba mais</strong>
                </Link>
            </header>

            <div className="inicio">
                <h1 className="texto-inicio">Clareza no diagnóstico, solução eficiente.</h1>
            </div>

            <div className="cards">
                <div className="assistente-virtual">
                    <Image src={Calculadora} width={500} height={300} alt="Calculadora representando serviços de seguros" priority/>
                    <p>Saiba mais sobre os nossos <br /> serviços</p>
                    <Link className='btn_click' href="/saiba">Clique aqui</Link>
                </div>

                <div className="medidas-preventivas">
                    <Image src={MulherMotor} width={500} height={300} alt="Mulher mexendo no motor de um carro" priority />
                    <p>Medidas preventivas</p>
                    <Link className='btn_click' href="/medidas">Clique aqui</Link>
                </div>
            </div>

            
        </div>
    );
}
