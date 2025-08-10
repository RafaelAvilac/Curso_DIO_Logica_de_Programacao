function somar(a, b) {
  let somatorio = a + b;
  return somatorio;
}

let resultado = somar(7, 9);
console.log(`O resultado é ${resultado}`); // <-- usa crase ao inves de + para cocatenação

function criarMensagem(nome) {
  return `Olá, ${nome}!`; // retorna string
}

function listaNumeros() {
  return [1, 2, 3]; // retorna array
}

function pegarObjeto() {
  return { produto: "Notebook", preco: 2500 }; // retorna objeto
}

console.log(criarMensagem("Rafael"));
console.log(listaNumeros());
console.log(pegarObjeto());
