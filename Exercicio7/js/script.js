function calculaMedia(numero1, numero2, numero3, numero4){
    var media = (numero1 + numero2 + numero3 + numero4)/4;
    return media;
}

function resultadoMedia(){
    var numero1 = Number(document.getElementById("numero1").value);
    var numero2 = Number(document.getElementById("numero2").value);
    var numero3 = Number(document.getElementById("numero3").value);
    var numero4 = Number(document.getElementById("numero4").value);
    var media = calculaMedia(numero1, numero2, numero3, numero4);

    document.getElementById("resultado").innerHTML = "Resultado: " + media;
}
