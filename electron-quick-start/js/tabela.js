$(function(){
    var tbRobos = localStorage.getItem("tbRobos");// Recupera os dados armazenados
    tbRobos = JSON.parse(tbRobos); // Converte string para objeto
    if(tbRobos == null){ // Caso não haja conteúdo, iniciamos um vetor vazio
        tbRobos = [];
    }
    //var nomeRobos = new Array();
    listar(tbRobos);
});

let cont = 0;
function listar(tbRobos){
    $("#tblListar").html("");
    $("#tblListar").html(
        "<thead>"+
        "   <tr>"+
        "   <th>Nº</th>"+
        "   <th>Nome</th>"+
        "   <th>Equipe</th>"+
        "   <th>Pontos</th>"+
        "   </tr>"+
        "</thead>"+
        "<tbody>"+
        "</tbody>"
    );
    for(var i in tbRobos){
        cont = cont + 1;
        var r = JSON.parse(tbRobos[i]);
        $("#tblListar tbody").append("<tr>");
        $("#tblListar tbody").append("<td>"+cont+"</td>");
        $("#tblListar tbody").append("<td>"+r.Nome+"</td>");
        $("#tblListar tbody").append("<td>"+r.Equipe+"</td>");
        $("#tblListar tbody").append("<td>"+r.Pontos+"</td>");
        $("#tblListar tbody").append("</tr>");
    }
    //gerarBatalha(tbRobos);
}

/*function gerarRodada(){
    var batalha = JSON.stringify({
        Lutador1   : r.Nome,
        Lutador2     : r.Nome
    });
    tbRodada.push(batalha);
    localStorage.setItem("tbRodada", JSON.stringify(tbRodada));
    return true;
}

function gerarBatalha(tbRobos){
    for(var a = 0; a < tbRobos.length; a++){
        var r = JSON.parse(tbRobos[a]);
        nomeRobos.push(r.Nome);
    }
}*/