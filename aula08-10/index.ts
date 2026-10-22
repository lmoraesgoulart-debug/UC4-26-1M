// importações em Typescript são parecidas com este comando 
// Estamos dizendo:
// importe TUDO (por isso o asterisco) com o nome de 'readline'
// (ele jã cria um objeto com ess nome)
// da biblioteca 'readline-sync'

import * as readline from 'readline-sync'

let nome:string = readline.question("Qual é o seu nome?")
let idade:number = readline.questionInt("Qual sua idade?")

function saudacao1(meuNome:string, minhaIdade:number):string {
    return `Olá ${meuNome}! Você tem ${minhaIdade} anos!`
}
console.log(saudacao1 (nome, idade))

// Esta função tem return
// Ela retorna uma string
function frase():string{
    return 'Olá pessoal!'
}

// Esta função também tem return
// Ela retorna um number
function somar (): number{
    return 1+2
}

// Esta função NÃO TEM return
// Ela retorna void
function saudacao():void{
    console.log("Olá galera!")
}

