import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0; 

    //metodo construtor de Conta Corrente
     constructor(cliente, agencia){
        super(0, cliente, agencia); //super é utilizado quando a gente herda de uma outra classe para utilizar o construtor da classe pai  
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}       