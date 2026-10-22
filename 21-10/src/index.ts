// Criem uma classe Personagem que tenha:
// nome
// vida
// dinheiro

import { Cachorro } from "./Cachorro";
import { Personagem } from "./Personagem";

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

const cachorro:Cachorro = new Cachorro("Bruce", "Pitmonster", 35)
const cachorro2:Cachorro = new Cachorro("Cookie", "Vira-lata", 20)
const cachorro3:Cachorro = new Cachorro("Pitoco", "Dachshund", 17)

cachorro.setPeso(50)
console.log(cachorro.getPeso())

cachorro2.setNome("LaLa")
console.log(cachorro2.getNome())

cachorro3.setRaca("Pitbull")
console.log(cachorro3.getRaca())
