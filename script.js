var current = document.getElementById('timeTheme')
var setTheme = window.localStorage.getItem('theme') || 'day'
function daythemechange () {
  if (current.className === 'day') {
    current.setAttribute('class', 'night')
    setTheme = 'night'
    window.localStorage.setItem('theme', setTheme)
  } else {
    current.setAttribute('class', 'day')
    setTheme = 'day'
    window.localstorage.setItem('theme', setTheme)
  }
}

window.onload = function () {
  document.getElementById('button').addEventListener('click', daythemechange)
  current.setAttribute('class', setTheme)
}

window.localStorage.setItem('theme', setTheme)

var quantity = parseInt(window.localStorage.getItem('quantity'))
var greeting = document.getElementById('greeting')

if (isNaN(quantity)) {
  quantity = 0
} else {
  quantity = quantity + 1
}
window.localStorage.setItem('quantity', quantity)
greeting.textContent = 'You have visited this site ' + quantity + ' times:)'
