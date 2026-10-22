const frutas = ['Pitaya', 'Kiwi', 'Conde']

// outra forma de fazer:
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

console.log("-----------------------")

for (const fruta in frutas) {
    console.log(`${fruta} = ${frutas[fruta]}`)
}
// for... in pra saber o indice dos valores (número)

console.log("-----------------------")

function saudacao(nome) {
    console.log(`Olá ${nome}, seja bem-vinda!`)
}
saudacao('Laura')

console.log("-----------------------")

function soma(a, b) {
    return a + b
}

let media = soma(10, 5) / 2

console.log(media)

console.log("-----------------------")

let nome = 'Laura'

function alteraNome(nomeNovo) {
    nome = nomeNovo
}

console.log(nome)
alteraNome('Rodorlfo')

console.log(nome)

console.log("-----------------------")

const pratos = ['de plástico', 'de vidro', 'de cerãmica', 'de ferro']

pratos.forEach((item) => console.log(item))




