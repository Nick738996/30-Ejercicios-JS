// Utilizando un bucle, mostrar la suma y la media de unos numeros introducidos hasta introducir un numero negativo y ahi mostrar el resultado
let sum = 0;
let sumArray = [];
function calculator(num) {
  num = Number(prompt("Enter a number"));
  while (num >= 0) {
    sumArray.push(num);
    num = Number(prompt("Enter another number"));
  }
  for (const numbers of sumArray) {
    sum += numbers;
  }
  console.log(`The sum of the numbers you entered is ${sum}`);
  console.log(`The average of the sum is ${sum / sumArray.length}`);
}
calculator();
