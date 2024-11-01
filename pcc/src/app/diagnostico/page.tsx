import Agenda from '@/Images/agenda.jpg';
import Carro from '@/Images/carro.jpg';
import Motor from '@/Images/motor.jpg';
import Image from "next/image";
import Link from "next/link";

export default function Diagnostico() {
    return (
        <div>
            <div className="cards">
                <div className="cards_1">
                    <div className="motor">
                        <Image src={Agenda} alt="Agenda representando serviços de seguros" priority />
                        <p>Motor</p>
                        <Link className='btn_click' href="/problemas/motor">Clique aqui</Link>
                    </div>
                </div>
                <div className="cards_2">
                    <div className="freio">
                        <Image src={Carro} alt="Carro" priority />
                        <p>Freios</p>
                        <Link className='btn_click' href="/problemas/freio">Clique aqui</Link>
                    </div>
                </div>
                <div className="cards_3">
                    <div className="sistema-eletrico">
                        <Image src={Motor} alt="Motor de um carro" priority />
                        <p>Sistema elétrico</p>
                        <Link className='btn_click' href="/problemas/sistema-eletrico">Clique aqui</Link>
                    </div>
                </div>
            </div>
            <div className="cards">
                <div className="cards_4">
                    <div className="suspensao">
                        <Image src={Agenda} alt="Agenda representando serviços de seguros" priority />
                        <p>Suspensão</p>
                        <Link className='btn_click' href="/problemas/suspensao">Clique aqui</Link>
                    </div>
                </div>
                <div className="cards_5">
                    <div className="transmissao">
                        <Image src={Carro} alt="Carro" priority />
                        <p>Transmissão</p>
                        <Link className='btn_click' href="/problemas/transmissao">Clique aqui</Link>
                    </div>
                </div>
                <div className="cards_6">
                    <div className="ar-condicionado">
                        <Image src={Motor} alt="Motor de um carro" priority />
                        <p>Ar Condicionado</p>
                        <Link className='btn_click' href="/problemas/ar-condicionado">Clique aqui</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
