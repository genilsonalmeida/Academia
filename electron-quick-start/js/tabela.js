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
    };

    listar(tbRobos);
    lutas(tbRobos, batalhas);
});

let cont = 0;
function listar(tbRobos) {
    $("#tblListar").html("");
    $("#tblListar").html(
        "<thead>" +
        "   <tr>" +
        "   <th>Nº</th>" +
        "   <th>Nome</th>" +
        "   <th>Equipe</th>" +
        "   <th>Pontos</th>" +
        "   </tr>" +
        "</thead>" +
        "<tbody>" +
        "</tbody>"
    );
    for (var i in tbRobos) {
        cont = cont + 1;
        var r = JSON.parse(tbRobos[i]);
        $("#tblListar tbody").append("<tr>");
        $("#tblListar tbody").append("<td>" + cont + "</td>");
        $("#tblListar tbody").append("<td>" + r.Nome + "</td>");
        $("#tblListar tbody").append("<td>" + r.Equipe + "</td>");
        $("#tblListar tbody").append("<td>" + r.Pontos + "</td>");
        $("#tblListar tbody").append("</tr>");
    }
}

function lutas(tbRobos, batalhas) {
    var nome1;
    var nome2;
    $("#tblLutas").html("");
    $("#tblLutas").html(
        "<thead>" +
        "   <tr>" +
        "   </tr>" +
        "</thead>" +
        "<tbody>" +
        "</tbody>"
    );
    for (var j = 0; j < (batalhas.length / 2); j++) {
        $("#tblLutas tbody").append("<tr>");
        $("#tblLutas tbody").append("<h3>Rodadas " + (j + 1) + "</h3>");
        $("#tblLutas tbody").append("</tr>");

        for (var i = 0; i < batalhas.length; i++) {
            var bat = JSON.parse(batalhas[i]);
            for (var a = 1; a < batalhas.length; a++) {
                var bat2 = JSON.parse(batalhas[a]);
                if ((bat.Robo1 != bat2.Robo1 && bat.Robo1 != bat2.Robo2) && (bat.Robo2 != bat2.Robo1 && bat.Robo2 != bat2.Robo2)) {
                    if (nome1 != bat.Robo1 || nome2 != bat.Robo2) {
                        $("#tblLutas tbody").append("<tr>");
                        $("#tblLutas tbody").append("<td id='primeiroPlacar'>" + bat.Robo1 + "</td>");
                        $("#tblLutas tbody").append("<td id='placar1'><input type='text' name='placarUm' class='form-control' id='placarUm' placeholder='0' required></td>");
                        $("#tblLutas tbody").append("<td>" + "X" + "</td>");
                        $("#tblLutas tbody").append("<td id='placar2'><input type='text' name='placarUm' class='form-control' id='placarDois' placeholder='0' required></td>");
                        $("#tblLutas tbody").append("<td id='segundoPlacar'>" + bat.Robo2 + "</td>");
                        $("#tblLutas tbody").append("</tr>");
                        nome1 = bat.Robo1;
                        nome2 = bat.Robo2;
                    } else {
                        continue;
                    }
                }
            }
        }
    }

}
