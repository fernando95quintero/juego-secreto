let numeroSecreto = 0
let intentos = 0
let listaNumerosSorteados = []
let numeroMaximo = 10

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento)
  elementoHTML.textContent = texto
}


function verificarIntento() {

  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value)

  if (isNaN(numeroDeUsuario)) {

    asignarTextoElemento("p", "Por favor digite el número")

  } else {
    
    if (numeroDeUsuario === numeroSecreto) {
      
      asignarTextoElemento("p", `Acertaste el número en ${intentos} ${intentos == 1 ? "vez" : "veces"}`)
      
      document.getElementById("intentar").setAttribute("disabled", "true")
      document.getElementById("reiniciar").removeAttribute("disabled")
    
    } else {
      
      if (numeroDeUsuario > numeroSecreto) {
        
        asignarTextoElemento("p", "El número secreto es menor")
      
      } else {
        
        asignarTextoElemento("p", "El número secreto es mayor")
      
      }
      
      intentos++
      
      limpiarCaja()
    
    }
  }
}


function limpiarCaja() {
  document.querySelector("#valorUsuario").value = ""
}


function generarNumeroSecreto() {

  let numeroGenerado = Math.trunc(Math.random() * numeroMaximo) + 1

  console.log(numeroGenerado)
  console.log(listaNumerosSorteados)

  if (listaNumerosSorteados.length == numeroMaximo) {

    asignarTextoElemento("p", "Ya se sortearon todos los números posibles")

  } else {
    
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      
      return generarNumeroSecreto()
    
    } else {

      listaNumerosSorteados.push(numeroGenerado)
      return numeroGenerado

    }
  }
}


function condicionesIniciales(){
  asignarTextoElemento("h1", "¡Juego del número secreto!")
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`)

  numeroSecreto = generarNumeroSecreto()
  intentos = 1

}


function reiniciarJuego() {
  // Limpiar caja
  limpiarCaja()

  // Indicar mensaje de intervalo de números
  // Generar el número aleatorio
  // Inicializar el número de intentos
  condicionesIniciales()

  // Deshabilitar el botón de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true")

  // Habilitar el botón de intentar
  document.querySelector("#intentar").removeAttribute("disabled")

}

condicionesIniciales()