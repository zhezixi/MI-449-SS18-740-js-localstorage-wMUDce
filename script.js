
var Daytheme = document.getElementById('day')
var Nighttheme = document.getElementById('night')
var quantity = parseInt(window.localStorage.getItem('quantity'))
var greeting = document.getElementById('greeting')

if (isNaN(quantity)) {
  quantity = 0
} else {
  quantity = quantity + 1
}
window.localStorage.setItem('quantity', quantity)
greeting.textContent = 'quantity: ' + quantity

function daythemechange () {  
}
