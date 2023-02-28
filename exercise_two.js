/*
En base a una lista de precios y a una fecha debemos crear una nueva lista
de precios actualizando aquellos productos que coincidan con la fecha de
creación incrementando el valor de estos un 10%.
Deben devolver la lista original y la lista con sus respectivas actualizaciones
de precios.
*/

function updatePrices(list, date) {
  const listnew = JSON.parse(JSON.stringify(list));
  for (let valor in listnew) {
    if (listnew[valor].fechaCreacion === date) {
      listnew[valor].precio = listnew[valor].precio * 0.1;
    }
  }
  console.log(list, listnew);
}

// No cambiar nada por debajo de esta línea
module.exports = {
  updatePrices,
};
