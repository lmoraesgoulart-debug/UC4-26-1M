"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
class Pokemon {
    nome;
    vida;
    ataque;
    poder;
    constructor(nome, vida, ataque, poder) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.poder = poder;
    }
    falar() {
        console.log(`${this.nome}`.repeat(3));
    }
    curar() {
        this.vida += 10;
        if (this.vida > 100) {
            this.vida = 100;
        }
    }
    perderVida(dano) {
        this.vida -= dano;
        if (this.vida < 0) {
            this.vida = 0;
        }
    }
    atacarOutroPokemon(pok) {
        pok.vida -= this.poder.ataque;
        if (pok.vida < 0) {
            pok.vida = 0;
        }
        console.log(`O personagem ${pok.nome} foi atacado com o(a) ${this.poder} por ${this.nome}.
        \n Vida de ${pok.nome}: ${pok.vida}`);
    }
}
exports.Pokemon = Pokemon;
