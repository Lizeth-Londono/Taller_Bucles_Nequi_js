Día 11 - Profe Ana
Taller de bucles en JavaScript
## Ejercicio 1: Los movimientos del mes

En el ejercicio 1 practiqué el uso del ciclo for para recorrer una lista de movimientos esta
lista tiene valores positivos y negativos, que los positivos representan dinero que entra 
a la cuenta y los negativos representan retiros o salidas de dinero. 

Primero creé una variable total en 0 para ir sumando cada movimiento y también creé 
cantidadRetiros en 0 para contar cuántos movimientos eran negativos y luego usé un for 
con la condición i < movimientos.length para recorrer toda la lista sin repetir el código 
manualmente.


Día 11 - Profe Ana
Taller de bucles en JavaScript
## Ejercicio 2: Validar el PIN

En el ejercicio 2 practiqué el ciclo while validando un PIN. 
Usé prompt-sync para que el usuario pudiera escribir el PIN desde la terminal. 
Como prompt devuelve texto, guardé el PIN correcto entre comillas. 
El ciclo while se repite mientras el PIN ingresado sea diferente al PIN correcto. 
También usé una variable numeroIntentos para contar cuántas veces el usuario intentó ingresar.

## Ejercicio 3: El menú de la app

En el ejercicio 3 practiqué el ciclo do...while creando un menú para una app tipo Nequi.

Usé do...while porque el menú debe mostrarse al menos una vez antes de revisar si el usuario quiere salir o no y a diferencia de un while normal, primero se ejecuta el bloque de código y después se evalúa la condición y 
la opción que escribe el usuario se guarda en una variable llamada opcion que Luego el programa revisa esa opción con condicionales if, else if y else.

El menú se sigue repitiendo mientras la opción sea diferente de "4", porque la opción 4 representa salir de la app.






## Nota sobre GitHub y node_modules

Durante el taller usé la herramienta prompt-sync para poder pedir datos al usuario desde la terminal. 
Al instalarla con npm install prompt-sync, se creó automáticamente una carpeta llamada node_modules.

Aprendí que la carpeta node_modules no se debe subir a GitHub, porque puede pesar mucho y contiene archivos de dependencias que se pueden volver a instalar después con el comando:

```bash con: npm install


