const listaPokemonMovimento = async (nome) => {
  const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
  const dados = await resposta.json()
  let arrayMovimento = []
  for (let i = 0; i < dados["moves"].length; i++) {
    if (dados["moves"][i]["version_group_details"]["0"]["version_group"].name == "red-blue" &&
      dados["moves"][i]["version_group_details"]["0"]["move_learn_method"].name == "level-up") {
      arrayMovimento.push([dados["moves"][i]["move"]["name"],
      dados["moves"][i]["version_group_details"]["0"]["level_learned_at"]])
    }
  }
  return arrayMovimento
}

const infoMovePokemon = async (moveName) => {
  const resposta = await fetch(`https://pokeapi.co/api/v2/move/${moveName}`)
  const dados = await resposta.json()

  let movesInfo = []

  if (typeof dados["power"] === "object") {
    movesInfo.push(0, dados["type"]["name"])
  } else {
    movesInfo.push(dados["power"], dados["type"]["name"])
  }

  return movesInfo
}

export async function retornarPokemonInfo(pokemonName) {

  const pokemonInfo = document.createElement("div")
  const pokemonContainer = document.createElement("table")
  const elementoPai = document.querySelector("[data-pokemonInfo]")

  const pokemonMoves = await listaPokemonMovimento(pokemonName)

  let conteudo = `<p class="main-pokemonName">${pokemonName}</p>
  <img class="main-pokemonImage" src="../assets/imagem/pokedex/${pokemonName}.png">
  `

  let informacoes = `
  <tr>
    <th class="main-tableInfo table-header">Level</th>
    <th class="main-tableInfo table-header">Move</th>
    <th class="main-tableInfo table-header">Type</th>
    <th class="main-tableInfo table-header">Power</th>
  </tr>`

  for (let index = 0; index < pokemonMoves.length; index++) {
    const moveName = pokemonMoves[index][0]
    const moveInfo = await infoMovePokemon(moveName)
    
    informacoes = informacoes + `
    <tr>
      <th class="main-tableInfo">${pokemonMoves[index][1]}</th>
      <th class="main-tableInfo">${pokemonMoves[index][0]}</th>
      <th class="main-tableInfo">${moveInfo[1]}</th>
      <th class="main-tableInfo">${moveInfo[0]}</th>
    </tr>
    `
  }

  pokemonInfo.classList.add("main-pokemonStatus")
  pokemonContainer.classList.add("main-table")

  pokemonInfo.innerHTML = conteudo
  pokemonContainer.innerHTML = informacoes

  pokemonInfo.appendChild(pokemonContainer)
  elementoPai.appendChild(pokemonInfo)
}

export function resetarPokemons(){
  const removerPokemons = document.querySelectorAll(".main-pokemonStatus")
  removerPokemons.forEach(pokemon => {
    pokemon.remove()
  })
}
