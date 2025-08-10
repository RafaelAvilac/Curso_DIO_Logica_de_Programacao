//🏆 Desafio: Calculadora Simples
//Você vai criar 4 funções em JavaScript:
//somar(a, b) → retorna a soma
//subtrair(a, b) → retorna a subtração
//multiplicar(a, b) → retorna a multiplicação
//dividir(a, b) → retorna a divisão, (mas, se b for 0, deve retornar "Erro: divisão por zero")

let soma = somar(8, 4);
console.log(`O relultado da soma é ${soma}`);

function somar(a, b) {
  let calculo1 = a + b;
  return calculo1;
}

let subtracao = subtrair(12, 4);
console.log(`O resultado da subtração é ${subtracao}`);

function subtrair(a, b) {
  let calculo2 = a - b;
  return calculo2;
}

let multiplicacao = multiplicar(4, 5);
console.log(`O resultado da multiplicação é ${multiplicacao}`);

function multiplicar(a, b) {
  let calculo3 = a * b;
  return calculo3;
}

let divisao = dividir(20, 0);
console.log(`O resultado da divião é ${divisao}`);

function dividir(a, b) {
  if (b == 0) {
    return "Erro: divisão por zero";
  }
  let calculo4 = a / b;
  return calculo4;
}
