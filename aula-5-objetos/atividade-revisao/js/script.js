// faça uma página de cadastramento de filmes onde o usuario possa salvar um filme e suas informações como nome, 
// descrição,data, diretor e categoria e liste ela de alguma forma em algum elemento HTML!

class Filme {
    constructor(nomeFilme, descricaoFilme, dataFilme, diretorFilme ,categoriaFilme){
        this.nome = nomeFilme;
        this.descricao = descricaoFilme;
        this.data = dataFilme;
        this.diretor = diretorFilme;
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
   var diretorInput = document.querySelector("#idiretor").value;
   var categoriaInput = document.querySelector("#icategoria").value;
   var resposta = document.querySelector("#resposta");

    // PROCESSAR DADOS
    var filme = new Filme(nomeInput, descricaoInput, dataInput, diretorInput ,categoriaInput);

    // SAIDA DE DADOS
    resposta.innerHTML = `<div class="post">
                            <h3>Nome - ${filme.nome}</h3>
                            <p>Descricao - ${filme.descricao}</p>
                            <p>Data - ${filme.data}</p>
                            <p>Diretor - ${filme.diretor}</p>
                            <p>Categoria - ${filme.categoria}</p>
                            </div>`
};
