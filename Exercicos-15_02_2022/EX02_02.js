const pConsole = require("console-read-write");

async function main(){
    pConsole.write("Calculo do volume do cone");

    pConsole.write("Digite a altura: ");
    const acAltura = Number(await pConsole.read());
    pConsole.write("Digite o raio da base: ");
    const acRaio = Number(await pConsole.read());

    const calculo = (Math.Pi) * Math.sqrt(acRaio) * acAltura;
    const resultado = (calculo/3);

    pConsole.write("o volume é: "+calculo.toFixed(3));
    

}

main();
