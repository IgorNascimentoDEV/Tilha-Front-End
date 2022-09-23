import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0; //Um atributo static vai ser igual para todas as instacias dessa classe
    agencia;
    //com o # tornamos os atributos da classe private
    _saldo = 0;  //com o "_" deixamos explicito que o atributo é privado  não deve ser manipulado fora da classe
    _cliente;


    //metodos acessores
    set cliente(novoCliente){
        if (novoCliente instanceof Cliente){
             this._cliente = novoCliente
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }
    
    //metodo construtor de Conta Corrente
    constructor(cliente, agencia){
        this._cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }else{
            console.log("não é possivel realizar o saque")
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
        }else{
            console.log("deposito impossivel")
        }
    }

    tranferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);       
    }
}   