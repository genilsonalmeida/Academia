$(function(){
    var tbRobos = localStorage.getItem("tbRobos");// Recupera os dados armazenados
    tbRobos = JSON.parse(tbRobos); // Converte string para objeto
    if(tbRobos == null){ // Caso não haja conteúdo, iniciamos um vetor vazio
        tbRobos = [];
    }

    var batalhas = localStorage.getItem("batalhas");
    batalhas = JSON.parse(batalhas);
    if(batalhas == null){ // Caso não haja conteúdo, iniciamos um vetor vazio
        batalhas = [];
    }

    var rodada = localStorage.getItem("rodada");
    rodada = JSON.parse(rodada);
    if(rodada == null){ // Caso não haja conteúdo, iniciamos um vetor vazio
        rodada = [];
    }

    var rodadas = localStorage.getItem("rodadas");
    rodadas = JSON.parse(rodadas);
    if(rodadas == null){ // Caso não haja conteúdo, iniciamos um vetor vazio
        rodadas = [];
    }
    
    gerarBatalhas(tbRobos, batalhas, rodada);

    var quantRobo = tbRobos.length - 1;
    
    for(var i = 1; i <= quantRobo; i++){
        
        gerarRodada(batalhas, rodada);
        
        var rodadaa = JSON.stringify({
            Rodada : rodada
        });
        rodadas.push(rodadaa);
        localStorage.setItem("rodadas", JSON.stringify(rodadas));

    }
    
});

function gerarBatalhas(tbRobos, batalhas){
    for(var i = 0; i < tbRobos.length; i++){
        for(var j = 1; j < tbRobos.length; j++) {
            var r = JSON.parse(tbRobos[i]);
            var r2 = JSON.parse(tbRobos[j]);         
            if(r.Nome == r2.Nome){
                continue;
            } else if(r.Nome != r2.Nome){
                adicionarBatalha(batalhas, r.Nome, r2.Nome);
            }
        }
    }
}

function adicionarBatalha(batalhas, r, r2){
    var batalha = JSON.stringify({
        Robo1 : r,
        Robo2 : r2
    });
    //console.log(batalha);
    if(verificarBatalhas(batalha,batalhas)){ 
      //  console.log("Deu certo");
        batalhas.push(batalha);
        localStorage.setItem("batalhas", JSON.stringify(batalhas));
    }
}

function verificarBatalhas(batalha, batalhas){
    var analise = true;
    batalha = JSON.parse(batalha);
    //console.log(batalha.Robo1);
    //console.log(batalha.Robo2);
    for(var i = 0; i < batalhas.length; i++){
        var b = JSON.parse(batalhas[i]);
        //console.log(b.Robo1);
        //console.log(b.Robo2);
        if(((batalha.Robo1 == b.Robo1) && (batalha.Robo2 == b.Robo2)) ||
            ((batalha.Robo1 == b.Robo2) && (batalha.Robo2 == b.Robo1))
        ){
            analise = false;
            break;
        } else {
            analise = true;
        }
    }
    //console.log(analise);
    return analise;
}

function verificarRodada(batalha, rodada){
    var analise = true;
    batalha = JSON.parse(batalha);
    for(var i = 0; i < rodada.length; i++){
        var b = JSON.parse(rodada[i]);
        if((batalha.Batalha.Robo1 == b.Batalha.Robo1) || (batalha.Batalha.Robo1 == b.Batalha.Robo2)){
            analise = false;
            break;
        } else {
            analise = true;
        }
    }
   // console.log(analise);
    return analise;
}

function gerarRodada(batalhas, rodada) {
    for(var i = 0; i < batalhas.length; i++){
        var bat = JSON.parse(batalhas[i]);
        var batalha = JSON.stringify({
            Batalha : bat
        });
        if(verificarRodada(batalha,rodada)){
            rodada.push(batalha);
            localStorage.setItem("rodada", JSON.stringify(rodada));
            removerDaBatalha(rodada, batalhas);
        }
    }
}

function removerDaBatalha(rodada, batalhas){
    for(var i = 0; i < rodada.length; i++){
        var r = JSON.parse(rodada[i]);
        for(var j = 0; j < batalhas.length; j++){
            var b = JSON.parse(batalhas[j]);
            if(b.Robo1 == r.Batalha.Robo1 && b.Robo2 == r.Batalha.Robo2){
                batalhas.splice(j, 1);
                //console.log(batalhas);
                localStorage.setItem("batalhas", JSON.stringify(batalhas));
                //console.log(batalhas);
            }
        }
    }
}


function proximo()
{
    location.href="./tabela.html";
}