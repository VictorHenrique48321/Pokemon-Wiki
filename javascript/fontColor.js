const typeFont = document.querySelectorAll("[data-fontColor]")

const tiposCor = [
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

for(let i = 0; i < typeFont.length; i++){
  if(tiposCor.includes(typeFont[i].innerHTML)){
    const positionColor = tiposCor.indexOf(typeFont[i].innerHTML)
    typeFont[i].style.backgroundColor = tiposCor[positionColor+1]
  }
}
