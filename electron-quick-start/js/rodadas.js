$(function(){
    var tbRobos = localStorage.getItem("tbRobos");// Recupera os dados armazenados
    tbRobos = JSON.parse(tbRobos); // Converte string para objeto
    if(tbRobos == null){ // Caso não haja conteúdo, iniciamos um vetor vazio
        tbRobos = [];
    }

    listar(tbRobos);
});

let cont = 0;
function listar(tbRobos){
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
    for(var i in tbRobos){
        var r = JSON.parse(tbRobos[i]);
        $("#tblListar tbody").append("<tr>");
        $("#tblListar tbody").append("<td>"+"Jack"+"</td>");
        $("#tblListar tbody").append("<td>0</td>");
        $("#tblListar tbody").append("<td>"+"X"+"</td>");
        $("#tblListar tbody").append("<td>0</td>");
        $("#tblListar tbody").append("<td>"+"Bob Lee"+"</td>");
        $("#tblListar tbody").append("</tr>");
    }
}