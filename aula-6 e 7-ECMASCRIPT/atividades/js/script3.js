var jogos = ["Call Of Duty", "GTA", "DOOM", "Resident Evill", "Alone in the Dark 98", "God Of War"]; 

const btnPesquisar = document.querySelector("#btnPesquisar");

btnPesquisar.addEventListener("click", pesquisar);

function pesquisar(){
    let pesquisarInput = document.querySelector("#pesquisa").value;
    let resposta = document.querySelector("#resposta")
    var resultado = jogos.includes(pesquisarInput);

    if(resultado == true){
        resposta.innerHTML = `Jogo encontrado! O Jogo pesquisado foi ${pesquisarInput}`;
    }
    else{
        resposta.innerHTML = `Jogo não encontrado!`;
    }
};


