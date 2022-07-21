var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

let span = document.getElementById('currentNumber')

function increment() {
  currentNumber = currentNumber + 1
  currentNumberWrapper.innerHTML = currentNumber
  if (currentNumber > 0) {
    changeColors('secondColor', 'firstColor')
  } else if (currentNumber == 0) {
    currentNumberWrapper.classList.remove('firstColor')
  }
}

function decrement() {
  currentNumber = currentNumber - 1
  currentNumberWrapper.innerHTML = currentNumber
  if (currentNumber < 0) {
    changeColors('firstColor', 'secondColor')
  } else if (currentNumber == 0) {
    currentNumberWrapper.classList.remove('secondColor')
  }
}

function changeColors(color, removeColor) {
  currentNumberWrapper.classList.add(color)
  currentNumberWrapper.classList.remove(removeColor)
}
