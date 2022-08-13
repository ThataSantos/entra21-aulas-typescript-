// atributos
// nome
// idade
// comissao
// vendasRealizadas
// métodos
// apresentar
// calcularRendimento
export class Vendedor {

    public nome: string
    public idade: number
    public comissao: number
    public vendasRealizadas: number

    constructor(nome: string, idade: number, comissao: number, vendasRealizadas: number) {
        this.nome = nome
        this.idade = idade
        this.comissao = comissao
        this.vendasRealizadas = vendasRealizadas

    }

    public apresentar(): string {
        return `Ola sou o Professor ${this.nome}, tenho ${this.idade} anos.`
    }

    public calcularRendimento(): number {
        return this.vendasRealizadas * this.comissao
    }
}