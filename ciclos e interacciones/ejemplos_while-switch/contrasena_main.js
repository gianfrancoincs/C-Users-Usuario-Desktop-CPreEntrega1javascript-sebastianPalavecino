//En el sisguiente ejemplo creamos un login para usuario con WHILE y SWITCH

let claveCorrecta = "secreto123";
let intentos = 3;

while (intentos > 0) {
  let claveIngresada = prompt("Ingresa la clave de acceso:");

  switch (claveIngresada) {
    case claveCorrecta:
      alert("¡Clave correcta! Bienvenido.");
      intentos = 0; // detiene el bucle, ya que la clave es correcta.
      break;
    default:
      alert(`Clave incorrecta. Te quedan ${intentos - 1} intento(s).`);
      intentos--;
      break;
  }
}

if (intentos === 0) {
  alert("Has agotado tus intentos. Acceso denegado.");
}
