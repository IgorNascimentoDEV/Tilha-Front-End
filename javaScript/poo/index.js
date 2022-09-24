import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor} from "./Funcionario/Diretor.js";
import {SistemaDeAutenticacao} from "./SistemaDeAutenticacao.js"
import { ContaCorrente} from "./conta/ContaCorrente.js";
import { ContaPoupanca } from "./conta/ContaPoupanca.js";
import {ContaSalario} from "./conta/ContaSalario.js"

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
conta1.sacar(100);

//Instaciando uma conta poupanca para o objeto cliente2
const conta2 = new ContaPoupanca(0, cliente2, 1001);

//Utilizando o metodo de transferencia de conta
 conta1.tranferir(100, conta2);
    
console.log(conta2);
 console.log(conta1.saldo);

//imprimindo a quantidaes de contas criadas 
 console.log(ContaCorrente.numeroDeContas);






//instaciando funcionarios/cliente e criando senha para cada um
const diretor = new Diretor("Igor", 10000, 78984565);
diretor.cadastrarSenha(123456);
const gerente = new Gerente("leandro", 5226, 784654968);
gerente.cadastrarSenha(654321);
const cliente3 = new Cliente("dora", 789456123, 369963);

//verificando se eles estão logados no sistema
const diretorEstarLogado = SistemaDeAutenticacao.login(diretor, "123456");
const gerenteEstarLogado = SistemaDeAutenticacao.login(gerente, 654321);
const clienteEstarLogado = SistemaDeAutenticacao.login(cliente3, 369963);
console.log(diretorEstarLogado);
console.log(gerenteEstarLogado);   
console.log(clienteEstarLogado);  