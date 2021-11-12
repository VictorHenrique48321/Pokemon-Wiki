const buttonSearch = document.querySelector("[data-button]")

buttonSearch.addEventListener("click", (evento) =>{
  removerClass()
  const searchType = document.querySelector("[data-pokemonType]").value
  const searchName = document.querySelector("[data-searchBar]").value

  const pokemonTypes = document.querySelectorAll(".main-pokemonType")
  const pokemonNames = document.querySelectorAll(".main-pokemonName")

  if(searchName.length <= 0 && searchType.length <= 0){
    return
  }

  const searchedName = searchName.toLowerCase()

  pokemonNames.forEach(pokemonName => {
    const nameLowerCase = pokemonName.innerHTML.toLowerCase()
    if(searchedName == nameLowerCase){
      const parent = pokemonName.parentElement.parentElement
      parent.style.order = "-2"
    } else {
      const parent = pokemonName.parentElement.parentElement
      parent.classList.add("esconderPokemons")
    }
  })
  checkPokemonType(searchType,pokemonTypes)
})

function removerClass(){
  const allPokemons = document.querySelectorAll(".main-pokemon")

  allPokemons.forEach(pokemon => {
    if(pokemon.classList == "main-pokemon esconderPokemons"){
      pokemon.classList.remove("esconderPokemons")
    }
    pokemon.style.order = "0"
  })
}

function checkPokemonType(searchType,pokemonTypes){
  for(let i = 0; i < pokemonTypes.length; i++){
    if(searchType == pokemonTypes[i].innerHTML){
      const parent = pokemonTypes[i].parentElement.parentElement.parentElement
      parent.classList.remove("esconderPokemons")
      parent.style.order = "-1"
    }
  }
}
