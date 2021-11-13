import {listaPokemonMovimento} from "./connectApi.js"
import {resetarPokemons} from "./connectApi.js"

const pokemonNomes = document.querySelectorAll("[data-pokemon]")
const botao = document.querySelector("[data-botao]")

pokemoTimeLocalStorage()

botao.addEventListener("click",(evento) => {
  resetarPokemons();
  const array = []
  pokemonNomes.forEach(pokemon => {
    const nome = pokemon.value
    array.push(nome)
    if(nome.length <= 0){
      console.log("nome invalido")
    } else {
      listaPokemonMovimento(nome.toLowerCase())
      const pokemonsGuardados = localStorage.setItem("PokemonTime", JSON.stringify(array))
    }
  })
})

function pokemoTimeLocalStorage() {
  const buscarPokemons = localStorage.getItem("PokemonTime")
  const pokemonsConvertidos = JSON.parse(buscarPokemons)

  for(let i = 0; i < pokemonNomes.length; i++){
    pokemonNomes[i].value = pokemonsConvertidos[i].toLowerCase()
    listaPokemonMovimento(pokemonsConvertidos[i].toLowerCase())
  }
}
