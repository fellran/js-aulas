// var empregado = document.getElementById(empregado);
var btnCalcular = document.querySelector("#btnCalcular");

btnCalcular.addEventListener("click", calcular);

function calcular(){
    let empregado = document.querySelector("#empregado").value;
    let filhos = document.querySelector("#filho").value;
    let salario = document.querySelector("#salario").value;
    let resultadoSpan = document.querySelector("#resultado");

    if(filho == 0 || salario == 0 || empregado == ''){
        resultadoSpan.innerHTML = `dados invalidos insira o dados corretos`;
    }
    else if(salario <= 806.80){
        var resultado = filhos * 41.37
        resultadoSpan.innerHTML = `o salario familia do empregado ${empregado} é de R$ ${resultado}`
    }
    else if(salario >= 806.81 && salario <= 1212.64){
        var resultado = filhos * 29.16;
        resultadoSpan.innerHTML = `o salario familia do empregado ${empregado} é de R$ ${resultado}`
    }
    else{
        resultadoSpan.innerHTML = `nao há salario familia para o empregado ${empregado}`;
    }
};