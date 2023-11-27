// var clienteNome = "leonardo";
// var clienteSaldo = 0;
// var clienteAgencia = "001";
// var clienteConta = "25123213";
// var clienteDataDeNascimento = "25/02/1998";

// var cliente1 = ["nome = leonardo", "saldo = 99999"]

class Cliente {
    nome;
    dataNascimento;
    cpf;
    conta;
    agencia;
    saldo;
    sacar(valor){
        // saldo -= saldo - valor;
        // this.atriduto => atributo da classe
        if (this.saldo >= valor){
            this.saldo = this.saldo - valor;
            return "valor sacado : R$" +valor;
        }
        else{
            return "operação nao autorizada! tá quebrado hein!"
        };
    };
    // depositar();
    depositar(valor){
        if (valor > 0){
            this.saldo = this.saldo + valor;
            return "valor depositado : R$" +valor;
        }
        else{
            return "operação nao autorizada! tá quebrado hein!"
        };
    };
};

var cliente1 = new Cliente();
cliente1.nome = "leonardo";
cliente1.dataNascimento = "25/02/1998";
cliente1.cpf = 9999;
cliente1.agencia = "001"
cliente1.saldo = 100;

console.log(cliente1);

var cliente2 = new Cliente();
