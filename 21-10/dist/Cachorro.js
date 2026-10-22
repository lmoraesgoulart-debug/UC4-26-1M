"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
class Cachorro {
    nome;
    raca;
    peso;
    constructor(nome, raca, peso) {
        this.nome = nome;
        this.raca = raca;
        this.peso = peso;
    }
    getNome() {
        return this.nome;
    }
    setNome(novoNome) {
        if (novoNome.length < 3) {
            console.log("O nome precisa ter pelo menos 3 caracteres!");
            return;
        }
        this.nome = novoNome;
    }
    getRaca() {
        return this.raca;
    }
    setRaca(novaRaca) {
        this.raca = novaRaca;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(novoPeso) {
        this.peso = novoPeso;
    }
}
exports.Cachorro = Cachorro;
