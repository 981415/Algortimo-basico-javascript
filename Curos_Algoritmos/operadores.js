var nome, nota01, nota02;
passou = false;

nome = prompt('Digite seu nome: ');
nota01 = prompt("Digite a nota 1: ");
nota02 = prompt('Digite a nota 2: ');

var media = (parseInt(nota01) + parseInt(nota02)) / 2;

if(media >= 50){
    passou = true;
}

if(passou ){
    alert("Aprovado " + media);
}
else
    alert("Reprovado " + media);    
