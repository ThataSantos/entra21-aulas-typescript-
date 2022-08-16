import { Aluno } from "./Aluno.js"
import { Pessoa } from "./Pessoa.js"

export class Professor extends Pessoa {
    public alunos: Array<Aluno>
    constructor(nome: string, idade: number, cidade: string, alunos: Array<Aluno>) {
        super(nome, idade, cidade)
        this.alunos = alunos
    }
    public apresentar(): string {
        return `Ola sou o Professor ${this.nome}, tenho ${this.idade} anos.`
    }
    public gerarBoletins(): Array<number> {
        let boletins: Array<number> =[]
        this.alunos.forEach(aluno => {
            boletins.push(aluno.calcularMedia())
        });
        return boletins
    }

}