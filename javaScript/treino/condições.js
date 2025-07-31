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

//Codofique uma declaração if que verifica se a variável destination é igual a "Venice".
//  Se a comparação for true, use console.log para exibir uma string com mais de 10 caracteres.

let destination = "Venice";
if (destination === "Venice") {
  console.log("A variável destination atende aos requisitos.");
}

//Defina um valor para isInstalled de modo que You alread have snapCat seja exibido no console.

let isInstalled = "ok";

if (isInstalled === "ok") {
  console.log("You already have SnapCat");
} else {
  console.log("Installing SnapCat...");
}

//Codifique uma declaração if/else usando isWeekend como a condição.
//Para cada bloco de código, codifique um console.log que exiba uma string de sua escolha.

let isWeekend = false;
if (isWeekend) {
  console.log("Bom final de semana!");
} else {
  console.log("Aproveite o dia!");
}

//Codifique uma declaração if/else cujos blocos de código exibam mensagens diferentes no console.
//A condição da declaração if deve verificar se password é igual a correctPassword.

let password = "001";
let correctPassword = "000";
if (password === correctPassword) {
  console.log("Acesso autorizado.");
} else {
  console.log("Acesso negado.");
}

//Codifique uma declaração else que atualize flourAdded para 200 se o usuário não peneirou farinha suficiente na masssa do bolo.

let flourAdded = 50;
let flourNeeded = 200;
if (flourAdded === flourNeeded) {
  console.log("Add vanilla bean");
} else {
  flourAdded = 200;
}

//Defina memoryFull para que takePicture seja atualizado para true.
let memoryFull = false;
let takePicture = false;
if (memoryFull) {
  console.log("Phone memory full");
} else {
  takePicture = true;
}

//Adicione uma declaração else que exiba "You have a new message" se messages for maior que 0.

let message = 5;
if (message === 0) {
  console.log("Imbox empty");
} else {
  console.log("You have a new message");
}

//Codifique uma declaração if/else que define inboxFull com true se message for maior que 1000. em seguida exiba uma mensagem se não for.

let messages = 1100;
let inboxFull = false;
if (messages > 1000) {
  inboxFull = true;
} else {
  console.log("Caixa de mensagem cheia");
}

//Codifique uma declaração if/else cujos blocos de código exibem mensagens no console.
//Defina a condição da declaração if para verificar se commonFriends é maior que 2.

let commonFriends = 3;
if (commonFriends > 2) {
  console.log("Parabéns!!!");
} else {
  console.log("Que pena!");
}

//Defina um valor booleano para installed de modo que o bloco de código else seja executado.

let installed = false;
if (installed) {
  console.log("Homeflix alread installed");
} else {
  console.log("Installing Homeflix...");
}
