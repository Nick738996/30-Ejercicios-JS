// Ordenar el array anterior y mostrarlo
function agregar(num) {
  let list = [];
  num = Number(prompt("Enter a number"));
  for (let i = 0; list.length <= 5; i++) {
    list.push(num);
    num = Number(prompt("Enter a number"));
  }
  console.log(
    `Estos son los elementos del array por consola originales ${list}`
  );
  list.sort(function (a, b) {
    return a - b;
  });
  console.log(
    `Estos son los elementos del array por consola de menor a mayor ${list}`
  );
}
