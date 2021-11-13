export const listaPokemonMovimento = (nome) => {
  return fetch(`http://pokeapi.co/api/v2/pokemon/${nome}`)
  .then(resposta =>{
    return resposta.json()
    console.log(resposta)
  })
  .then(dados => {

    let arrayMovimento = []

    for(let i = 0; i < dados["moves"].length; i++){
      if(dados["moves"][i]["version_group_details"]["0"]["version_group"].name == "red-blue" &&
      dados["moves"][i]["version_group_details"]["0"]["move_learn_method"].name == "level-up")
      {
        arrayMovimento.push([dados["moves"][i]["move"]["name"],
        dados["moves"][i]["version_group_details"]["0"]["level_learned_at"]])
      }
    }
    retornarPokemonInfo(arrayMovimento, nome)
    removeComma();
  })
}

function retornarPokemonInfo(pokemonMoves,nome) {
  const pokemonInfo = document.createElement("div")
  pokemonInfo.classList.add("main-pokemonStatus")
  const elementoPai = document.querySelector("[data-pokemonInfo]")
  const conteudo =
  `<p class="main-pokemonName">${nome}</p>
  <img class="main-pokemonImage" src="../assets/imagem/pokedex/${nome}.png">
  <div class="main-pokemonMovesInfo">
    <p class="main-pokemonMoves">${pokemonMoves[0]}</p>
    <p class="main-pokemonMoves">${pokemonMoves[1]}</p>
    <p class="main-pokemonMoves">${pokemonMoves[2]}</p>
    <p class="main-pokemonMoves">${pokemonMoves[3]}</p>
    <p class="main-pokemonMoves">${pokemonMoves[4]}</p>
    <p class="main-pokemonMoves">${pokemonMoves[5]}</p>
    <p class="main-pokemonMoves">${pokemonMoves[6]}</p>
    <p class="main-pokemonMoves">${pokemonMoves[7]}</p>
  </div>
  `
  pokemonInfo.innerHTML = conteudo
  elementoPai.appendChild(pokemonInfo)
}

function removeComma(pokemonMoves){
  const pokemonsMoves = document.querySelectorAll(".main-pokemonMoves")
  pokemonsMoves.forEach(moveName => {
    if(moveName.innerHTML == "undefined"){
      moveName.style.display = "none"
    } else {
      const moveNameSemComma = moveName.innerHTML.replace(',', ' ')
      moveName.innerHTML = moveNameSemComma
    }
  })
}

export function resetarPokemons(){
  const removerPokemons = document.querySelectorAll(".main-pokemonStatus")
  removerPokemons.forEach(pokemon => {
    pokemon.remove()
  })
}
