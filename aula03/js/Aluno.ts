import { Pessoa } from "./Pessoa.js"

export class Aluno extends Pessoa {
        private notas: Array<number>

    constructor(nome: string, idade: number,cidade: string, notas: Array<number>) {
       super(nome,idade,cidade)
        this.notas = notas
    }
    public apresentar(): string {
        return `Ola meu nome é ${this.nome} e tenho ${this.idade}`
    }
    public calcularMedia(): number {
        let soma: number = 0
        return this.notas.reduce((anterior, posterior) => anterior + posterior, 0) / this.notas.length
    }

}