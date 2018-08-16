
var nome, lutador,competidor,competidores = [];

form = document.querySelector('form');
tbody = document.querySelector('tbody');    
    
function limparCamposDoForm(){

}

function adicionarCompetidorAListaDeCompetidores(){
    
    tr = document.createElement('tr');

    roboTd = document.createElement('td');
    equipeTd = document.createElement('td');
    editaTd = document.createElement('td');
    removeTd = document.createElement('td');

    editaI = document.createElement('i');
    removeI = document.createElement('i');
    
    editaI.classList.add("far fa-edit");
    removeI.classList.add("far fa-trash-alt");

    roboTd.textContent = form.robo.value;
    equipeTd.textContent = form.equipe.value;

    editaTd.appendChild(editaI);
    removeTd.appendChild(removeI);

    tr.appendChild(roboTd);
    tr.appendChild(equipeTd);
    tr.appendChild(editaTd);
    tr.appendChild(removeTd);

    tbody.appendChild(tr);
    
    
}

document.getElementById('cadastrar').addEventListener('click',function(event){
    event.preventDefault();
    if(form.robo.value != '' && form.equipe.value != ''){
        adicionarCompetidorAListaDeCompetidores();
        form.reset();
    }
});
