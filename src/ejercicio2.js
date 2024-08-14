import { contador } from "./ejercicio1"

class Contador {
  function (valor = 0) {
     this.valor++
     console.log(valor)
  }
}

const instancia = new contador

export { instancia }