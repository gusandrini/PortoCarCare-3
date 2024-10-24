import Cabecalho from '@/components/Cabecalho/Cabecalho';
import Rodape from '@/components/Rodape/Rodape';
import Image from 'next/image';
import Link from 'next/link';
import Gu from '../../Images/foto-cv.jpg';
import Duda from '../../Images/foto-duda.jpg';
import Vi from '../../Images/foto-vitor.jpg';

const Participantes = () => {
    return (
        <div>
            
            <div className="paginas">
                <Link href="/"> Home / Participantes</Link>
            </div>

            <div className="cards-i">
                <div className="duda">
                    <Image src={Duda} width={500} height={300} alt="integrante Eduarda" />
                    <p>Eduarda Tiemi Akamini Machado<br />RM:554756</p>
                </div>

                <div className="gu">
                    <Image src={Gu} width={500} height={300} alt="integrante gustavo" />
                    <p>Gustavo de Oliveira Turci Sandrini<br />RM:557505</p>
                </div>

                <div className="vi">
                    <Image src={Vi} width={500} height={300} alt="integrante Vitor" />
                    <p>Victor Agrela<br />RM:557345</p>
                </div>
            </div>
        </div>
    );
};

export default Participantes