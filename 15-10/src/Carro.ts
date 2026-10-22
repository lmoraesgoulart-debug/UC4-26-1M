/*
 Crie a classe Carro
 Siga as instruções para criá-la
 usando de exemplo a classe Cachorro.

 O carro deve ter:
 marca, tipo, ano

 O que o carro faz:
 - Ele anda
 - ele buzina

 Depois de criar a classe, crie 3 carros diferentes no 'index.ts', chame seus atributos em console.log e chame seus métodos.

 */

 export class Carro {
    marca:string
    tipo:string
    ano:number

    constructor(minhaMarca:string, meuTipo:string, meuAno:number){
          this.marca = minhaMarca
          this.tipo = meuTipo
          this.ano = meuAno
     }

     andar():void {
        console.log(`${this.marca}: vrum vrum!`)
     }

     buzinar():void {
        console.log(`${this.marca}: bi bi!`)
     }

 }