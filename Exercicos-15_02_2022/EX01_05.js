const pConsole = require("console-read-write");

async function volumeCirculo()
    {
        pConsole.write("Calculo do volume do circulo");
        pConsole.write("Digite o diametro: ");
        const cDiametro = Number(await pConsole.read());
        const rRaio = cDiametro/2;
        
        resultado = ((4 * 3.1415) * Math.pow(rRaio, 3))/3;
        resultado.toString;
        pConsole.write("O volume é: "+ resultado);
    }
volumeCirculo();