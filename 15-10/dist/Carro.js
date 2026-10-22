"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    marca;
    tipo;
    ano;
    constructor(minhaMarca, meuTipo, meuAno) {
        this.marca = minhaMarca;
        this.tipo = meuTipo;
        this.ano = meuAno;
    }
    andar() {
        console.log(`${this.marca}: vrum vrum!`);
    }
    buzinar() {
        console.log(`${this.marca}: bi bi!`);
    }
}
exports.Carro = Carro;
//# sourceMappingURL=Carro.js.map