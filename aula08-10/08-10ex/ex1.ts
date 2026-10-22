/* 
Primeiro, crie o package.json (npm init -y)
Depois, crie o script do npm start
"start": "npx tsc index.ts && node index.js"
Ai, instale a biblioteca com readline-sync e também os tipos 
npm i readline-sync
npm i @types/readline-sync
Verifique se os dois aparecem no package.json. Se não aparecerem, não foram instalados.
*/

/* 
Exercicio 1:
Crie uma função chamada 'somar' que pode dois números. Estes números devem ser passados 
pelo usuário através do readline-sync.
Mostre a soma destes dois números. Não esqueça de tipar o retorno corretamente.
*/

/* 
Exercicio 2:
Seu Zé (sim, ele de novo) também está no ramo do jogo do Bicho no mercadinho dele. Ele 
precisa agora de um sistema que identifique os números os animais a partir dos números 
que os clientes escolhem.

Para isso, você deve:
- Solicitar o nome do cliente;
- Solicitar um número de 1 a 20;
- Criar uma função chamada 'descobrirBicho' que recebe esse número
- Utilizando if, else if, e else, essa função identifica que animal a pessoa escolheu.
- A função retorna o nome do cliente, o número escolhido e o nome do animal escolhido, 
tudo numa fase só!
*/

/* Animais:
Avestruz: 01 a 04 | Águia 05 a 08 | Burro: 09 a 12 | Borboleta: 13 a 16 | Cachorro: 17 a 20
 */


// atividade 1

 import * as readline from 'readline-sync'

// let a: number = readline.questionInt("Digite um número:")
// let b: number = readline.questionInt("Digite outro número:")

// function somar(n1:number, n2:number):number {
//     return n1 + n2
// }
// console.log(somar (a, b))

// atividade 2

 let nome: string = readline.question("Digite o nome do cliente:")
 let numero: number = readline.questionInt("Escolha um número de 1 a 20:")

 function descobrirBicho(numero:number):string {
    if (numero > 0 && numero <= 4) {
        return "Ávestruz"
    } else if (numero >= 5  && numero <= 8) {
        return "Águia"
    } else if (numero >= 9 && numero <= 12) {
        return "Burro"
    } else if (numero >= 13 && numero <= 16) {
        return "Borboleta"
    } else if (numero >= 17 &&  numero <= 20) {
        return "Cachorro"
    } else {
        return "Número inválido"
    }
 }

 let bicho:string = descobrirBicho(numero)

 console.log(`${nome} escolheu o número ${numero} e o bicho escolhido foi ${bicho}.`)
 






