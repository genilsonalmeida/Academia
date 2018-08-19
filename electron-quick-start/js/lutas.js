$(function(){
    var operacao = "A"; //"A"=Adição; "E"=Edição
    var indice_selecionado = -1; //Índice do item selecionado na lista
    var tbRobos = localStorage.getItem("tbRobos");// Recupera os dados armazenados
    tbRobos = JSON.parse(tbRobos); // Converte string para objeto
    if(tbRobos == null){ // Caso não haja conteúdo, iniciamos um vetor vazio
        tbRobos = [];
    }

    $("#frmCadastro").on("submit",function(){
        
        if(operacao == "A"){
            return adicionar(tbRobos);
        }else{
            return editar(tbRobos,indice_selecionado);
        }
    });

    listar(tbRobos);
    
    $("#tblListar").on("click", ".btnEditar", function(){
    operacao = "E";
    indice_selecionado = parseInt($(this).attr("alt"));
    var r = JSON.parse(tbRobos[indice_selecionado]);
    $("#inputRobo").val(r.Nome);
    $("#inputEquipe").val(r.Equipe);
    $("#inputRobo").focus();
    });
    
    $("#tblListar").on("click", ".btnExcluir",function(){
    indice_selecionado = parseInt($(this).attr("alt"));
    excluir(tbRobos, indice_selecionado);
    listar(tbRobos);
    });
});

var corpo = document.getElementById('corpo');

function adicionar(tbRobos){
    var robo = JSON.stringify({
        Nome   : $("#inputRobo").val(),
        Equipe     : $("#inputEquipe").val()
    });
    tbRobos.push(robo);
    localStorage.setItem("tbRobos", JSON.stringify(tbRobos));
    alert("Registro adicionado.");
    return true;
}

function editar(tbRobos,indice_selecionado){
    tbRobos[indice_selecionado] = JSON.stringify({
        Nome   : $("#inputRobo").val(),
        Equipe     : $("#inputEquipe").val()
        });//Altera o item selecionado na tabela
    localStorage.setItem("tbRobos", JSON.stringify(tbRobos));
    alert("Informações editadas.")
    operacao = "A"; //Volta ao padrão
    return true;
}

function excluir(tbRobos, indice_selecionado){
    tbRobos.splice(indice_selecionado, 1);
    localStorage.setItem("tbRobos", JSON.stringify(tbRobos));
    alert("Registro excluído.");
}

function listar(tbRobos){
    $("#tblListar").html("");
    $("#tblListar").html(
        "<thead>"+
        "   <tr>"+
        "   <th>Nome</th>"+
        "   <th>Equipe</th>"+
        "   <th>Editar</th>"+
        "   <th>Excluir</th>"+
        "   </tr>"+
        "</thead>"+
        "<tbody>"+
        "</tbody>"
    );
    for(var i in tbRobos){
        var r = JSON.parse(tbRobos[i]);
        $("#tblListar tbody").append("<tr>");
        $("#tblListar tbody").append("<td>"+r.Nome+"</td>");
        $("#tblListar tbody").append("<td>"+r.Equipe+"</td>");
        $("#tblListar tbody").append("<td><a alt='"+i+"'class='btnEditar'>Editar</a></td>");
        $("#tblListar tbody").append("<td><a alt='"+i+"' class='btnExcluir'>Excluir</a></td>");
        $("#tblListar tbody").append("</tr>");
    }
}

function finalizar()
{
var r=confirm("Deseja mesmo finalizar o cadastro?");
if (r==true)
  {
  location.href="./tabela.html";
  }
}