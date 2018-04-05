var currentTheme = window.localStorage.getItem('theme')
function themechange() {
  if (currentTheme === 'day') {
    document.body.setAttribute('class', 'night')
    currentTheme = 'night'
    window.localStorage.setItem('theme', currentTheme)
  } else {
    document.body.setAttribute('class', 'day')
    currentTheme = 'day'
    window.localstorage.setItem('theme', currentTheme)
  }
}

var press = document.getElementById('time')
if (press) {
  press.addEventListener('click', themechange)
}


var quantity = parseInt(window.localStorage.getItem('quantity'))
var greeting = document.getElementById('greeting')

if (isNaN(quantity)) {
  quantity = 0
} else {
  quantity = quantity + 1
}
window.localStorage.setItem('quantity', quantity)
greeting.textContent = 'You have visited this site ' + quantity + ' times:)'
