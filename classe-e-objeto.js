class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    descrever() {
        console.log(`Este carro é um ${this.marca} ${this.modelo} de ${this.ano}`);
    }
}

const carro1 = new Carro("Nissan", "March", 2013);
carro1.descrever();

const carro2 = new Carro("Mitsubishi", "Lancer", 1998);
carro2.descrever();

class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    vender(quantidade) {
        this.estoque -= quantidade;
        console.log(this.estoque);
    }

    repor(quantidade) {
        this.estoque += quantidade;
        console.log(this.estoque);
    }
}

const produto1 = new Produto("Chocolate", 8.50, 20);
produto1.vender(5);
produto1.repor(5);