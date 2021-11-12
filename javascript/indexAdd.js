const index = document.querySelectorAll(".main-pokemonIndex")
const indexUnidade = "#00"
const indexDezena = "#0"
const indexCentena = "#"

for(let i = 1; i < index.length; i++){
  if(i >= 10){
    index[i].innerHTML = indexDezena.concat(i)
  }
  index[0].innerHTML = indexUnidade.concat(1)
  index[i].innerHTML = indexUnidade.concat(i+1)
}
