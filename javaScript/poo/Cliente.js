export class Cliente{

    //metodos acessores
    get cpf(){
        return this._cpf;
    }   

    //metodo construtor de Cliente
    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

}