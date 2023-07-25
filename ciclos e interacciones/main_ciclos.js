
for (let i = 1; i <= 10; i++) {
    // marca y modelo (afecta stock)
    let motorolaG52= prompt("Ingresar marca y modelo");
    // agregamos la compra en el carrito de compras y restamos en el stock (i).
    alert("agregado al carrito de compras "+i+" Nombre: "+ motorolaG52);
    
    //en el ejemplo anterior se realizo con un modelo en particular al llegar a 10 quiebra stock
    if (i == 10) {break;}
    } 
    alert ("sin existencias en stock");