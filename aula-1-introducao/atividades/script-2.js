// 2-Sucessor e antecessor, faça uma aplicação que colete um número digitado pelo usuário e logo em seguida mostre em ordem: o numero anterior a ele, o próprio número escolhido e
//  o número sucessor a ele
alert("decubra o antecessor e sucessor");
var numero = Number(prompt("digite um numero"))

var antecessor = numero - 1;
var sucessor = numero + 1;

alert(`O ${antecessor} é antecessor de ${numero} ,e o ${sucessor} é sucessor do ${numero}`);