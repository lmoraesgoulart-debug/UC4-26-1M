"use strict";
/*
   1) Crie uma pasta chamada Pokemon.
   O pokemon deve ter um nome(string), vida(number), ataque(number), e um poder.
   O poder é uma classe que vamos criar também.

   Métodos do Pokemon:
   falar -> um método que repete o nome do pokémon algumas vezes

   atacar -> um método que recebe outro pokemon e ataca ele, tirando vida dele.

   atacarComPoder -> um método que recebe outro pokemon e ataca ele também, porém diz o nome do poder e usa o atacar do poder.

   2) Crie uma classe chamada Poder. Ela deve ter um nome(string) e ataque(number). Não precisa de nenhum método, esceto o constructor.

   3) Crie dois poderes e dois pokémons no index e simule uma pequena batalha entre eles.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Poder_1 = require("./Poder");
const Pokemon_1 = require("./Pokemon");
const poder = new Poder_1.Poder("Bola de fogo", 50);
const poder2 = new Poder_1.Poder("Raio", 30);
const pok = new Pokemon_1.Pokemon("Charizard", 100, 200, poder);
const pok2 = new Pokemon_1.Pokemon("Pikachu", 80, 150, poder2);
pok.atacarOutroPokemon(pok2);
