
// Crie um objeto chamado "carro" que tenha as seguintes propriedades:
// marca: string
// modelo: string
// ano: número
// cor: string
// velocidadeMaxima: número
// velocidadeAtual: número (inicialmente 0)

class Carro {
    constructor(carroMarca, carroModelo, carroAno, carroVelocidadeMaxima, carroVelocidadeAtual){
        this.marca = carroMarca;
        this.modelo = carroModelo;
        this.ano = carroAno;
        this.velocidadeMaxima = carroVelocidadeMaxima;
        this.velocidadeAtual = carroVelocidadeAtual;
    }

// Em seguida, crie um método chamado "acelerar" que receba um número como argumento e aumente a velocidade atual do carro por esse número.Certifique-se de que a velocidade atual não ultrapasse a velocidade
// máxima do carro.
    acelerar(aumentar){
        if (aumentar < carroVelocidadeMaxima){
            this.aumentar = this.aumentar + carroVelocidadeAtual
            return("velocidade adicionada");
        }
        else{
            return("limite de velocidade maxima utrapassado");
        }
    };
};

var carro1 = new Carro("Fiat", "Uno", "1999", 300, 100);





