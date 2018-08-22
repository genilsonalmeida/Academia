$(function(){
    var rodada = localStorage.getItem("rodada");
    rodada = JSON.parse(rodada);

    var batalhas = localStorage.getItem("batalhas");
    batalhas = JSON.parse(batalhas);

    var tbRobos = localStorage.getItem("tbRobos");// Recupera os dados armazenados
    tbRobos = JSON.parse(tbRobos); // Converte string para objeto
    if(tbRobos == null){ // Caso não haja conteúdo, iniciamos um vetor vazio
        tbRobos = [];
    }

    listar(tbRobos,batalhas, rodada);
});

let cont = 0;
function listar(tbRobos, batalhas, rodada){
    $("#tblListar").html("");
    $("#tblListar").html(
        "<thead>"+
        "   <tr>"+
        "   <th>Rodada 1</th>"+
        "   </tr>"+
        "</thead>"+
        "<tbody>"+
        "</tbody>"
    );


    for (var i = 0; i < rodada.length; i++) {
        var r = JSON.parse(rodada[i]);
        $("#tblListar tbody").append("<tr>");
        $("#tblListar tbody").append("<td>"+r.Batalha.Robo1+"</td>");
        $("#tblListar tbody").append("<td>0</td>");
        $("#tblListar tbody").append("<td>"+"X"+"</td>");
        $("#tblListar tbody").append("<td>0</td>");
        $("#tblListar tbody").append("<td>"+r.Batalha.Robo2+"</td>");
        $("#tblListar tbody").append("</tr>");
    }


    $("#tblListar2").html("");
    $("#tblListar2").html(
        "<thead>"+
        "   <tr>"+
        "   <th>Todas Batalhas</th>"+
        "   </tr>"+
        "</thead>"+
        "<tbody>"+
        "</tbody>"
    );
    for (var i = 0; i < batalhas.length; i++) {
        var r = JSON.parse(batalhas[i]);
        $("#tblListar2 tbody").append("<tr>");
        $("#tblListar2 tbody").append("<td>"+r.Robo1+"</td>");
        $("#tblListar2 tbody").append("<td>0</td>");
        $("#tblListar2 tbody").append("<td>"+"X"+"</td>");
        $("#tblListar2 tbody").append("<td>0</td>");
        $("#tblListar2 tbody").append("<td>"+r.Robo2+"</td>");
        $("#tblListar2 tbody").append("</tr>");
    }
        
}