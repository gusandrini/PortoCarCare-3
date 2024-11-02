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
    problema_ar: string;
    diagnostico: string;
    orcamento: string;
}

export type TipoFreio = {
    problema_freio: string;
    diagnostico: string;
    orcamento: string;
}

export type TipoMotor = {
    problema_motor: string;
    diagnostico: string;
    orcamento: string;
}

export type TipoSistema = {
    problema_se: string;
    diagnostico: string;
    orcamento: string;
}

export type TipoSuspensao = {
    problema_suspensao: string;
    diagnostico: string;
    orcamento: string;
}

export type TipoTransmissao = {
    problema_transmissao: string;
    diagnostico: string;
    orcamento: string;
}