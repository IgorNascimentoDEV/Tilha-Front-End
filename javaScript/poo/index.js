import { Cliente } from "./Cliente.js";
import { ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";


//Um atributo static vai ser igual para todas as instacias dessa classe
//com o # tornamos os atributos da classe private
//com o "_" deixamos explicito que o atributo é privado  não deve ser manipulado fora da classe
   
//O Super() ela faz uma referencia da classe pai


//Instaciando novos clientes 
const cliente1 = new Cliente("Igor", 7411144545);

const cliente2 = new Cliente("Isa", 999994545);

    
//Instaciando uma conta corrente para o objeto cliente1  
const conta1 = new ContaCorrente(cliente1, 1001);
//utilizando os metodos depositar e sacar
conta1.depositar(1000); 
const valorSacado = conta1.sacar(50);

//Instaciando uma conta poupanca para o objeto cliente2
const conta2 = new ContaPoupanca(0, cliente2, 1001);

//Utilizando o metodo de transferencia de conta
conta1.tranferir(100, conta2);
    
console.log(conta2);
console.log(conta1);

//imprimindo a quantidaes de contas criadas 
console.log(ContaCorrente.numeroDeContas);