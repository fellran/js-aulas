// 1 - Crie um campo <input type="text"> e aplique os seguintes controles com base nos eventos abaixo:
// • No evento de foco modifique o background do input para amarelo.
// • Quando o campo perder o foco, recupere o seu respectivo valor e:
// o Caso o conteúdo contido no campo tenha menos de 3 caracteres o mesmo deve ter seu background alterado para vermelho.
// o Caso o conteúdo contido no campo tenha 3 caracteres ou mais o background deve ser alterado para verde.
// var itext = document.querySelector("#itext");

// itext.addEventListener("click", verificar);

// function verificar(td){
//     var texto = document.querySelector("#itext").value;

//     if (texto <= ){
//         td.style.backgroundColor = "#ff0000"
//     }
// };

// pegar inout
var input = document.querySelector("#inputText");

// add evento focus e perder foco
input.addEventListener("focus", mudaCor);
input.addEventListener("focusout", mudaCorVerifica);

    function mudaCor(){
        let mensagem = document.querySelector("#mensagem");
        input.style.backgroundColor = "yellow";
        mensagem.innerHTML = "Digite uma senha com mais de 3 digitos";
    };

    function mudaCorVerifica(){
        let inputValor = input.value;
        if (inputValor.length < 3){
            input.style.backgroundColor ="red";
            mensagem.innerHTML = "Digite uma senha valida";
        }
        else{
            input.style.backgroundColor = "green";
            mensagem.innerHTML = "A senha atinge os requesitos!";
        }
    };
// fazer o inout amarelo quando selecionar
// pegar a quantidade de caracteres
// verificar se tem 3 ou mais para verde
// verificar se menos que 3 para vermelho