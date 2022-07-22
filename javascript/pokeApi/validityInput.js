import { resetarPokemons } from "./connectApi.js"
import { retornarPokemonInfo } from "./connectApi.js"

const pokemonNomes = document.querySelectorAll("[data-pokemon]")
const botao = document.querySelector("[data-botao]")

pokemonTimeLocalStorage()

botao.addEventListener("click", () => {
  let pokemons = []

  resetarPokemons();

  pokemonNomes.forEach(pokemon => {
    pokemons.push(pokemon.value)
    if (pokemon.value.length <= 0) return
    retornarPokemonInfo(pokemon.value.toLowerCase())
  })

  localStorage.setItem("pokemonNomes", JSON.stringify(pokemons))
  return
})

function pokemonTimeLocalStorage() {
  const buscarPokemons = localStorage.getItem("pokemonNomes")
  const pokemonsConvertidos = JSON.parse(buscarPokemons)

  if (pokemonsConvertidos === null) return 

  for (let i = 0; i < pokemonNomes.length; i++) {
    pokemonNomes[i].value = pokemonsConvertidos[i].toLowerCase()
    retornarPokemonInfo(pokemonsConvertidos[i].toLowerCase())
  }
}