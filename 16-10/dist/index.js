"use strict";
// import { Personagem } from "./Personagem";
Object.defineProperty(exports, "__esModule", { value: true });
const Arma_1 = require("./Arma");
const Personagem_1 = require("./Personagem");
// const personagem:Personagem = new Personagem("Xablau", 25)
// console.log(personagem.vida) // 50
// personagem.curar()
// console.log(personagem.vida) // 60
// personagem.perderVida(15)
// console.log(personagem.vida)
// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()
// console.log(personagem.vida)
const arma = new Arma_1.Arma("Espada", 50);
const arma1 = new Arma_1.Arma("Arco e Flecha", 40);
const arma2 = new Arma_1.Arma("Machado", 20);
const arma3 = new Arma_1.Arma("Tocha", 60);
const per = new Personagem_1.Personagem("Evie Sage", 7, arma);
const per1 = new Personagem_1.Personagem("Trystan Maverine", 6, arma1);
const per2 = new Personagem_1.Personagem("Reinaldo", 5, arma2);
const per3 = new Personagem_1.Personagem("Rei Benedict", 5, arma3);
// string é um tipo. Logo, podemos criar um array deste tipo
const nomes = ["Laura", "Theo", "Lorenzo", "Vicente"];
// number é um tipo.Logo, também podemos criar um array deste tipo
const numeros = [1, 2, 3];
// Se "Personagem" também é um tipo, não podemos criar um array de Personagem?
const personagens = [per, per1, per2, per3];
per.curarOutroPersonagem(per2);
per.atacarOutroPersonagem(per3);
