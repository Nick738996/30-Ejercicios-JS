// Mostrar cuantos elementos tiene el array anterior
function agregar(num) {
  let list = [];
  num = Number(prompt("Enter a number"));
  for (let i = 0; list.length <= 5; i++) {
    list.push(num);
    num = Number(prompt("Enter a number"));
  }
  console.log(
    `Estos son los elementos originales del array por consola ${list}`
  );
  console.log(`El array tiene ${list.length} elementos`);
}
