import BotaoConclui from './componentes/concluiTarefa.js'
import BotaoDeleta from './componentes/deletaTarefa.js'
 

    const handNovoItem = (evento) =>{
        evento.preventDefault()
        
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value)//moment é uma biblioteca para visualizar datas 

    const dataFormatada= data.format('DD/MM/YYYY');

    const dados = {
        valor,
        dataFormatada
    }

    const criaTarefa = criarTarefa(dados);
    lista.appendChild(criaTarefa)


    //Um problema do Sessin Storage armazena dados enquanto o servidor esta aberto.
    sessionStorage.setItem("tarefa", JSON.stringify(dados)) //metodo utilizado para captura oque o usuario digitou e guarda no session Storage

    input.value = " "
    
} 

    const criarTarefa = ({valor, dataFormatada}) => {

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${dataFormatada} ${valor}</p>`

    tarefa.innerHTML = conteudo
    
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
   
    return tarefa;
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handNovoItem)