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

import { Poder } from "./Poder";
import { Pokemon } from "./Pokemon";

const poder:Poder = new Poder("Bola de fogo", 50)
const poder2:Poder = new Poder("Raio", 30)

const pok:Pokemon = new Pokemon("Charizard", 100, 200, poder)
const pok2:Pokemon = new Pokemon("Pikachu", 80, 150, poder2)

pok.falar()
pok.atacar(pok2)
// console.log(pok2.vida)

// ENCAPSULAMENTO

// Encapsulamento é o ato de proteger os dados dos nossos objetos (tanto os atributos quanto os métodos) e controlar como podem ser acessados ou modificados.

// Ex: usando encapsulamento, podemos impedir que alguém deixe a vida do pokémon negativa.

// Para utilizar encapsulamento nas nossas classes, precisamos colocar certas palavras antes dos métodos. São elas:
/*

   - public (que significa "publico")
   - private (que significa "privado")
   - protected (que significa "protegido")

Chamamos estes 3 de modificadosres de acesso. O "public" permite que o atributo ou método seja acessado e modificado em qualquer arquivo do meu projeto DIRETAMENTE.
Exemplo:

Na classe -> public vida:number
No index: -> pokemon.vida = -999

O "private" NÃO permite que o atributo ou método seja acessado ou modificado de qualquer jeito. Para poder fazer isso, precisamos chamar os métodos da classe.
*/