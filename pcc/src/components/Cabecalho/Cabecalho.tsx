// "use client";

// import { useEffect } from 'react';
import PortoCarCAre from "@/Images/portocare.png";
import Image from 'next/image';
import Link from 'next/link';

function Cabecalho() {

    return (
        <header>
            <div className="foto_menu">
                <Link href="/">
                    <Image
                        src={PortoCarCAre}
                        alt="logo da Porto CarCare"
                        className='logo-porto-CarCare'
                    />
                </Link>
            </div>
            <div className="menu">
                <nav>
                    <ul>
                        <li><Link className='link_menu' href="/sobre-nos">SOBRE NÓS</Link></li>
                        <li><Link className='link_menu' href="/carro">CADASTRE SEU CARRO</Link></li>
                        <li><Link className='link_menu' href="/ajuda">AJUDA</Link></li>
                        <li>
                            <Link
                                className='link_menu'
                                href="https://web-chat.global.assistant.watson.appdomain.cloud/preview.html?region=us-south&integrationID=250f2872-90d1-4b69-a463-e7c03c0581c9&serviceInstanceID=cd14777c-39ac-401b-938f-9849d2bb018f"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ASSISTENTE VIRTUAL
                            </Link>
                        </li>
                        <li><Link className='link_menu' href="/login">ÁREA DO CLIENTE</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Cabecalho;
