const buttonSearch = document.querySelector("[data-button]")
const pokemonTypes = document.querySelectorAll(".main-pokemonType")
const pokemonNames = document.querySelectorAll(".main-pokemonName")

document.addEventListener("keyup", () =>{
  removerClass()
  const searchType = document.querySelector("[data-pokemonType]").value
  const searchName = document.querySelector("[data-searchBar]").value

  if(searchName.length <= 0 && searchType.length <= 0){
    return
  }

  const searchedName = searchName.toLowerCase()
  const regex = new RegExp(""+searchedName+"");

  pokemonNames.forEach(pokemonName => {
    const nameLowerCase = pokemonName.innerHTML.toLowerCase()
    if(nameLowerCase.match(regex)){
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
  console.log("ola")
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
