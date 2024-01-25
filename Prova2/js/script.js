var usuarios = [];

function recebeDados(){
    var usuario = [4];

    usuario[0] = document.getElementById('nome').value;
    usuario[1] = document.getElementById('cpf').value;
    usuario[2] = document.getElementById('nascimento').value;
    usuario[3] = document.getElementById('endereco').value;

    if(elementoNoArray(usuario[1]) != -1){
        usuarios.push(usuario);
        window.alert("Usuário cadastrado com sucesso!");
    } else {
        window.alert("Usuário já cadastrado!");
    }
}

function elementoNoArray(cpf){
    var indice = 0;
    for (user of usuarios) {
        var i = user.indexOf(cpf);
        if (i != -1) {
            return -1;
        } else {
            return indice;
        }
        indice++;
    }
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
    var cpf = document.getElementById('pesquisar');

    var indice = elementoNoArray(cpf);

    if(indice != -1){
        msg += "Nome: " + usuarios[indice][0] + "<br>";
        msg += "CPF: " + usuarios[indice][1] + "<br>";
        msg += "Data de Nascimento: " + usuarios[indice][2] + "<br>";
        msg += "Endereço: " + usuarios[indice][3] + "<br>";
    } else {
        window.alert("Usuário não cadastrado!");
    }

    document.getElementById('buscarCadastro').innerHTML = msg;
}

function deletarUsuario(){
    var cpf = document.getElementById('pesquisar');
    var indice = elementoNoArray(cpf);
    if(indice != -1){
        usuarios.splice((indice+1), 1);
        window.alert("Usuário removido!");
    } else {
        window.alert("Usuário não cadastrado!");
    }
}
 