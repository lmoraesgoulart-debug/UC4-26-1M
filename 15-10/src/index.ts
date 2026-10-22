// como exportamos a classe, nós agora podemos importá-la

import { Carro } from "./Carro";

// import { Cachorro } from "./Cachorro"

// Para criar um objeto, criamos uma variável que dve ser do tipo da classe (Cachorro)
// depois, usamos a palavra 'new' para criar um novo  Cachorro
// dentro dos parênteses, precisamos colocar todas as informações que o constructor pede 

// const meuCachorro:Cachorro = new Cachorro("Bruce", 35.00, "Pitmonster")
// const outroCachorro:Cachorro = new Cachorro("Rex", 20.00, "Pitbull")

// Agora, podemos acessar as informaçóes do cachorro. Por exemplo, para ver o nome:

// console.log(meuCachorro.nome)
// console.log(outroCachorro.nome)
// console.log(meuCachorro.raca)
// console.log(outroCachorro.raca)

// posso também chamar os métodos para ver o que o chachorro faz:
// meuCachorro.latir()

const meuCarro:Carro = new Carro("Fiat", "Hatch", 2015)
const outroCarro:Carro = new Carro("Chevrolet", "Sedan", 2018)
const aqueleCarro:Carro = new Carro("Volkswagen", "SUV", 2020)
const triCarro:Carro = new Carro("Ford", "Picape", 2017)

console.log(meuCarro.marca)
console.log(meuCarro.tipo)
console.log(meuCarro.ano)
console.log(outroCarro.marca)
console.log(outroCarro.tipo)
console.log(outroCarro.ano)
console.log(aqueleCarro.marca)
console.log(aqueleCarro.tipo)
console.log(aqueleCarro.ano)
console.log(triCarro.marca)
console.log(triCarro.tipo)
console.log(triCarro.ano)

meuCarro.andar()
meuCarro.buzinar()
outroCarro.andar()
outroCarro.buzinar()
aqueleCarro.andar()
aqueleCarro.buzinar()
triCarro.andar()
triCarro.buzinar()




