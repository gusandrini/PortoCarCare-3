import Link from "next/link";


const Cadastro = () => {
    return (
        <div>

            <div className="paginas">
                <Link href="/"> Home / Área do cliente</Link>
            </div>

            <div className="principal">
                <div className="container-l">
                    <strong><span className="title-l">REGISTRO</span></strong>
                    <form>
                        <input type="text" placeholder='Digite o nome' />
                        <input type="email" placeholder='Digite o email' />
                        <input type="password" placeholder='Digite a senha' />
                        <Link href="/login"><button>Registrar</button></Link>
                    </form>
                    <Link href="/login"><p>Você tem conta? Login</p></Link>

                </div>
            </div>

        </div>
    );
};

export default Cadastro
