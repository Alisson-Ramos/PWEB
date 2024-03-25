const pConsole = require("console-read-write");

async function tensaoEletrica()
{
    pConsole.write("Calculo de tensão eletrica de um circuito");
    pConsole.write("digite o valor da corrente");
    const tCorrente = Number(await pConsole.read());
    pConsole.write("digite o valor da resistencia");
    const tResistencia = Number(await pConsole.read());

    resultado = tCorrente * tResistencia;
    resultado.toString
    pConsole.write("A tensão eletrica é: "+ resultado+"hm");
}
tensaoEletrica();