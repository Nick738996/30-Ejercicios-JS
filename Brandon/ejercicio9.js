/*Calculadora: Pida 2 numeros por pantalla
-Si metemos uno mal que nos vuelva a pedir
-En el cuerpo de la pagina, en una alerta y por consola el resultado de sumar, restar, multiplicar y dividir esas dos cifras
-Refactorizar el codigo para encpsularlo en funciones reutilizables*/
function numeros(num1, num2) {
  validar();
  calculadora();
  function validar() {
    num1 = Number(prompt("Enter the first number"));
    num2 = Number(prompt("Enter the second number"));
    while (isNaN(num1)) {
      num1 = Number(prompt("Please enter a valid first number"));
    }
    while (isNaN(num2)) {
      num2 = Number(prompt("Please enter a valid second number"));
    }
  }
  function calculadora() {
    let sumar = Number(num1 + num2);
    let restar = Number(num1 - num2);
    let multiplicar = Number(num1 * num2);
    let dividir = Number(num1 / num2);
    if (num1 != NaN && num2 != NaN) {
      alert(`La suma de ${num1} + ${num2} = ${sumar}`);
      console.log(`La suma de ${num1} + ${num2} = ${sumar}`);
      alert(`La resta de ${num1} - ${num2} = ${restar}`);
      console.log(`La resta de ${num1} - ${num2} = ${restar}`);
      alert(`La multiplicacion de ${num1} * ${num2} = ${multiplicar}`);
      console.log(`La multiplicacion de ${num1} * ${num2} = ${multiplicar}`);
      alert(`La division de ${num1} / ${num2} = ${dividir}`);
      console.log(`La division de ${num1} / ${num2} = ${dividir}`);
    }
  }
}
