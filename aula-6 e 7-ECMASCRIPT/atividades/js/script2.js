const btnTrocar = document.querySelector("#btnTrocar");
const btnTrocarTodos = document.querySelector("#btnTrocarTodos");

btnTrocar.addEventListener("click", trocarUmTermo);
btnTrocarTodos.addEventListener("click", trocarTodosTermo);

function seletores(){
    let blocoTexto = document.querySelector("#blocoTexto").value;
    let removerTermo = document.querySelector("#removerTermo").value;
    let adicionarTermo = document.querySelector("#adicionarTermo").value;

    let blocoDeTextoFormatar = blocoTexto.value.replace(removerTermo, adicionarTermo);
    
    blocoTexto.value = blocoDeTextoFormatar;
};

function trocarUmTermo(){
    let blocoTexto = document.querySelector("#blocoTexto").value;
    let removerTermo = document.querySelector("#removerTermo").value;
    let adicionarTermo = document.querySelector("#adicionarTermo").value;

    let blocoDeTextoFormatar = blocoTexto.value.replace(removerTermo, adicionarTermo);
    
    blocoTexto.value = blocoDeTextoFormatar;
};

function trocarTodosTermo (){

};
 