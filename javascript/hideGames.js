const gameVersions = document.querySelectorAll("[data-versions]")

gameVersions.forEach(version => {
  version.addEventListener("click", (evento) => {
    const versionName = version.getAttribute("data-type")
    const games = document.querySelectorAll("[data-games]")
    games.forEach(game => {
      if(game.getAttribute("data-type") == versionName){
        game.classList.remove("hideGame")
      } else {
        game.classList.add("hideGame")
      }
    })
  })
})
