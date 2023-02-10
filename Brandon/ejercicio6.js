// Muestre todos los numeros divisores de un numero que mete en prompt
let list = [];
function divisores(num) {
  num = Number(prompt("Enter a number"));
  for (var i = 0; i <= num; i++) {
    if (num % i == 0) {
      list.push(i);
    }
  }
  console.log(list);
  list = 0;
}
