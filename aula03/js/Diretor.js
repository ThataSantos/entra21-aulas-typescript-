import { Pessoa } from "./Pessoa.js";
export class Diretor extends Pessoa {
    constructor(nome, idade, cidade, professores) {
        super(nome, idade, cidade);
        this.professores = professores;
    }
    apresentar() {
        return `Ola sou o Diretor ${this.nome}, tenho ${this.idade} anos.`;
    }
    relatorioDesempenho() {
        let desempenhos = [];
        this.professores.forEach(professor => {
            desempenhos.push(professor.gerarBoletins().reduce((anterior, posterior) => anterior + posterior, 0));
        });
        return desempenhos;
    }
}
