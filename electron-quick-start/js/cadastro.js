var corpo = document.getElementById('corpo');

function save(){
    nameEquipe = document.getElementById('inputEquipe').value.toString();
    nameRobo = document.getElementById('inputRobo').value.toString();
    
    localStorage.setItem(nameRobo,nameEquipe);

    document.getElementById('inputRobo').value = "";
    document.getElementById('inputEquipe').value = "";

    criarElemento();
}

function criarElemento() {
    corpo.innerHTML = [
        '<tr>' +
        '<td>' + nameRobo + '</td>' +
        '<td>' + nameEquipe + '</td>' +
        '<td><a href="#">Editar</a></td>' +
        '<td><a href="#">Excluir</a></td>' 
    ]
}