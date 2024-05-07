const grid = document.querySelector('.grid')
const chicken = document.querySelector('.chicken')
const scoreElement = document.getElementById('score')
const timeLeftElement = document.getElementById('time-left')
const gameOverElement = document.querySelector('.game-over')
const gameOverText = document.getElementById('game-over-text')
const buttons = document.querySelectorAll('button')

let chickenPosition
let movementSpeed
let countDownTimer
let speed

let score = 0
let time = 60

for (let i = 0; i < 9; i++) {
  const div = document.createElement('div')
  grid.append(div)
  div.setAttribute('id', i)
  div.setAttribute('class', 'square')
}
const squares = document.querySelectorAll('.square')

function randomPosition() {
  squares.forEach((square) => {
    square.classList.remove('chicken')
  })
  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('chicken')

  chickenPosition = randomSquare.id
}

// starts the game when clicked on the buttons, each button sets another speed how fast the chicken will switch the position
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.id === 'easy') {
      speed = 1000
    } else if (button.id === 'medium') {
      speed = 750
    } else {
      speed = 500
    }
    moveChicken(speed)
    countDownTimer = setInterval(countDown, 1000)
  })
})

squares.forEach((square) => {
  square.addEventListener('click', () => {
    if (square.id == chickenPosition) {
      score++
      scoreElement.innerText = score
      chickenPosition = null
      square.classList.remove('chicken')
    }
  })
})

function moveChicken(speed) {
  movementSpeed = setInterval(randomPosition, speed)
}

function countDown() {
  time--
  timeLeftElement.innerText = time

  if (time == 0) {
    gameOverText.innerText = `Your score is ${score}`
    gameOverElement.classList.remove('hidden')
    clearInterval(countDownTimer)
    clearInterval(movementSpeed)
  }
}
