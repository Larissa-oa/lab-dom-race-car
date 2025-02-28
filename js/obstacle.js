class Obstacle {
        constructor(gameScreen){
            this.positionLeft = Math.floor(Math.random() * (gameScreen.offsetWidth - 200));
            this.positionTop = 0
            this.width = 200
            this.height = 190
            this.element = document.createElement('img')
            this.element.src = '../images/redCar.png'
            this.element.style.position = 'absolute'
            this.element.style.top = `${this.positionTop}px`
            this.element.style.left = `${this.positionLeft}px`
            this.element.style.height = `${this.height}px`

              gameScreen.appendChild(this.element)
        }

        move(){
            this.positionTop += 3
            this.updatedPosition()
        }
        updatedPosition(){
            this.element.style.top = `${this.positionTop}px`
        }
}
