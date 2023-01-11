//getElementById()- pegar o html por id

//const elemento = document.getElementById('titulo');
//console.log(elemento)

//getElementsByClassName()- pegar varios elementos com a classe com o mesmo nome

// const elementos = document.getElementsByClassName('one');
// console.log(elementos);

//getElementsByTagName() - pegar por tags

// const elementos= document.getElementsByTagName('h1')
// console.log(elementos);

// querySelector()- seleciona pelo seletor

//querySelectorAll()- seleciona todos pelo seletor


//MANIPULANDO CONTEUDO

//const elemento = document.querySelector('header')

// elemento.textContent += " Igor front-end"

// elemento.innerHTML = "<a href= google.com>click</a>"

//elemento.value = "pega DOM"

// elemento.setAttribute('id', 'header')
// const headerId = document.querySelector('#header')
// console.log(headerId.value)
// headerId.innerText('ola mundo')


//ALTERANDO ESTILOS

//const elemento = document.querySelector('body')

//elemento.style.backgroundColor="red"


//NAVEGANDO PELOS ELEMENTOS

//const elemento = document.querySelector('header')

//console.log(elemento.parentElement)

//console.log(elemento.children)
//console.log(elemento.firstElementChild)
//console.log(elemento.lastElementChild)
//console.log(elemento.nextElementSibling)

//CRIANDO E ADICIONANDO ELEMENTOS

// const div = document.createElement('div')

// div.innerText="adicionando elemento"

// const body = document.querySelector('body')

// body.append(div)
// body.prepend(div)


//  EVENTOS

function click() {

    console.log("tste")
}

const input = document.querySelector('input')

// input.onkeyup = function(){
//     console.log('rodei')
// }
// input.addEventListener('mouseover', print)

input.onkeydown = function (event){
    console.log(event.key)
}


function clicou(){
    console.log("H1 foi clicado")
}
const h1 = document.querySelector('h1')

h1.onclick = clicou

