
console.log("Atividade de JS")

console.log(" ")

var cliente = "Alcides Garcia"
var conta = "67768734"
var saldo = 322.95

console.log("Cliente: " + cliente + ".")

console.log("Conta: " + conta + ".")

console.log(" saldo: R$" + saldo + ".")
   

var deposito = 50.00

saldo = saldo + deposito

console.log("Novo depósito na conta: " + conta + ". Saldo atualizado: R$" +  saldo)

console.log(typeof cliente)

console.log(typeof conta)

console.log(typeof saldo)

console.log(conta + saldo)

console.log("Ao somar uma variável de tipo *number* com uma variavel de tipo *string* com caracteres numéricos o resultado no console é um tipo number. Ou seja, o console trocará o tipo, apesar da indicação.")

console.log(cliente + saldo)

console.log("Já ao somar uma variável *number* com uma variável de tipo *string* com caracteres alfabéticos a soma é uma concatenação.")