import Image from 'next/image'
import Chat from '../../Images/chat.png'
import Face from '../../Images/facebook.png'
import Insta from '../../Images/instagram.png'
import Linke from '../../Images/linkedin.png'
import Localizacao from '../../Images/localizacao.png'
import Ouvidoria from '../../Images/ouvidoria.png'
import Baixe from '../../Images/play-apple.png'
import Exclamacao from '../../Images/ponto-de-exclamacao.png'
import PretoBranco from '../../Images/porto-preto-branco.png'
import Question from '../../Images/question.png'
import Telefone from '../../Images/telefone.png'
import Whats from '../../Images/whatsapp.png'
import X from '../../Images/x.png'
import Youtube from '../../Images/youtube.png'




function Rodape() {
    return (
        <footer className="rodape">
            <div className="redes">
                <h2>
                    LINKS RÁPIDOS!
                </h2>
                <ul>
                    <li>
                        <a href="#"><Image className='linkr' src={Question} width={500} height={300} alt="Question" />Perguntas
                            frequentes</a>
                    </li>
                    <li>
                        <a href="#"><Image className='linkr' src={Localizacao} width={500} height={300} alt="Localização" />Endereços</a>
                    </li>
                    <li>
                        <a href="#"><Image className='linkr' src={Whats} width={500} height={300} alt="WhastApp" />WhatsApp</a>
                    </li>
                    <li>
                        <a href="#"><Image className='linkr' src={Telefone} width={500} height={300} alt="Telefone" />SAC e telefones</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#"><Image className='linkr' src={Ouvidoria} width={500} height={300} alt="Ouvidoria" /> Ouvidoria</a>
                    </li>
                    <li>
                        <a href="#"><Image className='linkr' src={Exclamacao} width={500} height={300} alt="Exclamação" />Canal de denúncias</a>
                    </li>
                    <li>
                        <a href="#"><Image className='linkr' src={Chat} width={500} height={300} alt="chat" />Chat online</a>
                    </li>
                </ul>
            </div>

            <div className="parceiros">
                <h2>
                    ACOMPANHE NOSSOS <br />
                    PRINCIPAIS PARCEIROS!
                </h2>

                <div className="logo-porto-preta">
                    <Image src={PretoBranco} width={500} height={300} alt="logo da Porto com as cores em preto e branco" />
                </div>

                <h2>
                    ACOMPANHE NOSSAS <br />
                    PRINCIPAIS REDES SOCIAIS!
                </h2>
                <ul>
                    <li><a className='facebook-Porto' target='_blank' rel='noopener' title='site Facebook' href="https://www.facebook.com/porto"> <Image src={Face}
                        width={500} height={300} alt="logo facebook" /></a>
                    </li>
                    <li><a className='instagram-Porto' target='_blank' rel='noopener' title='site Instagram' href="https://www.instagram.com/porto/"> <Image src={Insta}
                        width={500} height={300} alt="logo instagram" /></a>
                    </li>
                    <li><a className='youtube' target='_blank' rel='noopener' title='site youtube' href="https://www.youtube.com/@portoseguro"> <Image src={Youtube}
                        width={500} height={300} alt="logo youtube" /></a>
                    </li>
                    <li><a className='x' target='_blank' rel='noopener' title='site X' href="https://twitter.com/portoseguro"> <Image src={X}
                        width={500} height={300} alt="logo X" /></a>
                    </li>
                    <li><a className='Linkedin' target='_blank' rel='noopener' title='site Linkedin' href="https://www.linkedin.com/company/porto/?originalSubdomain=br">
                        <Image src={Linke} width={500} height={300} alt="logo Linkedin" /></a>
                    </li>
                </ul>

                <div className="baixe-app">
                    <h2>Baixe o App da Porto:</h2>
                    <a className='apporto' target='_blank' rel='noopener' title='site apple e google store' href="https://www.portoseguro.com.br/app-porto-download">
                        <Image src={Baixe} width={500} height={300} alt="logo apple e google store" /></a>
                </div>

            </div>
        </footer>
    );
}

export default Rodape;