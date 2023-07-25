
//En este ejemplo, SISTEMA DE PUNTAJE (SCORE) vamos a evaluar diferentes criterios para otorgar un puntaje a la persona que solicita el crédito. Luego, sumaremos los puntajes para obtener el puntaje total.

//Los criterios y puntajes a considerar son los siguientes:

//1 Ingresos mensuales mayores a $3000 -> 10 puntos.
//2 Edad entre 25 y 40 años -> 20 puntos.
//3 No tener deudas vigentes -> 15 puntos.
//4 Historial crediticio bueno -> 25 puntos.

//La función calcularPuntaje recibirá los datos de ingresos mensuales, edad, estado de deudas y el historial crediticio. Luego, sumará los puntajes según los criterios mencionados.

const calcularPuntaje = (ingresosMensuales, edad, tieneDeudas, historialCrediticio) => {
  let puntaje = 0;

  if (ingresosMensuales > 3000) {
    puntaje += 20;
  }

  if (edad >= 25 && edad <= 40) {
    puntaje += 10;
  }

  if (!tieneDeudas) {
    puntaje += 15;
  }

  if (historialCrediticio === 'bueno') {
    puntaje += 25;
  }

  return puntaje;
};

const puntajeMinimo = 50;

// Datos de ejemplo para evaluar el puntaje
const ingresosMensuales = 3200;
const edad = 35;
const tieneDeudas = false;
const historialCrediticio = 'bueno';

// Llamando a la función para obtener el puntaje
const puntajeTotal = calcularPuntaje(ingresosMensuales, edad, tieneDeudas, historialCrediticio);

// Evaluando si aplica al crédito
if (puntajeTotal >= puntajeMinimo) {
  console.log("Ud es apto para aplicar al crédito.");
} else {
  console.log("Ud es NO apto para aplicar al crédito.");
}
