import { contador } from "./ejercicio1"

class Contador {
  function (valor = 0) {
     this.valor++
  }
}

const instancia = new contador

export { instancia }