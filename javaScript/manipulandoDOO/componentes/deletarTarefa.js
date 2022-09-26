const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button');

    botaoDeleta.classList.add("check-button");
    botaoDeleta.innerText = 'deletar';
    botaoDeleta.addEventListener('click', deletarTarefa);
    
    return botaoDeleta;
}

const deletarTarefa = (evento) =>{
    const botaoDeleta = evento.target;

    const tarefaCompleta = botaoDeleta.parentElement;
    
    tarefaCompleta.remove(); // função remove é responsavel por excluir objetos do dom  

    return botaoDeleta;
}

export default BotaoDeleta;