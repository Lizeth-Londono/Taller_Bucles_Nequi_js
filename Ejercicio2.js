// Día 11 - Profe Ana
// Taller de bucles en JavaScript
// Ejercicio 2: Validar el PIN

// Activo prompt-sync para poder leer lo que el usuario escribe en la terminal.
// Esto me permite usar prompt como si fuera una pregunta para el usuario.
const prompt = require("prompt-sync")();

// Guardo el PIN correcto como texto.
// Lo guardo entre comillas porque prompt devuelve texto, no número.
const pinCorrecto = "1234";

// Pido el primer intento al usuario.
// Lo que el usuario escriba queda guardado en la variable intento.
let intento = prompt("Escribe tu PIN: ");

// Creo una variable para contar cuántas veces intentó ingresar el PIN.
// Empieza en 1 porque ya le pedí el primer intento antes del ciclo.
let numeroIntentos = 1;

// Uso while porque no sé cuántas veces se va a equivocar el usuario.
// Mientras el intento sea diferente al PIN correcto, el programa vuelve a preguntar.
while (intento !== pinCorrecto) {
  console.log("PIN incorrecto. Intenta de nuevo.");

  // Vuelvo a pedir el PIN.
  intento = prompt("Escribe tu PIN: ");

  // Sumo un intento cada vez que el usuario vuelve a escribir.
  numeroIntentos++;
}

// Esta parte se ejecuta solo cuando el usuario escribe el PIN correcto.
console.log("Bienvenida a Nequi.");
console.log("Ingresaste después de", numeroIntentos, "intento(s).");