import { Aluno } from "./Aluno.js";
import { Diretor } from "./Diretor.js";
import { Professor } from "./Professor.js";

let fulano: Aluno = new Aluno("Thabata", 29, "Florianópolis", [10, 8, 9])
let alunoTeste: Aluno = new Aluno("João", 30, "Blumenal", [6, 5, 4])
let aluno1: Aluno = new Aluno("Jerold", 15, "Massashucets", [10, 10, 10])
let aluno2: Aluno = new Aluno("juninho", 18, " palhoça", [7, 8, 9])
let professorOliota: Professor = new Professor("Oliota", 33, "Blumenal", [fulano, alunoTeste])
let professoraIsa: Professor = new Professor("Isabelle", 25, "Blumenal", [aluno1,aluno2])
let diretor1: Diretor = new Diretor("Carlos", 45, "Blumenal", [professorOliota, professoraIsa])



console.log(fulano.nome, fulano.cidade, fulano.idade);
console.log(fulano.apresentar(), "Minha media é ", fulano.calcularMedia());
console.log(professorOliota.apresentar());
console.log(professorOliota.gerarBoletins());
console.log(diretor1.apresentar());
console.log(professoraIsa.gerarBoletins());
console.log(diretor1.relatorioDesempenho());

