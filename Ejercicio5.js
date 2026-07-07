// Día 11 - Profe Ana
// Taller de bucles en JavaScript
// Ejercicio 5: Varias cuentas a la vez

// En este ejercicio practico bucles anidados.
// Un bucle anidado es un ciclo dentro de otro ciclo.

// Creo una lista de usuarios.
// Cada usuario tiene un nombre y su propia lista de movimientos.
const usuarios = [
  {
    nombre: "Lizeth",
    movimientos: [50000, -10000, -5000, 20000]
  },
  {
    nombre: "Ana",
    movimientos: [30000, -15000, -7000]
  },
  {
    nombre: "Jessica",
    movimientos: [80000, -20000, -10000, 5000]
  }
];

// Este for de afuera recorre usuario por usuario.
for (let i = 0; i < usuarios.length; i++) {
  const usuarioActual = usuarios[i];

  // Creo totalUsuario dentro del ciclo de afuera.
  // Esto es importante porque cada usuario debe tener su propio total.
  // Si lo dejara por fuera, se mezclarían los totales de todos los usuarios.
  let totalUsuario = 0;

  // Este for de adentro recorre los movimientos del usuario actual.
  for (let j = 0; j < usuarioActual.movimientos.length; j++) {
    const movimientoActual = usuarioActual.movimientos[j];

    // Voy sumando cada movimiento al total de este usuario.
    totalUsuario = totalUsuario + movimientoActual;
  }

  // Cuando termina el ciclo interno, ya tengo el total del usuario actual.
  console.log("Usuario:", usuarioActual.nombre);
  console.log("Total de movimientos:", totalUsuario);
  console.log("-------------------------");
}