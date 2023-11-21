// caixas de texto
// alert("olá mundo");
// confirm("Bom Dia, o dia está bom?");
// prompt("Qual é a sua Idade");

// console.log("Olha que legal!");

//variaveis
// let "temporaria", é sobrescrevivel.Escopo local
function letTeste(){
    let numero = 0;
    numero = 1;
    console.log(numero);
}

// var variavel, recebe valores e é sobrescrevivel. Escopo Global
var nome = "vitor";

// const constante, não é sobrescrevivel. Escopo Global
const pi = 3.14;

const name = prompt("qual é o seu nome?");

// concatenaçao
alert("seja bem vindo(a), " + name);

// comando abaixo utiliza crase
// ${} desconsidera elemento como texto!
alert(`${name}, aproveite a estadia!`);

// Tipos de valores
// String
var texto = "Olá mundo";
// Number
var numberBacana = 10;
// Booleano
var ligado = true;
// Objeto
var carro = [atributo = "algo"];