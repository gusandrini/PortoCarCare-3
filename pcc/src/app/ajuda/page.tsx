import Cabecalho from '@/components/Cabecalho/Cabecalho';
import Rodape from '@/components/Rodape/Rodape';
import Link from 'next/link';


const Ajuda = () => {
    return (
        <div>
            
            <div className="paginas">
                <Link href="/"> Home / Ajuda</Link>
            </div>

            <div className="contato">
                <section className="stato">
                    <form className="ftato">
                        <div className="center">
                            <label className="titulo"> ÁREA DE CONTATO:</label>
                        </div>
                        <div>
                            <label></label>
                            <input type="text" name="name" placeholder="Digite seu nome" required />
                        </div>

                        <div>
                            <label></label>
                            <input type="email" name="email" placeholder="Digite seu email" required />
                        </div>

                        <div>
                            <label></label>
                            <textarea name="message" rows={30} placeholder="Digite sua mensagem" required></textarea>
                        </div>

                        <div>
                            <input className="center" type="submit" value="Enviar" />
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Ajuda