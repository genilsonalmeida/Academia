$(function(){
    var batalhas = localStorage.getItem("batalhas");
    batalhas = JSON.parse(batalhas);

    var tbRobos = localStorage.getItem("tbRobos");// Recupera os dados armazenados
    tbRobos = JSON.parse(tbRobos); // Converte string para objeto
    if(tbRobos == null){ // Caso não haja conteúdo, iniciamos um vetor vazio
        tbRobos = [];
    }

    listar(tbRobos,batalhas);
});

let cont = 0;
function listar(tbRobos, batalhas){
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

    for (var i = 0; i < batalhas.length; i++) {
        var r = JSON.parse(batalhas[i]);
        $("#tblListar tbody").append("<tr>");
        $("#tblListar tbody").append("<td>"+r.Robo1+"</td>");
        $("#tblListar tbody").append("<td>0</td>");
        $("#tblListar tbody").append("<td>"+"X"+"</td>");
        $("#tblListar tbody").append("<td>0</td>");
        $("#tblListar tbody").append("<td>"+r.Robo2+"</td>");
        $("#tblListar tbody").append("</tr>");
    }
        
}