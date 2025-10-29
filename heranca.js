class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    cumprimentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

const pessoa1 = new Pessoa("Rafaela", 28);
pessoa1.cumprimentar();

class Aluno extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }

    cumprimentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e curso ${this.curso}.`);
    }
}

const aluno1 = new Aluno("Eugenia", 26, "cinema");
aluno1.cumprimentar();

class Animal {
    emitirSom() {
        console.log("Ruído genérico de animal");
    }
}

class Cachorro extends Animal {
    emitirSom() {
        console.log("Latido");
    }
}

class Gato extends Animal {
    emitirSom() {
        console.log("Miado");
    }
}

const animais = [new Animal(), new Cachorro(), new Gato()];
animais.forEach(a => a.emitirSom());