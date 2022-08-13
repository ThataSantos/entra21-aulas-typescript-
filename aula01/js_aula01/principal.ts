let nome: string = "Thabata Santos"
let idade: number = 28
console.log(nome, idade);
$("<p>", {
    text: `oi  ${nome} você tem  ${idade} anos`
}).appendTo("body")

function teste(): number {
    return 0;
}

function dados(nome: string, idade: number): boolean {
    if (nome == "thabata santos" && idade == 28) {
        return true;
    } else {
        return false;
    }

}

function somar(numA:number, numB:number):number {
    return numA+numB
}
console.log("A soma deu",somar(1,5));
