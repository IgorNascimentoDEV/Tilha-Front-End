export class Conta{
 
    //metodo construtor de Conta s
    constructor(saldoInicial, cliente, agencia){
        //abstraindo a classe Conta "Forçando ERROR"
        if(this.constructor == Conta){
        throw new Error ("Voçê não pode insatanciar esse objeto do tipo conta")
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

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
    

    sacar(valor){
      let taxa = 1;
      return this._sacar(valor, taxa);
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }else{
            console.log("não é possivel realizar o saque")
        }
        return 0;
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