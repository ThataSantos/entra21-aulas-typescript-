// atributos
// nome
// idade
// disciplina
// valorHora
// quantidadeHoras
// métodos
// apresentar
// calcularRendimento


export class Professor {

    public nome: string
    public idade: number
    public disciplinas: Array<string>
    public valorHora: number
    public quantidadeHoras: number

    constructor(nome: string, idade: number, disciplinas: Array<string>, valorHora: number, quantidadeHoras: number) {
        this.nome = nome
        this.idade = idade
        this.disciplinas = disciplinas
        this.valorHora = valorHora
        this.quantidadeHoras = quantidadeHoras

    }
    public apresentar(): string {
        return `Ola sou o Professor ${this.nome}, tenho ${this.idade} anos.
        Lecionei essa disciplinas ${this.disciplinas.join(",")}`
    }

    public calcularRendimento(): number {
        return this.valorHora * this.quantidadeHoras
    }
}