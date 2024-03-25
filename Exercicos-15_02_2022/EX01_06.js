const pConsole = require("console-read-write");

async function mediaAritimetica()
    {
        pConsole.write("Calculo da média aritimética");
        pConsole.write("digite o 1º número: ");
        const ma1 = Number(await pConsole.read());
        pConsole.write("digite o 2º número: ");
        const ma2 = Number(await pConsole.read());
        pConsole.write("digite o 3º número: ");
        const ma3 = Number(await pConsole.read());
        pConsole.write("digite o 4º número: ");
        const ma4 = Number(await pConsole.read());
        
        resultado = (ma1 + ma2 + ma3 + ma4)/2;
        resultado.toString
        pConsole.write("A média aritimética é: "+ resultado);
    }
mediaAritimetica();