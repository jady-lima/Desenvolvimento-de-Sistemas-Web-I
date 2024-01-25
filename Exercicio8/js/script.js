function recebeNumero(){
    var numero = prompt("Digite um número:");
    imprimeTabuada(numero);
}

function imprimeTabuada(numero){
    var i = 0;
    var tabuadaFinal = "";
    
    while(i <= 10){
        var resultado = numero * i;
        tabuadaFinal += numero + " x " + i + " = " + resultado + "<br>";
        i++;
    }

    document.getElementById("tabuada").innerHTML = tabuadaFinal;
}

document.addEventListener("DOMContentLoaded", recebeNumero);

