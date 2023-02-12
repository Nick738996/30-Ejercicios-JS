// Programa que pida 6 numeros por pantalla y los meta en un array
function agregar(num) {
  let list = [];
  num = Number(prompt("Enter a number"));
  for (let i = 0; list.length <= 5; i++) {
    list.push(num);
    console.log(list);
    num = Number(prompt("Enter a number"));
  }
}
