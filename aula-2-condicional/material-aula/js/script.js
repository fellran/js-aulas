// OPERADORES LOGICOS (COMPARAR)
// > MAIOR QUE
// < MENOR QUE
// != DIFERENTE (<>)
// = (= RECEBE, == COMPARR VALOR, === COMPARAR VALOR E TIPO)
// >= MAIOR OU IGUAL
// <= MENOR OU IGUAL

// OPERADORES ALTERNARIOS
// && E (DUAS CONDICOES DEVERAO SER IGUAIS EM RESULTADO)
// || OU (SE UMA DAS CONDIÇOES FOR VERDADEIRA SERA EXECUTADA)
// ! NÃO (SE NÃO FOR A CONDIÇÃO)

//CONDICIONAIS
// IF (SE SENAO)
if (false) {
    console.log("Sou verdadeiro");
} else {
    console.log("Sou falso");
};

// VERIFICAR IDADE
var idade = Number(prompt("Qual é a sua idade"));

if (idade >= 18) {
    alert("Seja Bem Vindo");
}
else {
    if (idade == 0) {
        alert("Idade invalida, tente novamente!");
        location.reload();
    } else {
        alert("Voçe não esta autorizado para entrar nesse site!");
        location.href = "https://www.google.com.br/?hl=pt-BR";
        // location.reload();
    };
};

//  EXEMPLO ABAIXO É UMA FORMA SIMPLIFICADA DO EXEMPLO ACIMA
// condicao ? bloco1 : bloco2 if ternario

