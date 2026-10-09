
let listadesuper = [];

listadesuper[0] = "Sal";
listadesuper[1] = "Azúcar";
listadesuper[2] = "Arroz";

console.log(listadesuper[0]); // Muestra "Sal"

let ultimoElemento = listadesuper[listadesuper.length - 1];
console.log(ultimoElemento); // Muestra "Arroz"


// --- PARTE 2 ---

// 1. Agregar 2 productos nuevos al final usando .push()
listadesuper.push("Fideos", "Aceite");

// 2. Agregar 2 productos nuevos al principio usando .unshift()
listadesuper.unshift("Leche", "Café");

// 3. Imprimir la cantidad total de productos actuales usando .length
console.log("Cantidad total actual:", listadesuper.length);

// 4. Remover el último producto y guardarlo en la variable noHabia
let noHabia = listadesuper.pop();

// 5. Remover el primer producto y guardarlo en la variable comprado
let comprado = listadesuper.shift();

// 6. Consultar y mostrar el tamaño final de la lista en consola
console.log("Tamaño final de la lista:", listadesuper.length);

// Opcional: ver cómo quedaron las variables guardadas y la lista
console.log("Comprado:", comprado);
console.log("No había:", noHabia);
console.log("Lista final:", listadesuper);

// --- PARTE 3 ---

// 1. Función de impresión (logItems)
function logItems(arreglo) {
  arreglo.forEach((producto, indice) => {
    console.log(`${indice}: ${producto}`);
  });
}

// 2. Módulo Interactivo ("Súper App")
let comando = "";

while (comando !== "salir") {
  comando = prompt("Ingrese un comando ('nuevo', 'listar', 'borrar' o 'salir'):");

  if (comando !== null) {
    comando = comando.toLowerCase().trim();
  }

  switch (comando) {
    case "nuevo":
      let nuevoProducto = prompt("Ingresa el nombre del nuevo producto:");
      if (nuevoProducto) {
        listadesuper.push(nuevoProducto);
        console.log(`Producto "${nuevoProducto}" agregado.`);
      }
      break;

    case "listar":
      console.log("--- Lista de Productos ---");
      logItems(listadesuper);
      break;

    case "borrar":
      let indiceABorrar = prompt("Ingresa el índice del producto a eliminar:");
      let posicion = Number(indiceABorrar);

      if (!isNaN(posicion) && posicion >= 0 && posicion < listadesuper.length) {
        let eliminado = listadesuper.splice(posicion, 1);
        console.log(`Producto "${eliminado[0]}" eliminado.`);
      } else {
        console.log("Índice no válido.");
      }
      break;

    case "salir":
      console.log("Programa finalizado.");
      break;

    default:
      if (comando !== null) {
        console.log("Comando no válido. Usa: nuevo, listar, borrar o salir.");
      }
      break;
  }
}


