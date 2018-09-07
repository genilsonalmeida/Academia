$(function () {

    var tbRobos = localStorage.getItem("tbRobos");// Recupera os dados armazenados
    tbRobos = JSON.parse(tbRobos); // Converte string para objeto
    if (tbRobos == null) { // Caso não haja conteúdo, iniciamos um vetor vazio
        tbRobos = [];
    }

    var batalhas = localStorage.getItem("batalhas");
    batalhas = JSON.parse(batalhas);
    if (batalhas == null) { // Caso não haja conteúdo, iniciamos um vetor vazio
        batalhas = [];
    }

    listar(tbRobos, batalhas);
});

function listar(tbRobos, batalhas) {
    var nome1;
    var nome2;
    $("#tblListar").html("");
    $("#tblListar").html(
        "<thead>" +
        "   <tr>" +
        "   </tr>" +
        "</thead>" +
        "<tbody>" +
        "</tbody>"
    );
    for (var j = 0; j < (batalhas.length / 2); j++) {
        $("#tblListar tbody").append("<tr>");
        $("#tblListar tbody").append("<h3>Rodadas " + (j + 1) + "</h3>");
        $("#tblListar tbody").append("</tr>");
        
        for (var i = 0; i < batalhas.length; i++) {
            var bat = JSON.parse(batalhas[i]);
            for(var a = 1; a < batalhas.length; a++){
                var bat2 = JSON.parse(batalhas[a]);
                if ((bat.Robo1 != bat2.Robo1 && bat.Robo1 != bat2.Robo2) && (bat.Robo2 != bat2.Robo1 && bat.Robo2 != bat2.Robo2)) {
                //if (nome1 != bat.Robo1 || nome2 != bat.Robo2) {
                    $("#tblListar tbody").append("<tr>");
                    $("#tblListar tbody").append("<td>" + bat.Robo1 + "</td>");
                    $("#tblListar tbody").append("<td>0</td>");
                    $("#tblListar tbody").append("<td>" + "X" + "</td>");
                    $("#tblListar tbody").append("<td>0</td>");
                    $("#tblListar tbody").append("<td>" + bat.Robo2 + "</td>");
                    $("#tblListar tbody").append("</tr>");
                } else {
                    continue;
                }
            }
        }
    }

}