// Mostrar el array anterior (todos sus elementos) en el cuerpo de la pagina y por consola
function agregar(num) {
  let list = [];
  num = Number(prompt("Enter a number"));
  for (let i = 0; list.length <= 5; i++) {
    list.push(num);
    num = Number(prompt("Enter a number"));
  }
  console.log(`Estos son los elementos del array en consola ${list}`);
  alert(`Estos son los elementos del array ${list}`);
}
