import Ar from '@/Images/ar.jpg';
import Motor from '@/Images/motor-problemas.jpg';
import Freio from '@/Images/freio.jpg';
import Suspensao from '@/Images/suspensao.jpg';
import Transmissao from '@/Images/transmissao.jpg';
import Eletrica from '@/Images/eletrico.jpg';
import Image from "next/image";
import Link from "next/link";

export default function Diagnostico() {
    return (
        <div>
            <div className="cards-1">
                <div className="cards_4">
                    <div className="suspensao">
                        <Image src={Suspensao} alt="Agenda representando serviços de seguros" priority />
                        <p>Suspensão</p>
                        <Link className='btn_click' href="/problemas/suspensao">Clique aqui</Link>
                    </div>
                </div>
                
                <div className="cards_2">
                    <div className="freio">
                        <Image src={Freio} alt="Carro" priority />
                        <p>Freios</p>
                        <Link className='btn_click' href="/problemas/freio">Clique aqui</Link>
                    </div>
                </div>
                <div className="cards_3">
                    <div className="sistema-eletrico">
                        <Image src={Eletrica} alt="Motor de um carro" priority />
                        <p>Sistema elétrico</p>
                        <Link className='btn_click' href="/problemas/sistema-eletrico">Clique aqui</Link>
                    </div>
                </div>
            </div>
            <div className="cards">
                <div className="cards_1">
                    <div className="motor">
                        <Image src={Motor} alt="Agenda representando serviços de seguros" priority />
                        <p>Motor</p>
                        <Link className='btn_click' href="/problemas/motor">Clique aqui</Link>
                    </div>
                </div>
                <div className="cards_5">
                    <div className="transmissao">
                        <Image src={Transmissao} alt="Carro" priority />
                        <p>Transmissão</p>
                        <Link className='btn_click' href="/problemas/transmissao">Clique aqui</Link>
                    </div>
                </div>
                <div className="cards_6">
                    <div className="ar-condicionado">
                        <Image src={Ar} alt="Motor de um carro" priority />
                        <p>Ar Condicionado</p>
                        <Link className='btn_click' href="/problemas/ar-condicionado">Clique aqui</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
