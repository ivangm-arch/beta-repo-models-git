// src/example.js - CÓDIGO CON BUGS PARA EL TALLER
function divide(a, b) {
  return a / b; // BUG: no valida división por cero
}

function discount(price, percentage) {
  if (percentage > 100) {
    percentage = 100; // BUG: muta parámetro
  }
  return price - (price * percentage / 100); // BUG: no valida negativos
}