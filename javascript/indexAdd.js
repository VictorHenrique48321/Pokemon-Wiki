const index = document.querySelectorAll(".main-pokemonIndex")
const indexUnidade = "#00"
const indexDezena = "#0"
const indexCentena = "#"

for(let i = 1; i < index.length; i++){
  if(i > 10 && i < 100){
    index[i].innerHTML = indexDezena.concat(i+1)
  } else {
    index[i].innerHTML = indexCentena.concat(i+1)
  }
  index[0].innerHTML = indexUnidade.concat(1)
  index[99].innerHTML = indexCentena.concat(100)
}
