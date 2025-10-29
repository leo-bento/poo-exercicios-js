class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

class Aluno extends Pessoa {
    #notas = []
    constructor(nome, idade, matricula, curso) {
        super(nome, idade);
        this.matricula = matricula;
        this.curso = curso;
    }

    adicionarNotas(n1, n2, n3) {
        this.#notas.push(n1, n2, n3);
        console.log(`Nota 1: ${this.#notas[0]} Nota 2: ${this.#notas[1]} Nota 3: ${this.#notas[2]}`);
    }

    calcularMedia() {
        let notas = this.#notas;
        if (notas.length === 0) {
            console.log("Nenhuma nota foi adicionada");
            return;
        }

        const soma = notas.reduce((acc, nota) => acc + nota, 0);
        const media = soma / notas.length;
        console.log(`Média final: ${media}`);
     
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e curso ${this.curso}.`);
    }
}

class Professor extends Pessoa {
    constructor(nome, idade, disciplina) {
        super(nome, idade);
        this.disciplina = disciplina;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e dou aula de ${this.disciplina}.`);
    }


}

class Turmas {
    constructor(codigo, alunos=[], professor) {
        this.codigo = codigo;
        this.alunos = alunos;
        this.professor = professor;
    }
}

const aluno1 = new Aluno("Rafaela", 28, "23456", "Administração");
aluno1.adicionarNotas(10, 8, 6);
aluno1.calcularMedia();
aluno1.apresentar();

const professor1 = new Professor("Roberto", 46, "Geografia");
professor1.apresentar();
