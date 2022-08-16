import { Pessoa } from "./Pessoa.js"
import { Professor } from "./Professor.js"

export class Diretor extends Pessoa{

public professores:Array<Professor>

constructor(nome: string, idade: number, cidade: string, professores:Array<Professor>) {
   super(nome,idade,cidade)
    this.professores = professores
}

public apresentar(): string {
    return `Ola sou o Diretor ${this.nome}, tenho ${this.idade} anos.`
}
public relatorioDesempenho ():Array<number>{
    let desempenhos : Array<number>=[]
    this.professores.forEach(professor => {
        desempenhos.push(professor.gerarBoletins().reduce((anterior, posterior)=> anterior+posterior,0))
    });
    return desempenhos
}




}



