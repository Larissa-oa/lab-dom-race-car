// FIRST THING TO BE DONE. the class works as a timeframe for the objects that are going to be created 
class Game {
    constructor() {
        this.startScreen = document.getElementById('game-intro')
        this.gameScreen = document.getElementById('game-screen')
        this.gameOverScreen = document.getElementById('game-end')
        this.scoreElement = document.getElementById('score')
        this.livesElement = document.getElementById('lives')
        this.player = new Player(
            this.gameScreen, 
            70, 
            400, 
            125, 
            180, 
            "../images/car.png"
        )
        this.height = 600 
        this.width = 500 
        this.obstacles = [new Obstacle(this.gameScreen)]
        this.score = 0
        this.lives = 3 
        this.gameIsOver =  false 
        this.gameIntervalId = null 
        this.gameLoopFrequency = Math.round(1000/60) //regards the recursive function. The movements of the game. 
        this.counter = 0;
    }


//SECOND THING TO BE DONE. 
start() {
this.gameScreen.style.height = `${this.height}px`
this.gameScreen.style.width = `${this.width}px`
// hide the start screen
this.startScreen.style.display = 'none'
this.gameScreen.style.display = 'block'

this.gameIntervalId = setInterval(()=>{
    this.gameLoop()
}, this.gameLoopFrequency)
}

gameLoop() {
    console.log("game loop")
    this.update()

    //inside the game loop we check if the game is over
    if(this.gameIsOver) {
        clearInterval(this.gameIntervalId)
        this.gameOver()
    }
        if(this.counter % 160 === 0){
            this.obstacles.push(new Obstacle(this.gameScreen))
        }
    this.counter++
}

update(){
    this.player.move()
    //this moves all of the obstacles inside the this.obstacles array 
    // we use the for loop here because we have to state i--. I do it to put the elements in the array back in order. 
    for(let i = 0; i < this.obstacles.length; i++){
        const currentObstacle = this.obstacles[i]
        currentObstacle.move()
        //now I have to check if the red car passes the blue 
        // then first we have to get a point 
        //then we cute the red car out of the array 
        if(this.player.didCollide(currentObstacle)) {
            this.obstacles.splice(i, 1)
            i--
            currentObstacle.element.remove()
            this.lives--
            this.livesElement.innerText = this.lives;

            if(this.lives === 0) {
                this.gameIsOver = true 
            }
        }

        if(currentObstacle.positionTop > 600) {
            this.score++
            this.obstacles.splice(i, 1)
            i-- 
            currentObstacle.element.remove()
            this.scoreElement.innerText = this.score
        }
    }
}

gameOver() {
    //we have to hide the game screen
    this.gameScreen.style.display = "none"
    //show the gameOver screen 
    this.gameOverScreen.style.display = "block"
}


}