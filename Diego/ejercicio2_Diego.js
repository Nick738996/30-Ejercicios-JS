let numberOne;
let NumberTwo;

while (isNaN(numberOne) || numberOne <= 0) {
  if (numberOne === null) {
    break;
  }
  numberOne = Number(numberOne);
}

while (isNaN(NumberTwo) || NumberTwo <= 0) {
  if (NumberTwo === null) {
    break;
  }
  NumberTwo = Number(NumberTwo);
}

if (numberOne > NumberTwo) {
  console.log(
    `${numberOne} es el numero mayor, ${NumberTwo} es el numero menor`
  );
} else if (numberOne < NumberTwo) {
  console.log(
    `${numberOne} es el numero menor, ${NumberTwo} es el numero mayor`
  );
} else {
  console.log(`${numberOne} y ${NumberTwo} son iguales`);
}
