class Player {
    constructor(gameScreen, 
        positionLeft, 
        positionTop, 
        playerWidth, 
        playerHeight, 
        playerImageSrc){

        this.gameScree = gameScreen
        this.positionLeft = positionLeft,
        this.positionTop = positionTop,
        this.width = playerWidth 
        this.height = playerHeight
        this.directionX = 0
        this.directionY = 0
        this.element = document.createElement('img')
        this.element.src = playerImageSrc
        this.element.style.position = 'absolute'
        this.element.style.top = `${positionTop}px`
        this.element.style.left = `${positionLeft}px`
        this.element.style.left = `${playerWidth}px`
        this.element.style.height = `${playerHeight}px`

        // after creating the img element and setting properties make sure to append the image to the page
        gameScreen.appendChild(this.element)
    }

    move(){
        this.positionLeft += this.directionX
        this.positionTop += this.directionY 
        if(this.positionLeft < 40) {
            this.positionLeft = 40
        }
        if(this.positionTop < 0) {
            this.positionLeft = 0
        }
        if(this.positionTop + this.height > 640) {
            this.positionTop = 640 - this.height
        }
        this.updatePosition()
    }

    updatePosition(){
        this.element.style.top = `${this.positionTop}px`
        this.element.style.left = `${this.positionLeft}px`
    }

    didCollide(obstacle){
        const playerRect = this.element.getBoundingClientRect()
        const obstacleRect = obstacle.element.getBoundingClientRect()

        return !(
            playerRect.top > obstacleRect.bottom ||
            playerRect.bottom < obstacleRect.top ||
            playerRect.left > obstacleRect.right ||
            playerRect.right < obstacleRect.left
        );
    }
}
