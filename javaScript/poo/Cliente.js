export class Cliente{

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