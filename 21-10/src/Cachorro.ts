export class Cachorro {
    private nome:string
    private raca:string
    private peso:number

    constructor(nome:string, raca:string, peso:number){
        this.nome = nome
        this.raca = raca
        this.peso = peso
    }

getNome():string {
    return this.nome
}

setNome(novoNome:string):void{
   if(novoNome.length < 3){
    console.log("O nome precisa ter pelo menos 3 caracteres!")
    return
   }
   
    this.nome = novoNome
}

getRaca():string{
    return this.raca
}

setRaca(novaRaca:string):void {
    this.raca = novaRaca
}

getPeso():number{
    return this.peso
}

setPeso(novoPeso:number):void{
    this.peso = novoPeso
}
}