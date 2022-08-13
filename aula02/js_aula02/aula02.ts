import { Aluno } from "./Aluno.js";
import { Animal } from "./Animal.js";
import { Professor } from "./Professor.js";
import { Vendedor } from "./Vendedor.js";

console.log("Aula 02 funcionou");
let animal1: Animal = new Animal("Drosofila", "Mosca", 0.5, ["Ar", "Lixo", "comida"])
console.log(animal1);
console.log(animal1.nome);
console.log(animal1.peso);
console.log(animal1.habitat[0]);
console.log(animal1.getEspecie);


animal1.nome = "Cachorro"
animal1.peso = 2.5
animal1.habitat[0] = "Jardim"
animal1.setEspecie = "Luposcanino"


console.log(animal1);
console.log(animal1.nome);
console.log(animal1.peso);
console.log(animal1.habitat[0]);
console.log(animal1.getEspecie);

let animal2: Animal = new Animal("Felis silvestris catus", "Gato", 1.5, ["Jardim", "Floresta"]);
console.log(animal2);
console.log(animal2.nome);
console.log(animal2.peso);
console.log(animal2.habitat[0]);
console.log(animal2.getEspecie);

animal1.nome = "coruja-das-neves"
animal1.peso = 1.8
animal1.habitat[0] = "frio"
animal1.habitat[2] = "Ártico"
animal1.setEspecie = " B. scandiacus"

console.log(animal2);
console.log(animal2.nome);
console.log(animal2.peso);
console.log(animal2.habitat[0]);
console.log(animal2.getEspecie);

let thata: Aluno = new Aluno("Thabata Santos", 28, [10, 10, 10])
console.log(thata);
console.log(thata.apresentar());
console.log(thata.nome);
console.log(thata.idade);
console.log(thata.calcularMedia());

let joaozinho: Aluno = new Aluno("Joãozinho da Silva", 16, [10, 10, 10])
console.log(joaozinho);
console.log(joaozinho.apresentar());
console.log(joaozinho.nome);
console.log(joaozinho.idade);
console.log(joaozinho.calcularMedia());

let professor1: Professor = new Professor("Oliota", 33, ["java", "html", "javascript"], 90, 400)
console.log(professor1);
console.log(professor1.apresentar());
console.log(professor1.nome);
console.log(professor1.idade);
console.log(professor1.disciplinas.join(","));
console.log(" o Redimento é R$",professor1.calcularRendimento());

let vendedor1: Vendedor = new Vendedor("thabata",28,50,5000)
console.log(vendedor1);
console.log(vendedor1.apresentar());
console.log(vendedor1.nome);
console.log(vendedor1.idade);
console.log(vendedor1.comissao);
console.log(vendedor1.vendasRealizadas);
console.log(" o Redimento é R$",vendedor1.calcularRendimento()," %");