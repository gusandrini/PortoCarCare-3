
import Image from 'next/image';
import Link from 'next/link';
import PortoCarCAre from "../../Images/portocare.png";


function Cabecalho() {
    return (
        <header>
            <div className="foto_menu">
                <Link href="/"><Image src={PortoCarCAre} width={400} height={400} alt="logo da Porto CarCare" className='logo-porto-CarCare' /></Link>
            </div>
            <div className="menu">
                <nav>
                    <ul>
                        <li><Link className='link_menu' href="/sobre-nos">SOBRE NÓS</Link></li>
                        <li><Link className='link_menu' href="/ajuda">AJUDA</Link></li>
                        <li><a className='link_menu' href="https://web-chat.global.assistant.watson.appdomain.cloud/preview.html?region=us-south&integrationID=250f2872-90d1-4b69-a463-e7c03c0581c9&serviceInstanceID=cd14777c-39ac-401b-938f-9849d2bb018f">
                            ASSISTENTE VIRTUAL</a></li>
                        <li><Link className='link_menu' href="/login">ÁREA DO CLIENTE</Link></li>
                    </ul>
                </nav>
            </div>


        </header>
    );
}

export default Cabecalho;