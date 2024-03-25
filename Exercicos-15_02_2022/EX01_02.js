const pConsole = require("console-read-write");

async function arestaQuadrado()
    {
        pConsole.write("Calculo de área de quadrados apartir da aresta");
        pConsole.write("Digite a aresta do quadrado: ");
        const qAresta = Number(await pConsole.read());
        
        resultado = Math.pow(qAresta, 2);
        pConsole.write("A área do quadrado é: "+ resultado);
    }
arestaQuadrado();
