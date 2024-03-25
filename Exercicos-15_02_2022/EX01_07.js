const pConsole = require("console-read-write");

async function mediaGeometrica()
    {
        pConsole.write("Calculo de média geométrica");
        pConsole.write("digite o 1º valor");
        const mg1 = Number(await pConsole.read());
        pConsole.write("digite o 2º valor");
        const mg2 = Number(await pConsole.read());
    
        resultado = Math.sqrt(mg1 * mg2);
        resultado.toString
        pConsole.write("A média geométrica é: "+ resultado);
    }
mediaGeometrica();