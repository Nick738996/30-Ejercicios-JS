//Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
let list = [];
function numbersBetween(num1, num2) {
  num1 = Number(prompt("Enter the first number"));
  num2 = Number(prompt("Enter the second number"));
  for (var i = num1; i <= num2; i++) {
    list.push(i);
  }
  console.log(list);
}
