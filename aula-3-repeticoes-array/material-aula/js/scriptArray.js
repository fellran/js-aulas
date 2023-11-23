// ARRAY
var estoqueProdutos = ["tenis", "bola", "video game"];
console.log(estoqueProdutos);
// INDICE
console.log(estoqueProdutos[1]);

// METODO
// var frutas = Array();
// frutas[0] = "Banana";
// frutas[1] = "Abaicaxi";
// frutas[2] = "Laranja";
// console.log(frutas);

// COMANDOS ARRAY
// push adiciona um elemento na ultima posicao
estoqueProdutos.push("Chocolate");
console.log(estoqueProdutos);

// unshift adiciona como primeiro elemento da lista
estoqueProdutos.unshift("Refrigerante");
console.log(estoqueProdutos);

// length - quantidade de elementos no array
console.log(`Existem ${estoqueProdutos.length}`);

// pop - remover um elemento na ultima posição
estoqueProdutos.pop();
console.log(estoqueProdutos);

// shift - remove o primeiro elemento array
estoqueProdutos.shift();
console.log(estoqueProdutos);

// splice - (indice, quantos indices, novo elemento)
estoqueProdutos.splice(1,2,"Chocolate");
console.log(estoqueProdutos);

// includes - busca um item no array
console.log(estoqueProdutos.includes("Chocolate"));