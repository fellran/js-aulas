class Carro {
    constructor(carroMarca, carroModelo, carroAno, carroCor, carroVelocidadeMaxima){
        this.marca = carroMarca;
        this.modelo = carroModelo;
        this.ano = carroAno;
        this.cor = carroCor;
        this.velocidadeMaxima = carroVelocidadeMaxima;
        this.velocidadeAtual = 0;
    };

    acelerar(velocidadeAcelerada){
        if(velocidadeAcelerada <= 0){
            return "velocidade invalida";
        }
        else{
            if(velocidadeAcelerada + this.velocidadeAtual > this.carroVelocidadeMaxima){
                return "velocidade invalida"
            }
            else{
                this.velocidadeAtual += velocidadeAcelerada;
                return "voce acelerou " + velocidadeAcelerada+"Km";
            };
        };
    };
};

var btnCarro = document.querySelector("#btnCarro");

btnCarro.addEventListener("click", criarCarro);

function criarCarro(){
    // ENTRADA DE DADOS
    let marcaInput = document.querySelector("#marca").value;
    let modeloInput = document.querySelector("#modelo").value;
    let dataInput = document.querySelector("#data").value;
    let corInput = document.querySelector("#cor").value;
    let velocidadeMaxInput = document.querySelector("#velocidadeMax").value;
    let resposta = document.querySelector("#resposta");

    // PROCESSADOR
    var carro = new Carro(marcaInput, modeloInput, dataInput, corInput, velocidadeMaxInput);

    // SAIDA DE DADOS
    resposta.innerHTML = `<div class="post">
                        <h3>Modelo -  ${carro.modelo}</h3>
                        <p>Marca - ${carro.marca}</p>
                        <p>Ano - ${carro.ano}</p>
                        <p>Cor - ${carro.cor}</p>
                        <p>Velocidade - ${carro.velocidadeMaxima} Km</p>
                        </div>`;
};
