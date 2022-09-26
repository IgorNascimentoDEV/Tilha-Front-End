import BotaoConclui from './componentes/concluiTarefa.js'
import BotaoDeleta from './componentes/deletarTarefa.js'
//funçaõ responsavel por criar tarefas
function criarTarefa(evento){

    evento.preventDefault() // Com esse metodo ele previni um comportamento  

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    

    const tarefa = document.createElement('li'); //método responsavel por criar elementos html
    tarefa.classList.add("task"); //método responsavel por colocar class CSS no elemento criado

    const conteudo = `<p class="content">${valor}</p>`//interpolação de codigo html com javaScript

    tarefa.innerHTML = conteudo; //método responsavel por colocar ele texto no html

    tarefa.appendChild(BotaoConclui()); // metodo responsavel por adicionar butão 
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa); //metodo responsavel por adicionar elemento html dentro de outro elemento
    input.value = '';
}

//criamos essa constante para utilizala na manipulação do DOM onde ela vai receber um seletor que estar no botão
const novaTarefa = document.querySelector('[data-form-button]'); 


//com esse método é possiveel escutar um evento e executar uma função caso o evento seja assionado
novaTarefa.addEventListener('click', criarTarefa);