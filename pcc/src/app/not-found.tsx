import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="NotFound">
      <h1 className="text-4xl font-bold">404 - Página Não Encontrada</h1>
      <p className="mt-2">Desculpe, a página que você está procurando não existe.</p>
      <Link href="/">
        Voltar para a página inicial
      </Link>
    </div>
  );
}
