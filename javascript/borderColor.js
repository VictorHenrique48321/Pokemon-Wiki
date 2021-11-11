const pokemonType = document.querySelectorAll("[data-type]")
const tipos = [
  "Grass","#78C850",
  "Fire","#F08030",
  "Water" ,"#0096c7",
  "Flying" , "#5a8af3",
  "Eletric","#f1a601",
  "Poison","#A040A0",
  "Normal" ,"#A8A878",
  "Ice" , "#4cc9f0",
  "Psychic","#F85888",
  "Ground","#E0C068",
  "Ghost" ,"#705898",
  "Fighting" , "#C03028",
  "Dragon","#7038F8",
  "Bug" ,"#A8B820",
  "Rock" , "#B8A038",
]

for(let i = 0; i < pokemonType.length; i++){
  if(tipos.includes(pokemonType[i].innerHTML)){
    const positionColor = tipos.indexOf(pokemonType[i].innerHTML)
    const borda = pokemonType[i].parentElement
    pokemonType[i].style.color = tipos[positionColor+1]
    borda.style.border = "4px solid"
    borda.style.borderColor = tipos[positionColor+1]
  }
}
