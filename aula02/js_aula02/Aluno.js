export class Aluno {
    constructor(nome, idade, notas) {
        this.nome = nome;
        this.idade = idade;
        this.notas = notas;
    }
    apresentar() {
        return `Ola meu nome é ${this.nome} e tenho ${this.idade}`;
    }
    calcularMedia() {
        let soma = 0;
        this.notas.forEach(notas => {
            soma += notas;
        });
        return soma / this.notas.length;
        // essa linha faz o calculo da media de uma forma mais facil
        //return this.notas.reduce((anterior, posterior) => anterior + posterior, 0) / this.notas.length
    }
}
