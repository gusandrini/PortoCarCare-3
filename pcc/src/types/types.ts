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

export type TipoAr = {
    problema: string;
}

export type TipoFreio = {
    problema: string;
}

export type TipoMotor = {
    problema: string;
}

export type TipoSistema = {
    problema: string;
}

export type TipoSuspensao = {
    problema: string;
}

export type TipoTransmissao = {
    problema: string;
}