// and (&&) - 100 moedas coletadas e 1 item estrela
let moedasColetada = 99
let item = "estrela"
let resultado = (moedasColetada === 100) && (item === "estrela")
console.log(resultado)

// or (||) - nosso boneco so pode sair se tiver sem chuva ou com guarda chuva

let tempo = "sol"
let items = "guarda chuva"
let podeSair = ( tempo !== "chuva") || (items === "guarda chuva")
console.log("Nosso personagem pode sair? " + podeSair)

// not ( ! ) - nega uma afirmação
 let clima = "chuva"
 let result = clima === "chuva"
 console.log( ! resultado )