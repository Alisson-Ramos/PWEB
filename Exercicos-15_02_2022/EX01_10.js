const pConsole = require("console-read-write");

async function grausCelsius()
{
    pConsole.write("Conversor de celsisus em fahrenheit");
    pConsole.write("digite p valor em graus celsius");
    const tCelsius = Number(await pConsole.read());

    resultado = (9.0 / 5)*tCelsius + 32;
    resultado.toString
    pConsole.write("A temperatura em fahrenheit é: "+ resultado);

}
grausCelsius();