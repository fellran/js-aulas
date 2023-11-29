// REPLACE / REPLACEALL
var frase = "Olá mundo, o mundo é muito legal";
console.log(frase);

console.log(frase.replace("mundo", "bacana"));
console.log(frase.replaceAll("mundo", "bacana"));

// SET ATRIBUTE
document.querySelector("span").setAttribute("style", "color: blue;");

// CLASS LIST
//  document.querySelector("#classlist").classList.remove("claro");
//  document.querySelector("#classlist").classList.add("claro");
// var elemento = Document.querySelector("#classlist")
// CONTAINS SE CONTEM A CLASSE
// TOGGLE TROCA DE CLASSE

// if(elemento.classList.contains("claro")){
     // elemento.classList.toggle("escuro");
//     elemento.classList.replace("claro", "escuro");
// };

// INDEX OF / INCLUDES
var frutas = ["Morango", "Banana", "Laranja", "Uva"]

// INCLUDES -. TRUE E FALSE
console.log(frutas.includes("Morango"));
// INDEXOF -> O VALOR INDECE DO  ARRAY (CASO NÃO EXISTA, -1)
console.log(frutas.indexOf("Laranja"));

if(frutas.indexOf("Abacaxi" == -1)){
    console.log("não achei")
};

// SET TIMEOUT
function msg(){
    // PROMISE - SE ASSEMELHA A UMA FUNÇÃO,POREM ELE CONFIGURA SUCESSO E ERRO
    return new Promise ((teste) => {
        setTimeout(() => {
           console.log("Bom Dia") 
        }, 3000);
        teste()
    })
};

async function carregando(){
    setTimeout(() => {
        console.log("Bom dia!");
    }, 5000);

    await msg();
};

carregando();