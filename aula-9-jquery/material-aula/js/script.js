// INSTALAÇÃO
// VISITE O SITE: https://jquery.com/download/
// CLICAR NA OPÇÃO "Download the uncompressed, development jQuery 3.7.1"
// ABERTO O ARQUIVO, APERTE COM O BOTAO DIREITO E SALVAR PAGINA COMO.. E SALVE EM UM LOCAL DE SUA PREFERENCIA!

// SELETOR Jquery = $(# ou . ELEMENTO)
var titulo = $("#tituloDaPagina").text("Jquery aula");
console.log(titulo);

// SEM Jquery
// var paragrafo = document.querySelector("#tituloDaPagina");

// paragrafo.addEventListener("mouseover", consoleListar)

// function consoleListar (){
//     console.log("Este é o texto do Site");
// };

var paragrafo = $("#textoDaPagina").on("mouseover", function() {
    console.log("Este é o texo do site")
});

// COMPORTAMENTO
// Jquery TEM CAPACIDADE DE AVALIAR VALORES NÃO DEFINIDOS E VAZIOS
var usuario = "Vitor";
var usuarioIndefinido = undefined;

var usuarioResultado = $("#testeIndefinido").text(usuarioIndefinido)

// ALGORITIMO CONTAGEM DE CARACTERES
var blocoDeTexto = $("#blocoDeTexto").on("input", function(){
    let blocoDeTextoValue = $("#blocoDeTexto").val();
    let resposta = $("#numCaracteres");

    var contagem = blocoDeTextoValue.length;
    resposta.text(contagem);
});