class Funcionario {

    calcularSalario() {
        console.log("Nulo");
    }
}

class FuncionarioHorista extends Funcionario {

    constructor(valorHora, horaTrabalhada){
        super();
        this.valorHora = valorHora;
        this.horaTrabalhada = horaTrabalhada;
    }

    calcularSalario() {
        this.salario = this.valorHora * this.horaTrabalhada;
        console.log(`O salário do Horista é ${this.salario}.`);
    }  
}

class FuncionarioAssalariado extends Funcionario {

    constructor(salarioMensal) {
        super();
        this.salarioMensal = salarioMensal;
    }

    calcularSalario() {
        this.salario = this.salarioMensal;
        console.log(`O salário do mensal é ${this.salario}.`);
    }
}

const funcionarios = [new Funcionario(), new FuncionarioHorista(60,8), new FuncionarioAssalariado(8000)];
funcionarios.forEach(a => a.calcularSalario());

class Forma {

    calcularArea() {
        console.log("Nulo");
    };
}

class Quadrado extends Forma {

    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea() {
        this.area = this.lado * this.lado;
        console.log(this.area);
    }
}

class Retangulo extends Forma {

    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        this.area = this.base * this.altura;
        console.log(this.area);
    }
}

class Circulo extends Forma {

    constructor(raio) {
        super();
        this.raio = raio;
    }

    calcularArea() {
        this.area = 3.14 * this.raio;
        console.log(this.area);
    }
}

const formas = [new Forma(), new Quadrado(4), new Retangulo(4, 2), new Circulo(6)];
formas.forEach(a => a.calcularArea());


