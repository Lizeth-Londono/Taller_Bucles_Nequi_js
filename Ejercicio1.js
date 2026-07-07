// Día 11 - Profe Ana
// Taller de bucles en JavaScript
// Ejercicio 1: Los movimientos del mes

// En esta lista guardo los movimientos de una cuenta tipo Nequi.
// Los números positivos representan dinero que entra.
// Los números negativos representan dinero que sale o retiros.
const movimientos = [500, 30, -20, -5, -4, -5];

// Creo esta variable para guardar la suma total de todos los movimientos.
// Empieza en 0 porque todavía no he sumado nada.
let total = 0;

// Creo esta variable para contar cuántos movimientos fueron retiros.
// Un retiro lo voy a identificar porque el número es negativo.
let cantidadRetiros = 0;

// Uso un ciclo for para recorrer la lista desde el primer movimiento hasta el último.
// i empieza en 0 porque las listas en JavaScript empiezan en la posición 0.
// movimientos.length indica cuántos movimientos hay en total.
for (let i = 0; i < movimientos.length; i++) {
  // Guardo el movimiento actual para trabajar con él más fácil.
  const movimientoActual = movimientos[i];

  // Sumo el movimiento actual al total.
  total = total + movimientoActual;

  // Si el movimiento actual es menor que 0, significa que fue un retiro.
  if (movimientoActual < 0) {
    cantidadRetiros++;
  }
}

// Al final, después de recorrer toda la lista, muestro los resultados.
console.log("Total movido en la cuenta:", total);
console.log("Cantidad de retiros:", cantidadRetiros);