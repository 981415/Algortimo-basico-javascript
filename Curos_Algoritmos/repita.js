function acaoBotao() {

    var sairLoop, valor01, valor02
    
    do {
        valor01 = prompt('numero 1')
        valor02 = prompt('numero 2')
        document.getElementById("paragrafo").innerText = (parseInt(valor01)) + (parseInt(valor02)) 
        sairLoop = prompt("Deseja sair? s/n ")
    }while (sairLoop == 'n') {
        
    }

        }
    