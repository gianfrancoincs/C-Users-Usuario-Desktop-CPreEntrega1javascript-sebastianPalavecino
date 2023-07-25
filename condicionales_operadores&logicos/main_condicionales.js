
// Variables simuladas (pueden obtenerse de sensores o cualquier otra fuente de datos)
const humedadSuelo = 25; // Porcentaje de humedad del suelo
const horaActual = 18;   // Hora actual (formato de 24 horas)

// Condiciones para el sistema de riego
const humedadMinima = 30; // Porcentaje mínimo de humedad para activar el riego
const horaRiegoInicio = 20; // Hora (formato de 24 horas) para comenzar el riego

// Comprobación de las condiciones para activar el riego
if (humedadSuelo < humedadMinima || horaActual >= horaRiegoInicio) {
  console.log("Activando el riego por goteo...");
  // Aquí se pondría el código para encender la bomba o el sistema de riego
} else {
  console.log("No se requiere riego en este momento.");
  // Aquí se pondría el código para apagar la bomba o el sistema de riego
}

