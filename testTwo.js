const { updatePrices } = require("./exercise_two");

const productos = {
  producto1: {
    nombre: "Producto 1",
    descripcion: "Esta es la descripción del producto 1",
    precio: 10.99,
    disponible: true,
    fechaCreacion: "2022-01-01",
  },
  producto2: {
    nombre: "Producto 2",
    descripcion: "Esta es la descripción del producto 2",
    precio: 15.99,
    disponible: false,
    fechaCreacion: "2022-02-01",
  },
  producto3: {
    nombre: "Producto 3",
    descripcion: "Esta es la descripción del producto 3",
    precio: 20.99,
    disponible: true,
    fechaCreacion: "2022-02-01",
  },
  producto4: {
    nombre: "Producto 4",
    descripcion: "Esta es la descripción del producto 4",
    precio: 25.99,
    disponible: true,
    fechaCreacion: "2022-04-01",
  },
  producto5: {
    nombre: "Producto 5",
    descripcion: "Esta es la descripción del producto 5",
    precio: 30.99,
    disponible: false,
    fechaCreacion: "2022-05-01",
  },
};

console.log(updatePrices(productos, "2022-02-01"));
