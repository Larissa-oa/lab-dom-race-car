window.onload = function () {
  const startButtonElement = document.getElementById("start-button");
  const restartButtonElement = document.getElementById("restart-button");
  let ourNewGame;

  // eventListeners
  startButtonElement.addEventListener("click", function () {
    ourNewGame = new Game()
    startGame(); 
  })

  restartButtonElement.addEventListener("click", () => {
    window.location.reload()
  })

  //keyboard eventListeners - because we need to know which key we press, not just like a click 
   window.addEventListener('keydown', (event) =>{
    if(event.code === "ArrowUp") {
      ourNewGame.player.directionY = -5
    } else if(event.code === "ArrowDown") {
      ourNewGame.player.directionY = 5
    } else if(event.code === "ArrowLeft") {
      ourNewGame.player.directionX = -5
    } else if(event.code === "ArrowRight") {
      ourNewGame.player.directionX = 5
    } 
   })
   window.addEventListener("keyup", (event2) => {
    if(event2.code === "ArrowUp") {
      ourNewGame.player.directionY = 0 
    } else if(event2.code === "ArrowDown") {
      ourNewGame.player.directionY = 0
    } else if(event2.code === "ArrowLeft") {
      ourNewGame.player.directionX = 0
    } else if(event2.code === "ArrowRight") {
      ourNewGame.player.directionX = 0
    } 
    
   })

   

// all the functions 
  function startGame() {
    ourNewGame.start();
  }


};
