//Método do botão de concluir
const concluirTarefa = (atualiza, id) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))
 
    tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida
 
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))
 
    atualiza()
 }
 
const BotaoConclui = (atualiza, id) => {
    const botaoConclui = document.createElement('button');
    
    botaoConclui.classList.add("check-button");
    botaoConclui.innerText = 'concluir' //representa o conteudo de texto que sera redenrizado do botão
    botaoConclui.addEventListener('click', ()=> concluirTarefa(atualiza, id));
    
    return botaoConclui
}   


 export default BotaoConclui