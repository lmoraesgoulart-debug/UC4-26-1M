// Classes sempre começam com letra maiúscula
// export significa 'exportar', ou seja, outros arquivos podem 'importar' esta classe e usar ela
// depois, usamos a palavra 'class' para indicar que estamos criando uma classe
// depois, colocamos o exato mesmo nome que demos para arquivo
export class Pessoa {
    // atributos
    // o que uma pessoa tem
    nome:string
    email:string
    senha:string
    // Método construtor (quando uma função está dentro de uma classe, chamamos de metodo)
    // ele serve para criar o objeto Pessoa
    constructor(meuNome:string, meuEmail:string, minhaSenha:string) {
        this.nome = meuNome
        this.email = meuEmail
        this.senha = minhaSenha
    }

    andar():void{
        console.log(`${this.nome} está andando`)
    }
}


let usuario:Pessoa = new Pessoa("Laura", "laura@diva", "123")
let usuario2:Pessoa = new Pessoa("Theo", "theo@diva", "222")

console.log(usuario.nome)

usuario.andar()
usuario2.andar()