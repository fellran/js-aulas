class Aluno {
    constructor(valNome, valIdade, valorTurma){
        this.nome = valNome;
        this.idade = valIdade;
        this.turma = valorTurma;
    }
};

class Curso {
    constructor(valNome, valduracao, valorTipo){
        this.nome = valNome;
        this.duracao = valduracao;
        this.tipo = valorTipo;
    }
};

var curso1 = new Curso("FRONT", 220, "Tecnologia") 
var curso2 = new Curso("Java", 400, "Tecnologia") 

var aluno1 = new Aluno("leandro", 25, curso1);
var aluno2 = new Aluno("alice", 20, curso2);

// ATRIBUTO PRIVATIVO = APENAS O OBJETO EM SI PODERÁ MUDAR SEUS VALORES, NÃO ACEITAMOS UMA REATRIBUIÇÃO FORA DE SEU OBJETO
