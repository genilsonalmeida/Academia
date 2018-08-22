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
    /*for(var i in tbRobos){
        var r = JSON.parse(tbRobos[i]);
        $("#tblListar tbody").append("<tr>");
        $("#tblListar tbody").append("<td>"+r.Nome+"</td>");
        $("#tblListar tbody").append("<td>"+r.Pontos+"</td>");
        $("#tblListar tbody").append("<td>"+"X"+"</td>");
        r = JSON.parse(tbRobos[i++]);
        $("#tblListar tbody").append("<td>"+r.Pontos+"</td>");
        $("#tblListar tbody").append("<td>"+r.Nome+"</td>");
        $("#tblListar tbody").append("</tr>");
    }
    for(var i = 0; i < tbRobos.length; i = i+2){
        var r = JSON.parse(tbRobos[i]);
        $("#tblListar tbody").append("<tr>");
        $("#tblListar tbody").append("<td>"+r.Nome+"</td>");
        $("#tblListar tbody").append("<td>"+r.Pontos+"</td>");
        $("#tblListar tbody").append("<td>"+"X"+"</td>");
        var r2 = JSON.parse(tbRobos[i+1]);
        if(r2 == null){
            $("#tblListar tbody").append("</tr>");
        } else {
            $("#tblListar tbody").append("<td>"+r2.Pontos+"</td>");
            $("#tblListar tbody").append("<td>"+r2.Nome+"</td>");
            $("#tblListar tbody").append("</tr>");
        }
    }*/

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

    /*for(var i = 0; i < tbRobos.length; i++) {
        for(var j = 1; j < tbRobos.length; j++) {
            var r = JSON.parse(tbRobos[i]);
            var r2 = JSON.parse(tbRobos[j]);
            $("#tblListar tbody").append("<tr>");
            $("#tblListar tbody").append("<td>"+r.Nome+"</td>");
            $("#tblListar tbody").append("<td>"+r.Pontos+"</td>");
            $("#tblListar tbody").append("<td>"+"X"+"</td>");
            if(r2 == null){
                $("#tblListar tbody").append("</tr>");
            } else {
                $("#tblListar tbody").append("<td>"+r2.Pontos+"</td>");
                $("#tblListar tbody").append("<td>"+r2.Nome+"</td>");
                $("#tblListar tbody").append("</tr>");
            }
        }
    }

    for(var i = 0; i < tbRobos.length; i++){
        for(var j = 1; j < tbRobos.length; j++) {
            var r = JSON.parse(tbRobos[i]);
            var r2 = JSON.parse(tbRobos[j]);         
            if(r.Nome == r2.Nome){
                continue;
            } else if(r.Nome != r2.Nome){
                adicionar(batalhas, r.Nome, r2.Nome);
            }
        }
    }
}
/*function adicionar(batalhas, r, r2){
    var batalha = JSON.stringify({
        Robo1 : r,
        Robo2 : r2
    });
    console.log(batalha);
    if(verificarArray(batalha,batalhas)){ 
        console.log("Deu certo");
        batalhas.push(batalha);
        localStorage.setItem("batalhas", JSON.stringify(batalhas));
    }
}

function verificarArray(batalha, batalhas){
    var analise = true;
    for(var i = 0; i < batalhas.length; i++){
        var b = JSON.parse(batalhas[i]);
        console.log(b);
        if(batalha.Robo1 && batalha.Robo2 == b.Robo1 && b.Robo2 ||
            batalha.Robo1 && batalha.Robo2 == b.Robo2 && b.Robo1 ||
            batalha.Robo2 && batalha.Robo1 == b.Robo1 && b.Robo2 ||
            batalha.Robo2 && batalha.Robo1 == b.Robo2 && b.Robo1
        ){
            analise = false;
        } else {
            analise = true;
        }
    }
    console.log(analise);
    return analise;
}*/