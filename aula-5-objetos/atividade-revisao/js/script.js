// faça uma página de cadastramento de filmes onde o usuario possa salvar um filme e suas informações como nome, 
// descrição,data, diretor e categoria e liste ela de alguma forma em algum elemento HTML!

class Filme {
    constructor(nomeFilme, descricaoFilme, dataFilme, categoriaFilme){
        this.nome = nomeFilme;
        this.descricao = descricaoFilme;
        this.data = dataFilme;
        this.categoria = categoriaFilme
    }

}

var btnFilme = document.querySelector("#btnFilme");

btnFilme.addEventListener("click", cadastro);

function cadastro(){
   // ENTRADA DE DADOS
   var nomeInput = document.querySelector("#inome").value;
   var descricaoInput = document.querySelector("#idescricao").value;
   var dataInput = document.querySelector("#idata").value;
   var categoriaInput = document.querySelector("#icategoria").value;
   var resultado = document.querySelector("#resultado");

    // PROCESSAR DADOS
    var filme = new Filme(nomeInput, descricaoInput, dataInput, categoriaInput);

    // SAIDA DE DADOS
    resposta.innerHTML = `<div class="post">
                            </div>`
};
