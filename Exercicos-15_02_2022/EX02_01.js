const pConsole = require("console-read-write");

async function main(){
    pConsole.write("Calculo da area de um circulo");
    pConsole.write("Digite o diametro: ");
    const acDiametro = Number(await pConsole.read());

    const resultado = (Math.PI * acDiametro);

    pConsole.write("a area é: "+resultado.toFixed(3));

}

main();
