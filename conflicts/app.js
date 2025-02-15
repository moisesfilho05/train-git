function exibirTextoComAlert(texto) {
  alert(texto);
};

exibirTextoComAlert('Seja bem-vindo ao Nosso Programa de Soma!');

let entradaNum1 = parseFloat(prompt("Digite um número:"));
let entradaNum2 = parseFloat(prompt("Digite outro número:"));

function calcularNumeroSoma(numero1, numero2) {
  return numero1 + numero2;
}

let resultado = calcularNumeroSoma(entradaNum1, entradaNum2);
console.log(`${entradaNum1} + ${entradaNum2} = ${resultado}`);
