import Face from '@/Images/facebook.png';
import Insta from '@/Images/instagram.png';
import Linke from '@/Images/linkedin.png';
import Baixe from '@/Images/play-apple.png';
import PretoBranco from '@/Images/porto-preto-branco.png';
import X from '@/Images/x.png';
import Youtube from '@/Images/youtube.png';
import Image from 'next/image';
import Link from 'next/link';

function Rodape() {
    return (
        <footer className="rodape">
            <div className="conatiner-f">
                <div className="titulo-parceiro">
                    <h2>
                        ACOMPANHE NOSSOS PRINCIPAIS PARCEIROS:
                    </h2>
                </div>
                <div className="logo-porto-preta">
                    <Image src={PretoBranco} alt="logo da Porto com as cores em preto e branco" />
                </div>
                <div className="titulo-redes">
                    <h2>
                        ACOMPANHE NOSSAS PRINCIPAIS REDES SOCIAIS:
                    </h2>
                </div>
                <div className="redes">
                    <div className="face">
                        <ul>
                            <li>
                                <Link className='facebook-Porto' target='_blank' rel='noopener' title='site Facebook' href="https://www.facebook.com/porto">
                                    <Image src={Face} alt="logo facebook" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="insta">
                        <ul>
                            <li>
                                <Link className='instagram-Porto' target='_blank' rel='noopener' title='site Instagram' href="https://www.instagram.com/porto/">
                                    <Image src={Insta} alt="logo instagram" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="youtube">
                        <ul>
                            <li>
                                <Link className='youtube' target='_blank' rel='noopener' title='site youtube' href="https://www.youtube.com/@portoseguro">
                                    <Image src={Youtube} alt="logo youtube" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="x">
                        <ul>
                            <li>
                                <Link className='x' target='_blank' rel='noopener' title='site X' href="https://twitter.com/portoseguro">
                                    <Image src={X} alt="logo X" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="linke">
                        <ul>
                            <li>
                                <Link className='Linkedin' target='_blank' rel='noopener' title='site Linkedin' href="https://www.linkedin.com/company/porto/?originalSubdomain=br">
                                    <Image src={Linke} alt="logo Linkedin" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="titulo-app">
                    <h2>Baixe o App da Porto:</h2>
                </div>
                <div className="baixe-app">
                    <Link className='apporto' target='_blank' rel='noopener' title='site apple e google store' href="https://www.portoseguro.com.br/app-porto-download">
                        <Image src={Baixe} alt="logo apple e google store" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Rodape;
