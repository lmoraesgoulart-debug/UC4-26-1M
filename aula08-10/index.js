// importações em Typescript são parecidas com este comando 
// Estamos dizendo:
// importe TUDO (por isso o asterisco) com o nome de 'readline'
// (ele jã cria um objeto com ess nome)
// da biblioteca 'readline-sync'
import * as readline from 'readline-sync';
let nome = readline.question("Qual é o seu nome?");
let idade = readline.questionInt("Qual sua idade?");
console.log(`Olá ${nome}! Você tem ${idade} anos.`);
