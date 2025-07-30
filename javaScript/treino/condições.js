//atualize a variável subscribe para que a comparação retorne true e o texto seja exibido no console

let subscribe = true;

if (subscribe) {
  console.log("Thank you for subscribe!!!");
}

//Codifique uma declaração if que avalie se score é maior que 50. Dentro do bloco de código, exiba uma string com mais de 10 caracteres no console.

let score = 100;
if (score > 50) {
  console.log("Parabéns sua pontuação é maior que 50");
}

//Na primeira condição, verifique se grade não é igual a "A".Na segunda condição, verifique se subject é igual a "Math".

let subject = "Match";
let grade = "A";

if (grade !== "A") {
  console.log("Give " + subject + " a chance");
}

if (subject === "Match") {
  console.log("Today's a great day for solving equations!");
}

//Codifique uma condição para exibir o poder especial de um personagem se o character do jogo for um "Wizard".

let character = "Wizard";
if (character === "Wizard") {
  console.log("Special power : potions");
}

//Crie uma variável const chamada getTicket. Seu valor deve verificar se a variável directFlight tem um valor booleano de true.

let directFlight = true;
const getTicket = directFlight === true;

if (getTicket) {
  console.log("Direct fligth found");
}

//Codifique uma declarção if que define isFreezing como true se degress for menor ou igual a 0
let degrees = 0;
let isFreezing = false;
if (degrees <= 0) {
  isFreezing = true;
}
console.log("Is freezing: " + isFreezing);
