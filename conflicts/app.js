let entrada1 = parseFloat(prompt('Digite um número:'));
let entrada2 = parseFloat(prompt('Digite outro número:'));

function calcularNumero(numero1, numero2) {
    return numero1 + numero2;
};

let resultado = calcularNumero(entrada1, entrada2);
console.log(`${entrada1} + ${entrada2} = ${resultado}`);
