import Link from "next/link";

const Login = () => {
    return (
        <div>

            <div className="paginas">
                <Link href="/"> Home / Área do cliente</Link>
            </div>

            <div className="principal">
                <div className="container-l">
                    <strong><span className="title-l">LOGIN</span></strong>
                    <form>
                        <input type="email" placeholder='Digite o email' />
                        <input type="password" placeholder='Digite a senha' />
                        <Link href="/"><button>Acessar</button></Link>
                    </form>
                    <Link href="/cadastro"><p>Você não tem conta? Cadastro</p></Link>

                </div>
            </div>

        </div>
    );
};

export default Login