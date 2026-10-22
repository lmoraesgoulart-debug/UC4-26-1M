import { Poder } from "./Poder"

export class Pokemon{
    nome:string
    private vida:number 
    ataque:number 
    poder:Poder

constructor(nome:string, vida:number, ataque:number, poder:Poder){
    this.nome = nome
    this.vida = vida
    this.ataque = ataque
    this.poder = poder
}

falar(){
    console.log(`${this.nome}` .repeat(3))
}

atacar(pok:Pokemon): void{
    pok.vida -= this.poder.ataque
    if(pok.vida < 0){
        pok.vida = 0
    }

    console.log(` ${pok.nome} foi atacado por ${this.nome} e perdeu ${this.atacar} de vida.`)
}

atacarComPoder(pok:Pokemon):void{
    pok.vida -= this.poder.ataque
    if(pok.vida < 0){
        pok.vida
    }

    console.log(`${pok.nome} foi atacado por ${this.nome} usando ${this.poder.nome} e perdeu ${this.poder.ataque} de vida`)
}

verificarVida(pok:Pokemon):void{
    if(pok.vida < 0){
        pok.vida = 0
    }

    if(pok.vida > 100){
        pok.vida = 100
    }
}

}