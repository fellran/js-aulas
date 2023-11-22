// CASE (ESCOLHA)
var numero1 = Number(prompt("Digite um numero"));
var operador = prompt("Digite o operador");
var numero2 = Number(prompt("Digite o seu segundo numero"));

switch (operador) {
    case "+":
        var resultado = numero1 + numero2;
        alert(`O resultado da operação é ${resultado}`);

        var novoCalculo = confirm("Deseja fazer um novo calculo");

        if (novoCalculo == true) {
            location.reload();
        };
        break;
    case "-":
        var resultado = numero1 = numero2;
        alert(`O resultado da operação é ${resultado}`);

        var novoCalculo = confirm("Deseja fazer um novo calculo");

        if (novoCalculo == true) {
            location.reload();
        };
        break;
    case "*":
        var resultado = numero1 * numero2;
        alert(`O resultado da operação é ${resultado}`);

        var novoCalculo = confirm("Deseja fazer um novo calculo");

        if (novoCalculo == true) {
            location.reload();
        };
        break;
    case "/":
        var resultado = numero1 + numero2;
        alert(`O resultado da operação é ${resultado}`);

        var novoCalculo = confirm("Deseja fazer um novo calculo");

        if (novoCalculo == true) {
            location.reload();
        };
        break;
    // case undefined:
    //     alert("Operador invalido tente novamente");
    //         location.reload();
    //         break;
    // case null:
    //     alert("Operador invalido tente novamente");
    //         location.reload();
    //         break;
    // case '':
    //     alert("Operador invalido tente novamente");
    //         location.reload();
    //         break;
    default:
        alert("Operador invalido tente novamente");
        location.reload();
        break;
};

// alert(`O resultado da operação é ${resultado}`);

// var novoCalculo = confirm("Deseja fazer um novo calculo");

// if (novoCalculo == true) {
//     location.reload();
// };