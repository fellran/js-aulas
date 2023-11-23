// REPETIÇOES
// WHILE (VERIFICA E DEPOIS FAZ)
var contador = 0;

while (contador <= 10){
    console.log(contador);
    contador++
    // contador = contador + 1;
};

// DO WHILE (FAZ E VERIFICA)
var cont = 0;

do{
    console.log(`fiz ${cont} vezes`);
    cont++
}
while( cont <= 10);

// FOR 
for(let controlador = 0; controlador <= 10; controlador++)
    console.log(controlador," - for é legal");

// FOR EACH
console.log("elementos");
var elementos = ["elementos-1, elementos-2, elementos-3"];

// FUNCTION PSEUDOFUNCTION OU ANONIMA
elementos.forEach((cadaElemento) => {
    console.log(" - ",elementos);
});