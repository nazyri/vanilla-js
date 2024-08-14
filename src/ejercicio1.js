import { instancia } from "./ejercicio2";
let contador = {
  valor: 0,
  siguiente: function (valor) {
    this.valor = valor
    console.log(this.valor);
    return this.valor++
  },
};

const contador2 = new instancia;

export { contador }