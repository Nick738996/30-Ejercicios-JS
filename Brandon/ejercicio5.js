// Mostrar todos los numeros impares que hay entre dos numeros introducidos por el ususario
let list = [];
function showOddNumbers(num1, num2) {
  num1 = Number(prompt("Enter the first number"));
  num2 = Number(prompt("Enter the second number"));
  for (var i = num1; i <= num2; i++) {
    if (i % 2 == 1) {
      list.push(i);
    }
  }
  console.log(list);
}
