// src/example.js - CODIGO CON BUGS PARA EL TALLER

// BUG 1: Division por cero
function divide(a, b) {
  return a / b;
}

// BUG 2: Mutacion parametro + negativos
function discount(price, percentage) {
  if (percentage > 100) percentage = 100;
  return price - (price * percentage / 100);
}

// BUG 3: Array sin validacion
function firstElement(arr) {
  return arr[0];
}

// BUG 4: Bucle infinito potencial
function sumUntilZero(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== 0) {
      total += numbers[i];
    }
  }
  return total;
}

// BUG 5: String sin trim
function findUser(users, name) {
  return users.find(user => user.name === name);
}

// Tests esperados (para comparar con IA):
/*
expect(() => divide(10, 0)).toThrow();
expect(discount(-50, 20)).toBeNaN();
expect(firstElement([])).toBeUndefined();
expect(sumUntilZero([1])).toBe(1);
expect(findUser([{name: "Juan"}], " juan ")).toBeNull();
*/
