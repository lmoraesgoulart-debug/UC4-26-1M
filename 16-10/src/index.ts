// import { Personagem } from "./Personagem";

import { Arma } from "./Arma"
import { Personagem } from "./Personagem"


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

const arma:Arma = new Arma("Espada", 50)
const arma1:Arma = new Arma("Arco e Flecha", 40)
const arma2:Arma = new Arma("Machado", 20)
const arma3:Arma = new Arma("Tocha", 60)

const per: Personagem = new Personagem("Evie Sage", 7, arma)
const per1: Personagem = new Personagem("Trystan Maverine", 6, arma1)
const per2: Personagem = new Personagem("Reinaldo", 5, arma2)
const per3: Personagem = new Personagem("Rei Benedict", 5, arma3)

// string é um tipo. Logo, podemos criar um array deste tipo
const nomes:string[] = ["Laura", "Theo", "Lorenzo", "Vicente"]
// number é um tipo.Logo, também podemos criar um array deste tipo
const numeros:number[] = [1, 2, 3]
// Se "Personagem" também é um tipo, não podemos criar um array de Personagem?
const personagens:Personagem[] = [per, per1, per2, per3]

per.curarOutroPersonagem(per2)
per.atacarOutroPersonagem(per3)