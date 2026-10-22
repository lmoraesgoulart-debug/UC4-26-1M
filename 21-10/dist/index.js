"use strict";
// Criem uma classe Personagem que tenha:
// nome
// vida
// dinheiro
Object.defineProperty(exports, "__esModule", { value: true });
const Cachorro_1 = require("./Cachorro");
//import { Personagem } from "./Personagem";
// coloque todos os atributos como "private"
// crie um método que mostra a vida (exemplo:mostrarVida())
// crie um método que modifica a vida (exemplo: mudarVida(vida:number))
// const personagem:Personagem = new Personagem("Evie Sage", 100, 10)
// console.log(personagem.mostrarVida())
// personagem.mudarVida(200)
// console.log(personagem.mostrarVida())
// console.log(personagem.getVida()) // 100
// personagem.setVida(50)
// console.log(personagem.getVida()) // 50
// Crie uma classe chamada Cachorro 
// coloque atributos no cachorro
// coloque os atributos "private"
// crie o constructor
// crie os métodos "getters" e os "setters"
// crie 3 cachorros no index e chame seus métodos
const cachorro = new Cachorro_1.Cachorro("Bruce", "Pitmonster", 35);
const cachorro2 = new Cachorro_1.Cachorro("Cookie", "Vira-lata", 20);
const cachorro3 = new Cachorro_1.Cachorro("Pitoco", "Dachshund", 17);
cachorro.setPeso(50);
console.log(cachorro.getPeso());
cachorro2.setNome("LaLa");
console.log(cachorro2.getNome());
cachorro3.setRaca("Pitbull");
console.log(cachorro3.getRaca());
