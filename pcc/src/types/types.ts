export type TipoCarro = {
    id_veiculo: number,
    quilometragem: number,
    tipo: string,
    placa: string;
    marca: string,
    modelo: string;
    ano: number;
}

export type TipoCadastro = {
    id_usuario: number,
    cpf: string,
    nome: string,
    senha: string;
    email: string;
}