

function acaoBotao() {

var nome, idade, limite, contador

    limite = prompt('quantidade de vezes')
    contador = 0

    while (contador < limite) {
        nome = prompt('digite o nome: ')
        idade = prompt('digite a idade')
        if (idade > 18) 
            document.getElementById("paragrafo").innerText = nome + " voce é MAIOR de idade."
        
        else 
            document.getElementById("paragrafo").innerText = nome + " voce é MENOR de idade."
        
    contador ++
    }
}