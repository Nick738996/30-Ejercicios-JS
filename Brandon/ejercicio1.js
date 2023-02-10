// Programa que pida 2 numeros y que nos diga cual es el mayor, el menor y si son iguales

function numeros() {
  let a = prompt("Introduzca el primer numero");
  let b = prompt("Introduzca el segundo numero");
  if (a > b) {
    console.log(`${a} es el numero mayor, ${b} es el numero menor`);
  } else if (a < b) {
    console.log(`${a} es el numero menor, ${b} es el numero mayor`);
  } else {
    console.log(`${a} y ${b} son iguales`);
  }
}

numeros(3, 4);
numeros(6, 3);
numeros(3, 3);
