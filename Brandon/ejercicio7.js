// 7. Un programa que nos diga si un numero es par o impar
// 7.1 Ventana prompt
// 7.2 Si no es valido que nos pida de nuevo el numero
function evenOrOdd(num) {
  num = Number(prompt("Enter a number"));
  while (isNaN(num)) {
    alert(`This is not a number`);
    num = Number(prompt("You can only enter number, please try again"));
  }
  if (num % 2 == 0) {
    console.log(`${num} is an Even number`);
  } else {
    console.log(`${num} is an Odd number`);
  }
}
