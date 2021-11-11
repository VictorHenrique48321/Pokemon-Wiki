const typeFont = document.querySelectorAll("[data-fontColor]")

for(let i = 0; i < typeFont.length; i++){
  if(tipos.includes(typeFont[i].innerHTML)){
    const positionColor = tipos.indexOf(typeFont[i].innerHTML)
    typeFont[i].style.backgroundColor = tipos[positionColor+1]
  }
}
