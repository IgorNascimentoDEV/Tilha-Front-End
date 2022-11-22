import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletarTarefa.js'
import { carregaTarefa } from './carregaTarefa.js'

//constante responsavel pela manipulação do DOM
 export const handleNovoItem = (evento) => {
    evento.preventDefault() // Com esse metodo ele previni um comportamento 
    
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    
    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value)
    const horario = data.format('HH:mm')
    const dataFormatada = data.format('DD/MM/YYYY')
    const concluida = false

    const dados ={
        valor,
        dataFormatada,
        horario,
        concluida
    }

    const tarefasAtualizadas = [...tarefas, dados]

    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas))

    input.value = ''
    carregaTarefa()

}
//funçaõ responsavel por criar tarefas exibir as tarefas
export function Tarefa({valor, horario, concluida}, id){

    const tarefa = document.createElement('li'); //método responsavel por criar elementos html

    const conteudo = `<p class="content">${horario} * ${valor}</p>`//interpolação de codigo html com javaScript

    if(concluida){
        tarefa.classList.add("done"); //método responsavel por colocar class CSS no elemento criado
    }
    tarefa.classList.add("task"); //método responsavel por colocar class CSS no elemento criado
    tarefa.innerHTML = conteudo; //método responsavel por colocar ele texto no html

    tarefa.appendChild(BotaoConclui(carregaTarefa, id)); // metodo responsavel por adicionar butão 
    tarefa.appendChild(BotaoDeleta(carregaTarefa, id));
    return tarefa
}