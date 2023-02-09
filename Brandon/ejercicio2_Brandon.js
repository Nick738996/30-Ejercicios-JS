function numeros() {
  let a = Number(prompt("Introduzca el primer numero"));
  while (isNaN(a) || a <= 0 || a === null) {
    a = Number(prompt("Introduzca el primer numero nuevamente"));
  }
  let b = Number(prompt("Introduzca el segundo numero"));
  while (isNaN(b) || b <= 0 || b === null) {
    b = Number(prompt("Introduzca el segundo numero nuevamente"));
  }
  if (a != NaN && a > b && b != NaN) {
    console.log(`${a} es el numero mayor`);
  } else if (a != NaN && a < b && b != NaN) {
    console.log(`${b} es el numero mayor`);
  } else if (a != NaN && a === b && b != NaN) {
    console.log(`${a} y ${b} son iguales`);
  }
}
numeros();
