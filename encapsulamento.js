// class ContaBancaria {
//     #saldo = 0;

//     depositar(valor) {
//         if (valor > 0) {
//             this.#saldo += valor;
//         }
//         else {
//             console.log("Digite um valor válido para o depósito");
//         }
//     }

//     sacar(valor) {
//         if (valor > 0) {
//             this.#saldo -= valor;
//         }
//         else {
//             console.log("Digite um valor válido para o saque");
//         }
//     }

//     verSaldo() {
//         console.log(`O saldo atual da conta é: ${this.#saldo}`);
//     }
// }

// const conta = new ContaBancaria();
// conta.depositar(500);
// conta.sacar(250);
// conta.verSaldo();

class Usuario {
    #senha = '';
    #email = '';

    setSenha(novaSenha) {
        if (novaSenha.length === 6) {
            this.#senha = novaSenha;
        }
        else {
            console.log("A senha deve ter 6 caracteres");
        }
    }

    autenticar(senhaInformada) {
        if (senhaInformada === this.#senha) {
            console.log("Acesso garantido");
        }
        else {
            console.log("Acesso negado");
        }

    }
}

const user1 = new Usuario();
user1.setSenha("banana");
user1.autenticar("banana");