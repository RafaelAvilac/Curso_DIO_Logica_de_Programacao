let idade = 30
console.log("Valor da minha variavel " + idade)

idade = 30 + 6
console.log("Operação de adição " + idade)

idade = 30 - 6
console.log("Operação de Subtração" + idade)

let primeiroNumero = 1023
let segundoNumero = 23
console.log(primeiroNumero - segundoNumero)

let precoProduto = 100.99 
let valorComTaxa = precoProduto * 2
console.log(valorComTaxa)

let multiplicador = 4
let multiplicando = 12
let produto = multiplicador * multiplicando
console.log("Resultado da multiplicação é: " + produto )

multiplicador = 8
produto = multiplicador * multiplicando
console.log("Resultado da multiplicação é: " + produto )

let notaMercado = 50
let pessoasParaDividir = 3
console.log("operação de divisão " + notaMercado / pessoasParaDividir)

let divisao = 10 % 3
console.log(divisao)

let contador = 1
contador ++
contador ++
contador ++
console.log(contador)

let preco = 10
preco += 5
preco += 5
preco -= 3
console.log(preco)


let expressao = 2 * ((5 + 10) - 8)
console.log(expressao)

// = é atribuição
// == é para conparar o valor
// === é para comparar o valor e o formato do conteúdo
// !== é diferente?
let numero = "1"
let Resultado = numero !== "1"
console.log(Resultado)

//guardar o valor em uma variável de resultado TRE ou FALSE
let cpfBloqueado = "123.445.222-45"
let cpfUsuario = "222.111.222-09"
let ehCpfBloqueado = cpfUsuario !== cpfBloqueado

console.log("O usuário está liberado? " + ehCpfBloqueado)

// maior ou igual
let idadeMinima = 18
let idadeUsuario = 16
let idadePermitidaValida = idadeUsuario >= idadeMinima
console.log(idadePermitidaValida)

//menor ou igual
let idadeDeCorte = 50
let idadeuSuario = 45
let idadeEhterceira = idadeDeCorte <= idadeuSuario
console.log(idadeEhterceira)

// and (&&)
let idaDe = 18
let vistoVerificado = true
console.log((idaDe >= 18) && (vistoVerificado === true) )

