const pConsole = require("console-read-write");

async function main(){
    pConsole.write("Calculo de velocidade final");

    pConsole.write("Digite a velocidade Inicial: ");
    const Inicial = Number(await pConsole.read());
    pConsole.write("Digite a aceleração: ");
    const Aceleracao = Number(await pConsole.read());
    pConsole.write("Digite o tempo de percurso: ");
    const Percurso = Number(await pConsole.read());

    const resultado = ((Percurso * Aceleracao + Inicial)* 3.6);

    pConsole.write("A velocidade final é: "+resultado.toFixed(0)+"km/h");

}

main();
