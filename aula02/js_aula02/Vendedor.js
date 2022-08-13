// atributos
// nome
// idade
// comissao
// vendasRealizadas
// métodos
// apresentar
// calcularRendimento
export class Vendedor {
    constructor(nome, idade, comissao, vendasRealizadas) {
        this.nome = nome;
        this.idade = idade;
        this.comissao = comissao;
        this.vendasRealizadas = vendasRealizadas;
    }
    apresentar() {
        return `Ola sou o Professor ${this.nome}, tenho ${this.idade} anos.`;
    }
    calcularRendimento() {
        return this.vendasRealizadas * this.comissao;
    }
}
