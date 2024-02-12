let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
   // console.log(typeof(numeroDeUsuario));
    console.log(intentos);
    //console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario);
   // console.log(numeroDeUsuario === numeroSecreto); 
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento ("p", `Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`)
        document.getElementById("reiniciar").removeAttribute("disabled"); 
    }else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p","El numero es menor");
        }else {
            asignarTextoElemento("p","El numero es mayor")
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector("#valorUsuario").value = '';
    //valorCaja.value = '';
}
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(listaNumerosSorteados);
    //si el numero generado esta incluido en la lista
    //si sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles")
    }else{
       if (listaNumerosSorteados.includes(numeroGenerado)) {
          return generarNumeroSecreto();  
       }else{
          listaNumerosSorteados.push(numeroGenerado);
          return numeroGenerado;
       }
    }
}    
function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del numero Secreto");
    asignarTextoElemento("p",`Indica un numero del 1 ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //generar el numero aleatorio
    //deshabilitar el boton de nuevo juego
    //inicializar el numero de intentos
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}
condicionesIniciales();