export class Animal {
    //atributos
    private especie: string
    public nome: string
    public peso: number
    public habitat: Array<string>
    //construtor
    constructor(
        especie: string,
        nome: string,
        peso: number,
        habitat: Array<string>,
    ) {
        this.especie = especie
        this.nome = nome
        this.peso = peso
        this.habitat = habitat
    }
    //metodos
    public get getEspecie(): string {
        return this.especie;
    }
    public set setEspecie(especie: string) {
        this.especie = especie
    }
}

