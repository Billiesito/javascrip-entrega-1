const usuario = prompt ("Ingrese su nombre")

alert (`Bienvenido a nuestro e-commerce ${usuario}`)

const producto = prompt ("¿Que desea comprar? 1) remera 2) pantalon")

if  (producto === "remera") {
    let compra = confirm ("elegiste remera, sale usd 10, te gustaría comprarla?")

    if (compra == true) {
        const direccion = prompt ("Por favor, indica tu direccion para poder enviarte el producto")
        alert (`El producto sera enviado a: ${direccion}`)
        alert ("Gracias por tu compra") }

    else if (compra == false) {
        alert ("gracias por la visita") } 

} else if (producto === "pantalon") {
    let compra = confirm ("elegiste pantalon, sale usd 15, te gustaría comprarlo?")

    if (compra == true) {
        const direccion = prompt ("Por favor, indica tu direccion para poder enviarte el producto")
        alert (`El producto sera enviado a: ${direccion}`)
        alert ("Gracias por tu compra") }

    else if (compra == false) {
        alert ("gracias por la visita") } 

} else {
    alert ("producto no valido") 
}