//Método do botão de concluir
const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');
    
    botaoConclui.classList.add("check-button");
    botaoConclui.innerText = 'concluir' //representa o conteudo de texto que sera redenrizado do botão
    botaoConclui.addEventListener('click', concluirTarefa);
    
    return botaoConclui
}   

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target; //descobrindo o elemento que foi clicado atraves do ".target"

    const tarefaConcluida = botaoConclui.parentElement; //Pegando o pai do elemento atraves do ".parentElement"

    tarefaConcluida.classList.toggle('done'); //metodo toggle executa a classe CSS "done" a parti do momento que o botão for clicado
}
 export default BotaoConclui