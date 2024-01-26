var usuarios = [];

function recebeDados(){
    var usuario = [4];

    usuario[0] = document.getElementById('nome').value;
    usuario[1] = document.getElementById('cpf').value;
    usuario[2] = document.getElementById('nascimento').value;
    usuario[3] = document.getElementById('endereco').value;

    if(elementoNoArray(usuario[1]) === -1){
        usuarios.push(usuario);
        window.alert("Usuário cadastrado com sucesso!");
    } else {
        window.alert("Usuário já cadastrado!");
    }
}

function elementoNoArray(cpf){
    for (var i = 0; i < usuarios.length; i++) {
        if(usuarios[i][1] === cpf){
            return i;
        }
    }
    return -1;
}

function imprimirUsuarios(){
    var msg = "";
    for (usuario of usuarios) {
        msg += "Nome: " + usuario[0] + "<br>";
        msg += "CPF: " + usuario[1] + "<br>";
        msg += "Data de Nascimento: " + usuario[2] + "<br>";
        msg += "Endereço: " + usuario[3] + "<br> <br>";
    }
    document.getElementById('imprimeUsuarios').innerHTML = msg;
}

function limparTela(){
    document.getElementById('imprimeUsuarios').innerHTML = "";
}

function buscarUsuario(){
    var msg = "";
    var cpf = document.getElementById('pesquisar').value;
    var indice = elementoNoArray(cpf); 

    if(indice === -1){
        window.alert("Usuário não cadastrado!");
    } else {
        msg += "Nome: " + usuarios[indice][0] + "<br>";
        msg += "CPF: " + usuarios[indice][1] + "<br>";
        msg += "Data de Nascimento: " + usuarios[indice][2] + "<br>";
        msg += "Endereço: " + usuarios[indice][3] + "<br>";
    }

    document.getElementById('buscarCadastro').innerHTML = msg;
}

function deletarUsuario(){
    var cpf = document.getElementById('pesquisar').value;
    var indice = elementoNoArray(cpf);
    if(indice === -1){
        window.alert("Usuário não cadastrado!");
    } else {
        usuarios.splice((indice), 1);
        window.alert("Usuário removido!");
    }
}
 