export class Cliente{
    nome;
    _cpf;

    
    //metodos acessores
    get cpf(){
        return this._cpf;
    }

    //metodo construtor de Cliente
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}