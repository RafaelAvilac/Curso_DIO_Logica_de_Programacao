//Definição da função

function torrar(pao, nome = "cliente", valor) {
  console.log("Torrada feita com " + pao);
  console.log("É um pedido de " + nome);
  console.log("O valor é " + valor);
}

//Chamadas da função

torrar("pão de forma.", "Marcos", 11.63);
torrar("pão integral.", "Victor", 15.3);
