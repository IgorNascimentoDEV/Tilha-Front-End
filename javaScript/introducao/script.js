//JavaScript é Case sensitive

//listas//
const listaDeDestinos = new Array(
    `Salvador`,
    `pernanbuco`,
    `bahia`
);


listaDeDestinos.push(`Recife`); //Metodo para inseris intens em uma lista

console.log(listaDeDestinos);

//listaDeDestinos.splice(2,1);  Metodo para apagar intens de uma lista como parametro passa a posição e quantos intes é pra apagar

console.log(listaDeDestinos);   



//debbuger
let contador = 0;
while(contador < listaDeDestinos.length){
    console.log(listaDeDestinos[contador]);
    contador += 1;
}