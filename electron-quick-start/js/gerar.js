$(function(){

    var rodada = localStorage.getItem("rodada");
    rodada = JSON.parse(rodada);
    if(rodada == null){ // Caso não haja conteúdo, iniciamos um vetor vazio
        rodada = [];
    }

    var batalhas = localStorage.getItem("batalhas");
    batalhas = JSON.parse(batalhas);
    if(batalhas == null){ // Caso não haja conteúdo, iniciamos um vetor vazio
        batalhas = [];
    }

    var tbRobos = localStorage.getItem("tbRobos");// Recupera os dados armazenados
    tbRobos = JSON.parse(tbRobos); // Converte string para objeto
    if(tbRobos == null){ // Caso não haja conteúdo, iniciamos um vetor vazio
        tbRobos = [];
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
    
    for(var i = 0; i < batalhas.length; i++){
        var bat = JSON.parse(batalhas[i]);
        var batalha = JSON.stringify({
            Batalha : bat
        });
        if(verificarRodada(batalha,rodada)){
            rodada.push(batalha);
            localStorage.setItem("rodada", JSON.stringify(rodada));
        }
    }
    
});

function verificarRodada(batalha, rodada){
    var analise = true;
    batalha = JSON.parse(batalha);
    console.log(batalha);
    for(var i = 0; i < rodada.length; i++){
        var b = JSON.parse(rodada[i]);
        console.log(b);
        if((batalha.Batalha.Robo1 == b.Batalha.Robo1) || (batalha.Batalha.Robo1 == b.Batalha.Robo2)){
            analise = false;
            break;
        } else {
            analise = true;
        }
    }
    console.log(analise);
    return analise;
}

function adicionar(batalhas, r, r2){
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
    batalha = JSON.parse(batalha);
    console.log(batalha.Robo1);
    console.log(batalha.Robo2);
    for(var i = 0; i < batalhas.length; i++){
        var b = JSON.parse(batalhas[i]);
        console.log(b.Robo1);
        console.log(b.Robo2);
        if(((batalha.Robo1 == b.Robo1) && (batalha.Robo2 == b.Robo2)) ||
            ((batalha.Robo1 == b.Robo2) && (batalha.Robo2 == b.Robo1))
        ){
            analise = false;
            break;
        } else {
            analise = true;
        }
    }
    console.log(analise);
    return analise;
}

function proximo()
{
    location.href="./tabela.html";
}