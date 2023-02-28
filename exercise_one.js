/*
Realiza una función que me indique si un número entero dado es
primo o no 
*/

function primeNumber(num) {
  if (num < 2) {
    console.log(false);
  }
  for (let i = 2; i < num; i++) {
    if (num % i !== 0) {
      console.log(false);
    } else {
      console.log(true);
    }
    break;
  }
}
/*
in -> number 
x / x-1 siempre y cdo x-1 > 1   x % x-1 -> 0
x / x-2
...
si en algún caso tenemos resto 0 
-> no es primo 
caso contrario -> si es primo
*/

// No cambiar nada por debajo de esta línea
module.exports = {
  primeNumber,
};
