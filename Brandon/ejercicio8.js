// Tabla de multiplicar de un numero introducido por pantalla
function tablasMultiplicar(num) {
  num = Number(prompt("Enter a number"));
  for (var i = 1; i <= 12; i++) {
    var tabla = num * i;
    console.log(tabla);
  }
}
