import { Pessoa } from "./Pessoa.js";
export class Aluno extends Pessoa {
    constructor(nome, idade, cidade, notas) {
        super(nome, idade, cidade);
        this.notas = notas;
    }
    apresentar() {
        return `Ola meu nome é ${this.nome} e tenho ${this.idade}`;
    }
    calcularMedia() {
        let soma = 0;
        return this.notas.reduce((anterior, posterior) => anterior + posterior, 0) / this.notas.length;
    }
}
