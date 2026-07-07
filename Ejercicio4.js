// Día 11 - Profe Ana
// Taller de bucles en JavaScript
// Ejercicio 4: Buscar y filtrar movimientos

// En este ejercicio practico break y continue.
// La app necesita encontrar el primer pago a comercio
// e ignorar los movimientos en 0 porque no interesan.

// Creo una lista de movimientos.
// Cada movimiento tiene un tipo y un valor.
const movimientos = [
  { tipo: "entrada", valor: 50000 },
  { tipo: "sin movimiento", valor: 0 },
  { tipo: "retiro", valor: -10000 },
  { tipo: "pago comercio", valor: -25000 },
  { tipo: "entrada", valor: 30000 },
  { tipo: "pago comercio", valor: -15000 }
];

// Creo esta variable para guardar la posición donde encuentre el primer pago a comercio.
// La inicio en -1 porque todavía no he encontrado nada.
let posicionEncontrada = -1;

// Recorro la lista de movimientos desde la primera posición hasta la última.
for (let i = 0; i < movimientos.length; i++) {
  // Guardo el movimiento actual para leerlo más fácil.
  const movimientoActual = movimientos[i];

  // Si el movimiento vale 0, no me interesa revisarlo.
  // Uso continue para saltar esta vuelta y pasar al siguiente movimiento.
  if (movimientoActual.valor === 0) {
    continue;
  }

  // Si el tipo del movimiento es "pago comercio",
  // guardo la posición donde lo encontré.
  if (movimientoActual.tipo === "pago comercio") {
    posicionEncontrada = i;

    // Uso break porque ya encontré el primer pago a comercio.
    // No necesito seguir revisando el resto de la lista.
    break;
  }
}

// Después del ciclo reviso si encontré o no encontré el pago a comercio.
if (posicionEncontrada !== -1) {
  console.log("El primer pago a comercio está en la posición:", posicionEncontrada);
} else {
  console.log("No se encontró ningún pago a comercio.");
}