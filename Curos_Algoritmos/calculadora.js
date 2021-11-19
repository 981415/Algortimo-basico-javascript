// // Seção de Comandos, procedimento, funções, operadores, etc... 
// escreva("Digite o numero 1: ")
// leia(valor01)
// escreva("Digite o numero 2: ")
// leia(valor02)
// escreval("Escolha a opreração para calcular")
// escreval("+, -, * , /")
// leia (operacao)

// se operacao = "+" entao
//    resultado := valor01 + valor02
// fimse
// se operacao = "-" entao
//    resultado := valor01 - valor02
// fimse
// se operacao = "*" entao
//    resultado := valor01 * valor02
// fimse
// se operacao = "/" entao
//    resultado := valor01 / valor02
// fimse

// escreval("O resultado da operação:", resultado)

// Fimalgoritmo



function acaoBotao() {

var numero01, numero02, resultado, operacao 

numero01 = prompt('Digite o numero 1:')
numero02 = prompt('Digite o numero 2:')
operacao = prompt('digite a operação desejada: +, -, *, /')

switch(operacao){
    case '+':
        resultado = parseInt(numero01) + parseInt(numero02)
    break
    case '-':
        resultado = parseInt(numero01) - parseInt(numero02)
    break
    case '*':
        resultado = parseInt(numero01) * parseInt(numero02)
    break
    case '/':
        resultado = parseInt(numero01) / parseInt(numero02)
    break
}



// if (operacao == '+') {
//     resultado = parseInt(numero01) + parseInt(numero02)
// }
//     else if (operacao == '-'){
//         resultado = parseInt(numero01) - parseInt(numero02) 
//     }
//     else if (operacao == '*'){
//         resultado = parseInt(numero01) * parseInt(numero02) 
//     }
//     else {
//         resultado = parseInt(numero01) / parseInt(numero02) 
//     }
        
    document.getElementById("paragrafo").innerText = resultado

}

