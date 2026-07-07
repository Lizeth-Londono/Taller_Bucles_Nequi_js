// Día 11 - Profe Ana
// Taller de bucles en JavaScript
// Ejercicio 3: El menú de la app

// Activo prompt-sync para poder leer lo que el usuario escribe en la terminal.
const prompt = require("prompt-sync")();

// Creo esta variable por fuera del ciclo.
// Aquí voy a guardar la opción que el usuario escriba.
let opcion;

// Uso do...while porque necesito que el menú se muestre al menos una vez.
// Primero se ejecuta lo que está dentro de do.
// Después el programa revisa si debe repetir o terminar.
do {
  console.log("\n--- MENÚ NEQUI ---");
  console.log("1. Ver saldo");
  console.log("2. Enviar dinero");
  console.log("3. Recargar");
  console.log("4. Salir");

  // Guardo en opcion lo que el usuario escriba.
  opcion = prompt("Elige una opción: ");

  // Reviso qué opción eligió el usuario.
  if (opcion === "1") {
    console.log("Tu saldo actual es de $150.000.");
  } else if (opcion === "2") {
    console.log("Elegiste enviar dinero.");
  } else if (opcion === "3") {
    console.log("Elegiste recargar.");
  } else if (opcion === "4") {
    console.log("Gracias por usar Nequi. Sesión finalizada.");
  } else {
    console.log("Opción no válida. Intenta de nuevo.");
  }

// El ciclo se repite mientras la opción sea diferente de 4.
} while (opcion !== "4");