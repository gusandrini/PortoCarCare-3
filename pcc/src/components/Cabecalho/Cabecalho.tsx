
import Image from 'next/image';
import Link from 'next/link';
import Porto from "../Images/porto-topo.png";


function Cabecalho() {
    return (
        <header>
            <div className="menu">
                <nav>
                    <a href="#"><Image src={Porto} alt="logo da Porto Seguro" className='logo-porto' /></a>
                    <ul>
                        <li><Link href="">SOBRE NÓS</Link></li>
                        <li><Link href="/ajuda">AJUDA</Link></li>
                        <li><a className="watson" href="https://web-chat.global.assistant.watson.appdomain.cloud/preview.html?region=us-south&integrationID=250f2872-90d1-4b69-a463-e7c03c0581c9&serviceInstanceID=cd14777c-39ac-401b-938f-9849d2bb018f">
                            ASSISTENTE VIRTUAL</a></li>
                        <li><Link href="/login">ÁREA DO CLIENTE</Link></li>
                    </ul>
                </nav>
            </div>


        </header>
    );
}

export default Cabecalho;