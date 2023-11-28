
// Crie um objeto chamado "carro" que tenha as seguintes propriedades:
// marca: string
// modelo: string
// ano: número
// cor: string
// velocidadeMaxima: número
// velocidadeAtual: número (inicialmente 0)

 class Carro{
     marca;
     modelo;
     ano;
     cor;
     carroVelocidadeMaxima;
     carroVelocidadeAtual;

     // Em seguida, crie um método chamado "acelerar" que receba um número como argumento e aumente a velocidade atual do carro por esse número.Certifique-se de que a velocidade atual não ultrapasse a velocidade
 // máxima do carro.
 acelerar(aumentar){
     if (aumentar < this.carroVelocidadeMaxima){
         aumentar = aumentar + this.carroVelocidadeAtual
         this.carroVelocidadeAtual = aumentar;
         return("velocidade adicionada "+aumentar+ "Km");
     }
     else{
         return("limite de velocidade maxima utrapassado");
     }
 };
 };

 var carro1 = new Carro();
 carro1.marca = "Fiat";
 carro1.modelo = "Uno";
 carro1.ano = "1999";
 carro1.cor = "preto";
 carro1.carroVelocidadeMaxima = 400;
 carro1.carroVelocidadeAtual = 0;





