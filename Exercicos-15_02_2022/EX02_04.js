const pConsole = require("console-read-write");

async function main(){
    pConsole.write("Calculo de volume livre");

    pConsole.write("Digite o raio: ");
    const r = Number(await pConsole.read());
    pConsole.write("Digite a aresta: ");
    const a = Number(await pConsole.read());

    const resultado = (a-(4/3)*Math.PI*r);

    pConsole.write("O volume livre é: "+resultado.toFixed(3));

}

main();
