"use strict";
// let meuNome: string = "Laura"
// let minhaIdade: number = 17
// let desligado: boolean = true
// function somar(a:number, b:number): number {
//     return a + b
// }
// console.log(somar(10,90))
// Array Em Type
// let compras:string[] = ["Pão", "Leite", "Manteiga"]
// let numeros:Array<number> = [1,2,3]
// Crie um array que conteám X notas
// depois, calcule a média dessas notas e mostre no terminal
// Lembrando: a média se calcula somando todos os números e dividindo o resultado pela quantidade de números
// Dica: Para somar o array, use um for
// for (let i:number = 0; < 5; i ++) {
//}
const notas = [10, 8, 4];
let somando = 0;
for (let i = 0; i < notas.length; i++) {
    somando += notas[i];
}
console.log("Soma das notas:" + somando);
const media = somando / notas.length;
console.log("Média das notas:" + media);
// Objetos em typescript
// atributos com '?' são opcoonais, o seja, eu posso ou não colocar valor para eles 
let person = {
    nome: "Laura",
    idade: 17
};
console.log(person.nome);
person.peso = 58;
// crie dois atributos representando pessoas (coloque nomes diferentes para os objetos)
// Estes objetos devem ter: nome, cidade, emprego, sendo que emprego deve ser um atributo opcional.
// Depois, faça um if que mostre duas frases diferentes:
// Se a pessoa tem um emprego, mostra "fulano da cidade tal está trabalhando".
// Se não, mostra "Fulano da cidade tal está desempregado"
let personagem = {
    nome: "Mario",
    cidade: "São Leopoldo",
    emprego: true
};
let personagem2 = {
    nome: "Luigi",
    cidade: "Sapucaía"
};
if (personagem.emprego) {
    console.log(`${personagem.nome} da cidade ${personagem.cidade} está trabalhando.`);
}
else {
    console.log(`${personagem.nome} da cidade ${personagem.cidade} não está trabalhando.`);
}
if (personagem2.emprego) {
    console.log(`${personagem2.nome} da cidade ${personagem2.cidade} está trabalhando.`);
}
else {
    console.log(`${personagem2.nome} da cidade ${personagem2.cidade} não está trabalhando.`);
}
