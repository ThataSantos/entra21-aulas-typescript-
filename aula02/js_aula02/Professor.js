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
    constructor(nome, idade, disciplinas, valorHora, quantidadeHoras) {
        this.nome = nome;
        this.idade = idade;
        this.disciplinas = disciplinas;
        this.valorHora = valorHora;
        this.quantidadeHoras = quantidadeHoras;
    }
    apresentar() {
        return `Ola sou o Professor ${this.nome}, tenho ${this.idade} anos.
        Lecionei essa disciplinas ${this.disciplinas.join(",")}`;
    }
    calcularRendimento() {
        return this.valorHora * this.quantidadeHoras;
    }
}
