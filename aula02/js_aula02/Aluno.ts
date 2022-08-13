export class Aluno {
    public nome: string
    public idade: number
    private notas: Array<number>

    constructor(nome: string, idade: number, notas: Array<number>) {
        this.nome = nome
        this.idade = idade
        this.notas = notas
    }
    public apresentar(): string {
        return `Ola meu nome é ${this.nome} e tenho ${this.idade}`
    }
    public calcularMedia(): number {
        let soma: number = 0
        this.notas.forEach(notas => {
            soma += notas
        });
        return soma / this.notas.length

        // essa linha faz o calculo da media de uma forma mais facil
        //return this.notas.reduce((anterior, posterior) => anterior + posterior, 0) / this.notas.length
    }

}