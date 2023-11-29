class Filme {
    constructor(nomeFilme, descricaoFilme, dataFilme ,diretorFilme, categoriaFilme){
    this.nome = nomeFilme;
    this.descricao = descricaoFilme;
    this.data = dataFilme
    this.diretor = diretorFilme;
    this.categoria = categoriaFilme;
    };
};

// SELETORES
const btnFilme = document.querySelector("#btnFilme");
const btnListar = document.querySelector("#btnListar");
var filmes = []

btnFilme.addEventListener("click", cadastrar);
btnListar.addEventListener("click", listar);


function cadastrar(){
    let nomeInput = document.querySelector("#inome").value;
    let descricaoInput = document.querySelector("#idescricao").value;
    let dataFilme = document.querySelector("#idata").value;
    let diretorFilme = document.querySelector("#idiretor").value;
    let categoriaFilme = document.querySelector("#icategoria").value;

    filmes.push(new Filme(nomeInput, descricaoInput, dataFilme, diretorFilme, categoriaFilme));
};

function listar(){
    let divResposta = document.querySelector("#resposta");

    filmes.forEach((elemento) => {
                                 divResposta.innerHTML += `<div class="post">
                                 <h3>Nome - ${elemento.nome}</h3>
                                 <p>Descricao - ${elemento.descricao}</p>
                                 <p>Data - ${elemento.data}</p>
                                 <p>Diretor - ${elemento.diretor}</p>
                                 <p>Categoria - ${elemento.categoria}</p>
                                  </div>`
    })
};
